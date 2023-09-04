import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

function CheckSummary(element, index, resource)
{
  if (element === "Summary")
  {
    return;
  }
  return React.createElement("li", { key: index }, <Link key={index} to={element}>{resource[element].title}</Link>);
}

export function Section() {
  var { res } = useParams();
  res = res.toLowerCase();
  document.title = `MathInfo - ${res.charAt(0).toUpperCase() + res.slice(1)}`;
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
        {/*<Helmet>
          <meta property="og:type" content="website" />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:title" content={res.charAt(0).toUpperCase() + res.slice(1)} />
          <meta property="og:description" content="MathInfo.org is a cool place to learn about Math and Computer Science." />
          <meta property="og:image" content="https://mathinfo.org/mathinfologo.png" />
    </Helmet>*/}
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