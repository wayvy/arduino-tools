import React from 'react';
// import './App.scss';

class SampleList extends React.Component{
    constructor(props){
        super(props);
        this.samples = props.samples;
        this.i = props.i;
    }
    render(){
        return(
            <div className="Sample-List">
                {this.samples.map((sample, j) => {
                    return (
                        <div className="Sample" key={`sample-${this.i}-${j}`}>
                            <div className="Sample-Value">{sample.value}</div>
                            <div className="Sample-Time">{sample.timeStamp}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

class PinList extends React.Component{
    constructor(props){
        super(props);
        this.list = props.list;
    }
    render(){
        return(
            <div className="Pin-List">
                {this.list.map((pin, i) => {
                    return (
                        <div className="Pin" key={`pin-${i}`}>
                            <div className="Pin-Name">{pin.pinN}</div>
                            <SampleList samples={pin.samples} i={i}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export class App extends React.Component{
    constructor (props) {
        super(props);
        this.port = props.port;
        this.list = props.list;
        this.createdAt = props.createdAt;
    }
    render(){
        return(
            <div className="App">
                <link rel="stylesheet" href="/public/css/style.css" />
                <h3>{this.port}</h3>
                <h4>{this.createdAt.toString()}</h4>
                <PinList list={this.list}/>
            </div>
        )
    }
}