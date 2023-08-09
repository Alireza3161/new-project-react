import React from 'react';
import ReactDOM from 'react-dom';

const tick= ()=>{
    const elem = (
        <div>
            <h1>
                alireza
            </h1> 
            <h1>
                time is {new Date().toLocaleTimeString()}
            </h1>
        </div>
    )
    ReactDOM.render(elem,document.getElementById('root'));
};
setInterval(()=>{
    tick();
},1000);

