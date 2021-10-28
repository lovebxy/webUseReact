import React,{useState} from 'react';



export default class Timer extends React.PureComponent {

    render(){
        const a = new Date().toLocaleDateString()
        console.log(a)
        return (
            <div>hello-{a}</div>
        )
    }
}