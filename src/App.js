import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';


import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import ItemDetail from './views/ItemDetail/ItemDetail';
import Categories from './views/Categories/Categories';
import Acero from './views/Categories/Acero/Acero';
import Oro from './views/Categories/Oro/Oro';



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
            <Route path='/categories' component={Categories} />
            <Route path='/acero' component={Acero} />
            <Route path='/oro' component={Oro} />
            </Switch>
          </body>
      </div>
    </Router>
  );
}

export default App;
