import { useState } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom/client';

function LoginForm() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <Form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          PlaceHolder="Numéro INE"
        />
      <input 
          type="password" 
          value={password}
          PlaceHolder="Mot de Passe Temporaire"
          onChange={(e) => setPassword(e.target.value)}
        />
      <input className='Button' type="submit" value='Inscription'/>
    </Form>
  )
}

export default LoginForm;
const Form=styled.form`
    display:flex;
    flex-direction:column;
    input{
        width: 500px;
        height: 40px;
        margin:20px;
        border-radius:7px;
        border: 1px solid #585858;
        padding-left:10px;
    }
    input::placeholder {
    font-weight: bold;
    opacity: 0.5;
    font-weight:500;
    color: rgba(52, 64, 85, 1);
    }
    .Button{
        border:none;
        background: #E54B4B;
        color: #FFFFFF;
        width:30%;
        left:0;
        margin-top:50px;
        cursor:pointer;
        transition: transform 0.3s;
        padding-left:0;
    }
    .Button:hover{
        transform: scale(1.1);
    }
`