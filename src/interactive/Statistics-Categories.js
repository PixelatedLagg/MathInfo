import '../index.css';
import React, { useState, useEffect } from 'react';

export default function StatisticsCategories(props) {
    document.title = "Statistics Categories";
    props.onSetNames("Interactive Statistics*Categories");
    props.onSetLinks("/interactive /interactive/statistics-categories");
    return (
        <div className='content'>
            <div className='section'>
                <div className="text">
                    <h1>Statistics Categories</h1>
                    <button type="button" className='interactive-button' tabIndex="0">Generate New Problem</button>
                    <p style={{marginTop: "8px", marginLeft: "8px"}}>Solution:</p>
                </div>
                <div className='media'>
                    <div className='image'>
                        <img src='/imgs/Trigonometry/1_3.png' alt=""></img>
                        <p>All 6 trigonometric functions of an angle on a triangle of side lengths 5, 4, and 3.</p>
                    </div>
                </div>
            </div>
        </div>
        );
}