/**
 * 输出数字弹窗框
 * 最上面是Input输入框
 * 下面是数字键盘
 */

 import React,{useState,useEffect} from 'react'
import './index.less'

const keyboard = ['1','2','3','4','5','6','7','8','9','.','0','x']

const Index = function(props){
    const [value,setValue] = useState([])

    useEffect(() => {
        console.log(value,'value')
    },[value])

    const inputNumber = (e) => {
        const {innerText} = e.currentTarget;
        console.log(value)
       

        setValue([e.currentTarget.value])
    }

    const getNode = (e) => {
        const {innerText} = e.currentTarget;
        // console.log(value[0].length)
        // if(innerText === 'x' && value[0].length > 1){
        //     value.slice(0,value[0].length - 1)

        //     setValue([...value])
        //     return;
        // }

        if(innerText === 'x'){
            value.pop()
            setValue([...value])
            return;
        }
        setValue([...value,innerText])
        
    }

    const enSure = () => {
       
        props.addList(value)
    }

   
    return (
        <div className="keyPos">  
            <div className="inputPos">
                <input value={value.join('')} className="input"  onChange={inputNumber} />
                <div className="btn" onClick={enSure}>确认</div>
            </div>
            
            <div className='box'>
                {keyboard.map((item,index) => (
                    <div key={index}  onClick={e => getNode(e)} className="grid" >{item}</div>
                ))}
            </div>
        </div>
    )
}


export default Index;
