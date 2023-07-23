import { Routes, Route, useParams } from 'react-router-dom';
import React, { Component, useState, useEffect } from 'react';

export default function Section() {
  var { res } = useParams();
  res = res.toLowerCase();
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
  console.log(resource);


}



/*return (
        <div className="content">
          <div className="text">
            {summary.text.map((element, content, index) => React.createElement(element, { key: index }, content))}
          </div>
        </div>
      );*/