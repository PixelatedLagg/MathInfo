import '../index.css';

function randomNum(lower, upper)
{
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

export default function FractionDecomposition(props) {
    document.title = "Fraction Decomposition";
    props.onSetNames("Interactive Fraction*Decomposition");
    props.onSetLinks("/interactive /interactive/fraction-decomposition");
    return (
        <div className='content'>
            <div className='section'>
                <div className="text">
                    <h1>Fraction Decomposition</h1>
                    <div className="checkboxes">
                        <div className="input-label"><input type="number" id="0" defaultValue={5}/><label htmlFor="0">Maximum Numerator Degrees</label></div>
                        <div className="input-label"><input type="number" id="1" defaultValue={5}/><label htmlFor="1">Minimum Numerator Degrees</label></div>
                        <div className="input-label"><input type="number" id="2" defaultValue={5}/><label htmlFor="2">Maximum Denominator Degrees</label></div>
                        <div className="input-label"><input type="number" id="3" defaultValue={5}/><label htmlFor="3">Minimum Denominator Degrees</label></div>
                        <div className="input-label"><input type="checkbox" id="4" defaultValue={true}/><label htmlFor="4">Automatically Factor</label></div>
                    </div>
                    <button type="button" className='interactive-button' tabIndex="0">Generate New Problem</button>
                </div>
                <div className='media'>
                </div>
            </div>
        </div>
        );
}