import { ChangeEvent, useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {
  const [NotaMinima, setNotaMinima] = useState(12)

  const onTipoChange = (e:ChangeEvent<HTMLSelectElement>) => {
    setNotaMinima( parseInt(e.target.value))
  }

  return (
    <div className="App">
      <h1>Calculadora de Notas - UTDFT</h1>
      <div className='container'>
        <div className="row align-items-start">
          <div className="col">
            <label className='fs-5 text-center' htmlFor="notaMinima">Tipo de asignatura:</label>
            <select onChange={onTipoChange} className='form-select p-1 my-2' value={NotaMinima} name="notaMinima" id="notaMinima">
              <option value="12">Regulares</option>
              <option value="16">Proyecto</option>
            </select>
          </div>
          <div className='col'>
            LOGO UTD
          </div>
        </div>
      </div>
      <Form/>
    </div>
  )
}

export default App
