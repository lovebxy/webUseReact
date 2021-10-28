require('file-loader?name=[name].[ext]!./index.html')
import React from 'react'
import ReactDom from 'react-dom'

import {HashRouter, Route, Switch} from 'react-router-dom';


import Life from './components/Life/life'
import todoList from './components/TodoList/todoList'
import Index from '../src/views/index'


ReactDom.render(
      <HashRouter>
        <Switch>
          <Route  path='/life' component={Life} />,    
          <Route  path='/' component={Index} />,               
        </Switch>
      </HashRouter>,
    document.getElementById('app')
)

