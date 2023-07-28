import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export function CheckImage(element, index)
{
    if (element.tag === "img")
    {
      return React.createElement("img", { key: index, src: element.src }, null);
    }
    else
    {
      return React.createElement(element.tag, { key: index }, element.content);
    }
}

function CheckSummary(element, index)
{
  if (element === "Summary")
  {
    return;
  }
  return React.createElement("li", { key: index }, <Link key={index} to={element}>{element}</Link>);
}

export function Section() {
  var { res } = useParams();
  res = res.toLowerCase();
  const [resources, setResources] = useState([]);
  useEffect(() => {
    import(`./data/Resources.json`)
      .then((res) => setResources(res.default.Resources))
      .catch(_ => null);
  }, [res]);
  if (!resources.includes(res) && resources.length !== 0)
  {
    window.location.href = "https://mathinfo.org";
  }
  const [resource, setResource] = useState([]);
  useEffect(() => {
    import(`./data/sections/${res}.json`)
      .then((res) => setResource(res.default))
      .catch(_ => null);
  }, [res]);
  if (resource.length !== 0)
  {
    return (
      <div className="content">
        <div className="text">
          {resource.Summary.text.map((element, index) => CheckImage(element, index))}
          <h2>Articles:</h2>
          <ul>
            {Object.keys(resource).map((element, index) => CheckSummary(element, index))}
          </ul>
        </div>
        <div className="media">
          {resource.Summary.media.map((element, index) => React.createElement("div", { className: "image", key: index }, 
          React.createElement("img", { key : index, src : element.src, alt : element.caption }), React.createElement("p", null, element.caption)))}
        </div>
      </div>
    );
  }
}