import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

import Btn from './components/Button';


function App() {
  const [buttonActivated, setButtonActivated] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
    

  const evalContent = () => {
    if (name.length > 0 && password.length > 0) {
      setButtonActivated(true);
    } else {
      setButtonActivated(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("evaluar nombre y password");
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    if (name === 'ADL' && password === "252525") {
      alert('Bienvenido');
    } else {
      alert('datos incorrectos');
    }
  }

  return (
    <div className="App container w-50">
      <h1 className='text-center'>Desafío Estado de los Componentes y Eventos</h1>
      <div className='alert alert-danger'>Datos incorrectos</div>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input id='name' className='form-control' type='text' onChange={(e) => {setName(e.target.value)
        evalContent()}}></input>
        <label>Password</label>
        <input id='password' className='form-control' type='password' onChange={(e) => {setPassword(e.target.value)
        evalContent()}}></input>      
        <div className='mt-3'>
          {name.length > 0 && password.length >0 && <Btn text = "Iniciar sesión"></Btn>}        
        </div>  
      </form>    
    </div>
  );
}

export default App;
