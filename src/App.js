import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';


import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import ItemDetail from './views/ItemDetail/ItemDetail';



function App() {
  return (
    <Router>
      <div className="App">
          <NavBar />
          <body>
            <Switch>
            <Route path='/' exact component={Home} />
					  <Route path='/about' component={About} />
					  <Route path='/contact' component={Contact} />
            <Route path='/detail/:id' component={ItemDetail} />
            </Switch>
          </body>
      </div>
    </Router>
  );
}

export default App;
