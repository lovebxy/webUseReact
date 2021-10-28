import React from 'react'
import './App.less'
import {throttle} from './components/throttle'
import { debouce } from './components/debounce'
import KeyBoard from './components/KeyBoard'

export default class App extends React.Component {
    state = {
        list:[],
        isShowKeyBoard:false,
        
    }

    inputPrice = () => {
        this.setState({isShowKeyBoard:true})
    }

    addList = (data) => {
        // this.state.list.push(data)
        console.log(data)
        this.setState({isShowKeyBoard:false,list:[...this.state.list,data]})
    }
    

    render(){
        const {number,value,isShowKeyBoard,list } =this.state;
        
        return(
            <>  
                
                <div className="plus" onClick={this.inputPrice}>+</div>
                <div className="content">
                    {list.map(item => (
                        <div>{item}</div>
                    ))}
                </div>

            

                {isShowKeyBoard && <KeyBoard addList={this.addList} />}
            </>
        )
    }
}