import { Routes, Route, useParams } from 'react-router-dom';
import React, { Component } from 'react';
import readJson from './readJson';

export default function Section() {
  var { res } = useParams();
  res = res.toLowerCase();
  const resources = readJson("data/Resources.json").then((data) => {
    
    return (
      <div>
        <p>{res}</p>
      </div>
    );
  });
}