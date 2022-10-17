import { ChangeEvent, useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {
  const [NotaMinima, setNotaMinima] = useState(12)
  const [{sumatoria,total}, setNotaDefinitiva] = useState({
    sumatoria:0,
    total:0
  })

  const onTipoChange = (e:ChangeEvent<HTMLSelectElement>) => {
    setNotaMinima( parseInt(e.target.value))
  }

  const onNotaChange = (notas: number[]) =>{
    console.log(notas)
  }

  return (
    <div className="App">
      <h1 className='text-center'>Calculadora de Notas - UTDFT</h1>
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
      <Form dispatchNotas={onNotaChange}/>
      <div className="container mt-4 text-center row">
        {
          sumatoria <= 100 && 
          <span className='fs-5'> Sumatoria : {sumatoria} - Total : {total} </span>
        }
        {
          <span className='fs-5'>Asignatura aplazada</span>
        }
      </div>
    </div>
  )
}

export default App
