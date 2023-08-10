import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function ReadSection(section, index)
{
  return (
    <div className="section" key={index}>
      <div className="text" dangerouslySetInnerHTML={{ __html: section.text }}></div>
      <div className="media" dangerouslySetInnerHTML={{ __html: section.image }}></div>
    </div>
  );
}

export default function Article() {
    var { res, article } = useParams();
    res = res.toLowerCase();
    article = article.toLowerCase();
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
        if (!resource.hasOwnProperty(article))
        {
            window.location.href = "https://mathinfo.org";
        }
        const articleObject = resource[article];
        document.title = `MathInfo - ${articleObject.title}`;
        return (
            <div className="content">
              {articleObject.sections.map((element, index) => ReadSection(element, index))}
            </div>
          );
    }
}