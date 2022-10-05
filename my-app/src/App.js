import './App.css';
import ItemCount from './componentes/ItemCount/ItemCount';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import Navbar from './componentes/NavBar/Navbar';


function App() {
  return (
    <div className="App">
    <Navbar />  
    <ItemListContainer />
    <ItemCount />
    </div>
  ) 
    
   }

export default App;
