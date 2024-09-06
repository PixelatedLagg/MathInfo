import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function CheckSummary(element, index, resource)
{
    if (element === "Summary")
    {
        return null;
    }
    
    return (
        <Link key={index} to={element} aria-label={`Visit ${resource[element].title} Page`}>{resource[element].title}</Link>
    );
}

export function Section(props)
{
    const { res } = useParams();
    const lowerRes = res.toLowerCase();
    document.title = lowerRes.charAt(0).toUpperCase() + lowerRes.slice(1);
    const [resources, setResources] = useState([]);
    const [resource, setResource] = useState([]);

    useEffect(() => {
        import(`./data/Resources.json`).then((res) => setResources(res.default.Resources)).catch(() => null);
    }, [lowerRes]);

    useEffect(() => {
        if (resources.length > 0 && !resources.includes(lowerRes))
        {
            window.location.href = "https://mathinfo.org";
        }
    }, [resources, lowerRes]);

    useEffect(() => {
        import(`./data/sections/${lowerRes}.json`).then((res) => setResource(res.default)).catch(() => null);
    }, [lowerRes]);

    useEffect(() => {
        if (resource.length !== 0)
        {
            props.onSetNames(document.title);
            props.onSetLinks(`/${lowerRes}`);
        }
    }, [resource, lowerRes, props]);

    if (resource.length === 0)
    {
        return null;
    }

    return (
        <div className={`${lowerRes}-section`}>
            <div className="home-alltext" style={{marginBottom: "32px"}}dangerouslySetInnerHTML={{ __html: resource.Summary.text }}></div>
            <div className="divider"></div>
            <div className="article-grid">
                {Object.keys(resource).map((element, index) => CheckSummary(element, index, resource))}
            </div>
        </div>
    );
}