// import logo from './logo.svg';
import './App.css';
import {Bookss} from './Bookss';
import {Login} from './Login';
import {Admin} from './Admin';
import {Books} from './Books';
import  SignUp from './SignUp';
import EditBook from './EditBooks';
import AddBooks from './AddBooks';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { UserBooks } from './UserBooks';

function App() {
   return (
    <BrowserRouter>
    <div className="container">
      <Switch>
       <Route path='/' component={Login} exact/>
       <Route path='/Bookss' component={Bookss}/>
       <Route path='/Admin' component={Admin}/>
       <Route path='/Books' component={Books}/>
       <Route path='/SignUp' component={SignUp}/>
       <Route exact path="/EditBooks/:id" component={EditBook} />
       <Route exact path="/AddBooks" component={AddBooks} />
       <Route exact path="/UserBooks" component={UserBooks} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
