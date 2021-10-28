import React from "react";

class Children extends React.Component {
    constructor(props){
        super(props)
        this.state = {counter : 0}
    }

    static getDerivedStateFromProps(props,state){
        console.log(props,state)
        if(props.value !== state.counter){
            return {counter:props.value}
        }
        return null
    }

    render(){
        const {counter} = this.state;
        return <div>children{this.props.value}----{counter}</div>
    }
}

export default class Index extends React.Component {

    state = {
        value:''
    }

    componentDidMount(){
        console.log('componentDidMount')
        this.random()
    }

    random = () => {
        let t = setInterval(() => {
            let random = Math.random(100)
            this.setState({value:random})
        },2000)
    }

    render(){
        const {value} = this.state;
        console.log('render')
        return (
            <div>hello world
                <Children value={value}/>
            </div>
        )
    }
}