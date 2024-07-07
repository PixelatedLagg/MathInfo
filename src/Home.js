import './index.css';
import { React, useEffect } from 'react';

export default function Home(props){
    document.title = "Home";
    useEffect(() => {
        props.onSetNames("Home");
        props.onSetLinks("/");
    }, [props]);
    return (
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
    );
}