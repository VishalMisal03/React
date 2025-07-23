import React from 'react';
import Userprops from "./Userprops";
function Props(){
    let userName="Vishal Misal";
    let age=22;
    let email="Vishalmisal02@gmail.com"

    return (
        <div>
            <h1>Props In React Js</h1>
            <user name={userName} age={age} email={email}/>
        </div>
    )
}
export default Props;