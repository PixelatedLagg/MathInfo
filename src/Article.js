import { Routes, Route, useParams } from 'react-router-dom';
import React, { Component, useState, useEffect } from 'react';
import { CheckImage } from './Section';

export default function Article() {
    var { res, article } = useParams();
    res = res.toLowerCase();
    article = article.toLowerCase();
    const [resources, setResources] = useState([]);
    useEffect(() => {
        import(`./data/Resources.json`)
        .then((res) => setResources(res.default.Resources))
        .catch(_ => null);
    }, []);
    if (!resources.includes(res) && resources.length != 0)
    {
        window.location.href = "https://mathinfo.org";
    }
    const [resource, setResource] = useState([]);
    useEffect(() => {
        import(`./data/sections/${res}.json`)
        .then((res) => setResource(res.default))
        .catch(_ => null);
    }, []);
    if (resource.length != 0)
    {
        if (!resource.hasOwnProperty(article))
        {
            window.location.href = "https://mathinfo.org";
        }
        const articleObject = resource[article];
        return (
            <div className="content">
              <div className="text">
              {resource.Summary.text.map((element, index) => CheckImage(element, index))}
              </div>
              <div className="media">
                {articleObject.media.map((element, index) => React.createElement("div", { classname: "image", key: index }, 
                React.createElement("img", { key : index, src : element.src, alt : element.caption }), React.createElement("p", null, element.caption)))}
              </div>
            </div>
          );
    }
}