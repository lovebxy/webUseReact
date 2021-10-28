require('file-loader?name=[name].[ext]!./index.html')
import React from 'react'
import ReactDom from 'react-dom'

import { BrowserRouter as Router ,Route} from 'react-router-dom';

import App from './App'
import Life from './life'
import todoList from './todoList'


ReactDom.render(
   <Router>
         {/* <Route path='/' component={Life} /> */}
       <Route path='/' component={todoList} />
     
   </Router>,
    document.getElementById('app')
)

