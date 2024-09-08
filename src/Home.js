import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GoogleAd from './GoogleAd'

function toggleFontSize()
{
    if (document.documentElement.getAttribute("font-size") === "normal")
    {
        localStorage.setItem("font-size", "double");
        document.documentElement.setAttribute("font-size", "double");
    }
    else
    {
        localStorage.setItem("font-size", "normal");
        document.documentElement.setAttribute("font-size", "normal");
    }
}

export default function Home(){
    return (
        <div>
            
            <img src={"/imgs/Logos/fulltext.svg"} style={{marginTop: "32px", width: "100%"}}></img>
            <div className="home-alltext">
                <h1>Welcome</h1>
                <p style={{marginBottom: "16px"}}>Here you will find (mainly article-based) resources for Mathematics and Computer Science, along with some interactive activities to test your understanding.<br></br>William Olsen and Alexander De Carlo, two high school students passionate about these topics, created this website to share valuable knowledge with others. <button onClick={toggleFontSize}>Toggle 200% font size.</button></p>
            </div>
            <div className="button-grid">
            <Link to="/algebra">
                <img src="imgs/Logos/algebra.webp" width="48px" height="48px" alt="Algebra" />
                <p>Algebra</p>
            </Link>
            <Link to="/trigonometry">
                <img src="imgs/Logos/trig.webp" width="48px" height="48px" alt="Trigonometry" />
                <p>Trigonometry</p>
            </Link>
            <Link to="/calculus">
                <img src="imgs/Logos/calculus.webp" width="48px" height="48px" alt="Calculus" />
                <p>Calculus</p>
            </Link>
            <Link to="/proofs">
                <img src="imgs/Logos/proofs.webp" width="48px" height="48px" alt="Proofs" />
                <p>Proofs</p>
            </Link>
            <Link to="/interactive">
                <img src="imgs/Logos/int.webp" width="48px" height="48px" alt="Interactive" />
                <p>Interactive</p>
            </Link>
            <Link to="/external">
                <img src="imgs/Logos/ext.webp" width="48px" height="48px" alt="External Links" />
                <p>External Links</p>
            </Link>
            </div>
            <GoogleAd />
            <div className="footer">
                <p className="less-p">Mild disclaimer: we employ AI to enhance the editing process for some of our articles. Through its use, we strive to maintain the original structure, core concepts, and intent of the content while focusing on improving clarity and coherence.<br></br>This website is conformant to WCAG 2.2 at Level AAA. <a href="mailto:michiganmii2@gmail.com" aria-label="Send an email to michiganmii2@gmail.com">Email us</a> with any questions or feature requests. View the source code on <a href="https://github.com/PixelatedLagg/MathInfo" aria-label="View the source code on GitHub">Github</a>.</p>
            </div>
        </div>
    );
}


/*
<a href="https://www.w3.org/WAI/WCAG2AAA-Conformance" title="Explanation of WCAG 2 Level AAA conformance" aria-label="Learn more about WCAG 2 Level AAA conformance">
                    <img height="32" width="88" src="https://www.w3.org/WAI/WCAG22/wcag2.2AAA" alt="Level AAA conformance, W3C WAI Web Content Accessibility Guidelines 2.2" id="wcag"></img>
                </a>

*/
/*

<div className="content" role="main">
            <div className="text">
                <h1>Welcome to MathInfo.org</h1>
                <p>Here you will find (mainly article-based) resources for Mathematics and Computer Science, along with some interactive activities to test your understanding.</p>
                <p>Will and Alex, two high school students passionate about these topics, created this website to share valuable knowledge with others.</p>
                <p>Mild disclaimer: we employ AI to enhance the editing process for some of our articles. Through its use, we strive to maintain the original structure, core concepts, and intent of the content while focusing on improving clarity and coherence.</p>
                <p>This website is conformant to WCAG 2.2 at Level AAA. <a href="mailto:michiganmii2@gmail.com" aria-label="Send an email to michiganmii2@gmail.com">Email us</a> with any questions or feature requests. View the source code on <a href="https://github.com/PixelatedLagg/MathInfo" aria-label="View the source code on GitHub">Github</a>.</p>
                <a href="https://www.w3.org/WAI/WCAG2AAA-Conformance" title="Explanation of WCAG 2 Level AAA conformance" aria-label="Learn more about WCAG 2 Level AAA conformance">
                    <img height="32" width="88" src="https://www.w3.org/WAI/WCAG22/wcag2.2AAA" alt="Level AAA conformance, W3C WAI Web Content Accessibility Guidelines 2.2" id="wcag"></img>
                </a>
            </div>
            <div className="media" role="complementary">
                <div className="image">
                <img src="/imgs/logo.webp" alt=""></img>
                    <p>The MathInfo logo.</p>
                </div>
            </div>
        </div>

*/