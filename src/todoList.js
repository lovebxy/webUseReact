import React,{useState} from 'react'
import './todo.less'

function todoList (){
    const [val,setVal] = useState('')
    const [list,setList] = useState([])
    const [isUpdate,setIsUpdate] = useState(false)
    const [index,setIndex] = useState()
    const [finish,setFinish] = useState([])


  
    
    const handleChange = (e) => {
        setVal(e.currentTarget.value)
    }

    // 进行添加操作
    const handleKeyDown = (e) => {
        if(e.keyCode == 13){
            if(!val){
                alert('不能输入空值')
                return;
            }
            if(isUpdate){
                list.splice(index,1,val)
                setList([...list])
                return;
            }
        
            setList([...list,val])
        }
    }

    // 进行删除操作
    const delele = (idx) => {
        console.log(finish,idx)
        let pos = finish.indexOf(idx)
        finish.splice(pos,1)
        console.log(finish,'fins')
        setFinish([...finish])
        
        list.splice(idx,1)
        setList([...list])
    }

    // 点击修改文字  1.显示到输入框 2.进行修改，然后
    const updateList = (item,idx) => {
        
        setVal(item)
        setIsUpdate(true)
        setIndex(idx)
    }

    // 进行选中完成事件
    const finishEvent = (idx) => {
        if(finish.includes(idx)){
            let pos = finish.indexOf(idx)
            finish.splice(pos,1)
            setFinish([...finish])
            return;
        }
        setFinish([...finish,idx])
    }


   
    return (
        <div className="content">
            <div className='title'>Todo List</div>
            <div><span>待做事件：{list.length - finish.length}</span><span>已完成事件：{finish.length}</span></div>
            <input className="input" value={val} onChange={handleChange} onKeyDown={handleKeyDown} placeholder="Add a task"/>
            
            
            {list.length !== 0 && (
                list.map((item,idx) => (
                    <div className='inner' key={idx}>
                        <div className='finish' onClick={() => finishEvent(idx)} >{finish.includes(idx) ? '👏' : null}</div>
                        <span className={finish.includes(idx) ? "delteItem":"item"} onClick={() => updateList(item,idx)}>{item}</span> 
                        <span className="delete" onClick={() => delele(idx)}>x</span>
                    </div>
                ))
               
            )}
        </div>
    )
}


export default todoList;