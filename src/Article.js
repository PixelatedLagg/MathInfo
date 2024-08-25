import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function ReadSection(section, index)
{
    return (
        <div className="section" key={index}>
            <div className="text" dangerouslySetInnerHTML={{ __html: section.text }}></div>
        </div>
    );
}

export default function Article(props)
{
    var { res, article } = useParams();
    res = res.toLowerCase();
    article = article.toLowerCase();
    const [resources, setResources] = useState([]);
    const [resource, setResource] = useState([]);

    useEffect(() => {
    import(`./data/Resources.json`)
        .then((res) => setResources(res.default.Resources))
        .catch(_ => null);
    }, [res]);

    useEffect(() => {
    if (!resources.includes(res) && resources.length !== 0)
    {
        window.location.href = "https://mathinfo.org";
    }
    }, [resources, res]);

    useEffect(() => {
        import(`./data/sections/${res}.json`).then((res) => setResource(res.default)).catch(_ => null);
    }, [res]);

    useEffect(() => {
        if (resource.length !== 0 && resource.hasOwnProperty(article))
        {
            const articleObject = resource[article];
            document.title = articleObject.title;
            props.onSetNames(`${res.charAt(0).toUpperCase() + res.slice(1)} ${articleObject.title.replaceAll(' ', '*')}`);
            props.onSetLinks(`/${res} /${res}/${article}`);
        }
        else if (resource.length !== 0 && !resource.hasOwnProperty(article))
        {
            window.location.href = "https://mathinfo.org";
        }
        if (window.MathJax)
        {
            window.MathJax.typesetPromise();
        }
    }, [resource, article, res, props]);

    if (resource.length === 0 || !resource.hasOwnProperty(article))
    {
        return null;
    }
    const articleObject = resource[article];
    return (
        <div className="content" role="main">
            {articleObject.sections.map((element, index) => ReadSection(element, index))}
        </div>
    );
}