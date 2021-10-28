import React from 'react'
import {Link} from 'react-router-dom'
import './index.less'

const tab = [
    {
        title:'首页',
        href:'/life'
    },
    {
        title:'沸点',
 
    },
    {
        title:'客服',
       
    }
]

export default class Header extends React.PureComponent {
    render(){
        return <div className='header'>
            <img className='img' src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/7abc2b532f725d394feaf0141547ade7.svg" />
            <div>
                {tab.map((item,idx) => (
                    <span key={idx}><Link to={item.href}>{item.title}</Link></span>
                ))}
            </div>
        </div>
    }
}