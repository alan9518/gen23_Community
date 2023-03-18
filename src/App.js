import {Routes, Route} from 'react-router-dom';

import { TodosContainer } from './components/TodosContainer';
import './App.css';


function App() {
  return (
    <div className="App">


      <Routes>
        {/* 
          IMPORTANTE:
            Route necesita 2 props para funcionar
              path = "direccion de la ruta"
              element = "componente a renderizar"
         */}
          <Route path='/' element = {<TodosContainer/>} />
          <Route path='/todo/:id' element = {<h1> Todo Details Page  </h1>} />
      </Routes>
    
    </div>
  );
}

export default App;
