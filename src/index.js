import React from 'react';
// import ReactDOM from 'react-dom';

import {createRoot} from 'react-dom/client';

import './style.css'


// class Timer extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             time : new Date().toLocaleTimeString()
//         };
//     };
//     render(){
//         setInterval(()=>{
//             this.setState({
//                 time : new Date().toLocaleTimeString()
//             })
//         },1000)
//         return(
//             <div className='main'>
//             <h2 className='time'>
//             {this.state.time}
//             </h2>
//             </div>
//         )
        
//     }
// }
class Timer extends React.Component{
    constructor(){
        super();
        this.state={
            time:new Date().toLocaleTimeString()
        }
    }
    render(){
        setInterval(() => {
            this.setState({
                time:new Date().toLocaleTimeString()
            })
        }, 1000);
        return(
            <div className='main'>
                <h1 className='time'>
                    {this.state.time}
                </h1>
            </div>
        )
    }
}
    // ReactDOM.render(<App/>,document.getElementById('root'))
    createRoot(document.getElementById('root')).render(<Timer/>)


