import 'bootstrap/dist/css/bootstrap.min.css';

import Button from './components/Button';


function App() {
  return (
    <div className="App container">
      <h1>Desafío Estado de los Componentes y Eventos</h1>
      <form>
        <label>Nombre</label>
        <input className='form-control'></input>
        <label>Password</label>
        <input className='form-control' type='password'></input>
      </form>
      <div className='mt-3'>
        <Button text = "Iniciar sesión"></Button>
      </div>      
    </div>
  );
}

export default App;
