import './index.css';
import React from 'react';

export default function Sites() {
    document.title = "MathInfo - Other Sites";
    return (
        <div className="content">
            <div className="text">
                <h1>Other Sites</h1>
                <p>Here is a list of websites useful for math!</p>
                <ul>
                    <li>
                        <a href='https://www.khanacademy.org/'>Khan Academy</a>
                    </li>
                    <li>
                        <a href='https://mathisfun.com/'>MathIsFun</a>
                    </li>
                    <li>
                        <a href='https://chilimath.com/'>ChiliMath</a>
                    </li>
                    <li>
                        <a href='https://encyclopediaofmath.org/wiki/Main_Page'>Encyclopedia of Math</a>
                    </li>
                    <li>
                        <a href='https://sophisticatedprimate.com/'>SophisticatedPrimate</a>
                    </li>
                </ul>
            </div>
        </div>
            );
}