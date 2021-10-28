import { BrowserRouter as Router ,Route} from 'react-router-dom';
import todoList from './todoList'

const Basic = () => (
    <Router>
         {/* <Route path='/' component={Life} /> */}
       <Route path='/' component={todoList} />
     
   </Router>
)

export default Basic;