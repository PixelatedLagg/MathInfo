import { Routes, Route, useParams } from 'react-router-dom';
import React, { Component } from 'react';

export default function Section() {
  const { res } = useParams();
  
  return (
    <div>
      <p>{res}</p>
    </div>
  );
}