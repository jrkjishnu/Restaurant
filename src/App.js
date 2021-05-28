import './App.css';
import Home from './Home';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Restaurent from './Restaurent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/restaurant' component={Restaurent}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
