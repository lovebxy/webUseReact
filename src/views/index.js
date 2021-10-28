import React from 'react'
import Header from '../components/Header'
import Timer from '../components/Timer'
import './index.less'

const Index = () => {
    return (
        <div >
            <Header />
            <div  className='bg'>
                <Timer />
            </div>
      
        </div>
    )
}

export default Index;