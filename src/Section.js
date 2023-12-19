import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function CheckSummary(element, index, resource)
{
  if (element === "Summary")
  {
    return;
  }
  return React.createElement("li", { key: index }, <Link key={index} to={element}>{resource[element].title}</Link>);
}

export function Section(props) {
  var { res } = useParams();
  res = res.toLowerCase();
  document.title = res.charAt(0).toUpperCase() + res.slice(1);
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
    props.onSetNames(document.title);
    props.onSetLinks(`/${res}`);
    return (
      <div className="content" role="main">
        <div className="text">
          <div dangerouslySetInnerHTML={{ __html: resource.Summary.text }}></div>
          <h2>Articles:</h2>
          <ul>
            {Object.keys(resource).map((element, index) => CheckSummary(element, index, resource))}
          </ul>
        </div>
        <div className="media" dangerouslySetInnerHTML={{ __html: resource.Summary.image }}></div>
      </div>
    );
  }
}