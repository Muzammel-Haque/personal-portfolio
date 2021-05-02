import Home from './Components/Home/Home';
import DigitalResume from './Components/DigitalResume/DigitalResume';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Blog from './Components/Blog/Blog';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        
        <Switch>
          <Route path="/resume">
            <DigitalResume />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
