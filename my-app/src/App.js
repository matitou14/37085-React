import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={"Bienvenidos"} titulo="Bienvenidos a Pupinos Kids" />
    </div>
  ) 
    
   }

export default App;
