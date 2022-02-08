import { useState } from 'react'
import './app.css';

export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [mensagem, setMensagem] = useState('');

  function calcularImc() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if(imc < 18.6) {
      setMensagem("Você está abaixo do peso ! Seu IMC é: " + imc.toFixed(2))
    }else if(imc >= 18.6 && imc < 24.9) {
      setMensagem("Peso ideal ! Seu IMC é: " + imc.toFixed(2))
    }else if(imc >= 24.9 && imc < 34.9) {
      setMensagem("Você está levemente acima do peso ! Seu IMC é: " + imc.toFixed(2))
    }else if(imc >= 34.9) {
      setMensagem("Cuidado Obesidade ! Seu IMC é: " + imc.toFixed(2))
    }
    document.getElementById(altura).reset();
  }

  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      

      <div className='area-input'>
      <h2>Calcule seu Imc !</h2>
        <div className='area-caixa'>
          <lavel>Peso - Kg</lavel>
          <input id='form1' type="text" placeholder="Kg" value={peso} 
            onChange={(e) => setPeso(e.target.value)}
          />
          <lavel>Altura - Cm</lavel>
          <input type="text" placeholder="Cm" value={altura} 
            onChange={(e) => setAltura(e.target.value)}/>
        </div>

        <button onClick={calcularImc}>
          Calcular
        </button>
        <h2>{mensagem}</h2>
      </div>
    </div>
  )
}