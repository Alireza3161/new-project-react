import React from 'react';
import ReactDOM from 'react-dom';

var interval=null;

class Timer extends React.Component{
    constructor(){
        super();
        this.state={
            time:new Date().toLocaleTimeString()
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                time:new Date().toLocaleTimeString()
            })
        }, 1000);
        
    }

    render(){
        return(
            <h1 className='time'>
                {this.state.time}
            </h1>  
        )
    }
};

export default Timer;