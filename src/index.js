import React from 'react';
import ReactDOM from 'react-dom';

import {createRoot} from 'react-dom/client';

// const tick= ()=>{
//     const elem = (
//         <div>
//             <h1>
//                 alireza
//             </h1> 
//             <h1>
//                 time is {new Date().toLocaleTimeString()}
//             </h1>
//         </div>
//     )
//     ReactDOM.render(elem,document.getElementById('root'));
// };
// setInterval(()=>{
//     tick();
// },1000);


class App extends React.Component{
    render(){
        return (
                     <div>
           <h1>
                alireza
            </h1> 
             <h1>
                 time is {new Date().toLocaleTimeString()}
            </h1>
         </div>
        )
    }
};



const tick=()=>{
    // ReactDOM.render(<App/>,document.getElementById('root'))

    createRoot(document.getElementById('root')).render(<App/>)

};
setInterval(()=>{
    tick()
},1000);



