import './App.css';
import {useState} from 'react'

function App() {
  // const [numClicados, setNumClicados] = useState("")
  const [contador, setContador] = useState("")

  return (
    <div className="celular">
      <div className = "header-cell">
       <input className = "input-tela"/>
       <h2>NOKIA</h2>
      </div>
      <div className = "section-cell">
      <div className = "teclas-cell">
        <button className = "teclas">1 </button>
        <button className = "teclas">2<p>abc</p ></button>
        <button className = "teclas">3 <p> def</p> </button>
      </div>
      <div className = "teclas-cell">
        <button className = "teclas">4 <p>ghi </p> </button>
        <button className = "teclas">5 <p>jkl </p> </button>
        <button className = "teclas">6 <p> mno</p> </button>
      </div>
      <div className = "teclas-cell">
        <button className = "teclas">7 <p>pqrs </p> </button>
        <button className = "teclas">8 <p>tuv </p> </button>
        <button className = "teclas">9 <p> wxyz</p> </button>
      </div>
      <div className = "teclas-cell">
        <button className = "teclas">*</button>
        <button className = "teclas">0</button>
        <button className = "teclas">del</button>
      </div>
      </div>
    </div>
  );
}

export default App;
