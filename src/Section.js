import { Routes, Route, useParams } from 'react-router-dom';
import React, { Component } from 'react';

export default function Section() {
  var { res } = useParams();
  res = res.toLowerCase();
  fetch(`${process.env.PUBLIC_URL}/data/Resources.json`, {headers: {accept: 'application/json'}}).then((response) => response.json()).then((json) => {
    if (!json.Resources.includes(res))
    {
      window.location.href = "https://mathinfo.org";
    }
  });
  fetch(`${process.env.PUBLIC_URL}/data/sections/${res}.json`, {headers: {accept: 'application/json'}}).then((response) => response.json()).then((json) => {
    const summary = json.Summary;
    console.log(json);
    return (
      <div className="content">
        <div className="text">
          {summary.text.map((element, content, index) => React.createElement(element, { key: index }, content))}
        </div>
      </div>
    );
  });
}