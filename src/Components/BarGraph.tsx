import React from 'react';
import './bar-graph-styles.css';

interface BarGraphProps {
    heightsArray : number[]
    labels? : string[]
    color?: string
    markerCount : number
}

export const BarGraph: React.FC<BarGraphProps> = ({heightsArray, markerCount = 3, labels=[]}) => {
    let markers: React.JSX.Element[]  = [], markerLabels : React.JSX.Element[] = [], labelArray: React.JSX.Element[] = [];
    for (let i = 0; i < markerCount; i++) {
        markers.push(<hr key={`marker-${i}`}/>);
    }
    markers.push(<hr style={{visibility: 'hidden'}} key={`marker-${markers.length + 1}`}/>); //Dummy hr for zero
    const maxValue = Math.max(...heightsArray);
    const step = 10**(Math.floor(Math.log10(maxValue)) - 1)*5;
    const maxMarker = Math.ceil(maxValue/step)*step;
    const markerNum = Math.min(markerCount, 20);
    for (let i = markerNum; i>=0; i--)
        markerLabels.push(<span className="marker-text">{Math.round(maxMarker*i/markerNum * 100)/100}</span>);
    for (let i = 0; i < labels.length; i++)
        labelArray.push(<span style={{width: `${100/(heightsArray.length*1.25)}%`}}>{labels[i]}</span>);
    return (
    <>
    <div className="container">
        <div className="bargraph-container">
            <div className="marker-labels">
                {markerLabels}
            </div>
            <div className="chart-container">
                <div className="barMarker-container">
                    <div className="marker-container">
                       {markers}
                    </div>
                    <div className="bar-container">
                        {heightsArray.map((val : number, idx : number) => (
                                <div className="bar" key={`bar-${idx}`} style={{height: `${val/maxMarker*100}%`, width: `${100/(heightsArray.length*1.25)}%`}}>
                                    <span className="tooltip-text">{val}</span>
                                </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className="bargraph-footer">
            {labelArray}
        </div> 
    </div>
    </>
    );
}


