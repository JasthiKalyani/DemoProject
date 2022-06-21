// import logo from './logo.svg';
import './App.css';
import {Users} from './Users';
import {Login} from './Login';
import {Admin} from './Admin';
import {Books} from './Books';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
   return (
    <BrowserRouter>
    <div className="container">
      <Switch>
       <Route path='/' component={Login} exact/>
       <Route path='/Users' component={Users}/>
       <Route path='/Admin' component={Admin}/>
       <Route path='/Books' component={Books}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
