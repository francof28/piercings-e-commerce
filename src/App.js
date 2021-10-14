import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar />
        <body>
          <h2>Pierciengs MF</h2>
          <ItemListContainer mensaje={`Mensaje enviado desde las props!`}/>
        </body>
    </div>
  );
}

export default App;
