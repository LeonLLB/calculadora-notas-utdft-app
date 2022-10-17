import { ChangeEvent, useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {
  const [NotaMinima, setNotaMinima] = useState(12)
  const [{ sumatoria, total }, setNotaDefinitiva] = useState({
    sumatoria: 0,
    total: 0
  })
  const [validNotas, setValidNotas] = useState(true)

  const onTipoChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setNotaMinima(parseInt(e.target.value))
  }

  const calcNotas = (notas: number[]) => {
    let sum = 0
    notas.forEach(nota => sum += nota)
    return sum
  }

  const onNotaChange = (notas: number[]) => {
    const sumatoriaNotas = calcNotas(notas)
    const notaDef = {
      sumatoria: sumatoriaNotas,
      total: 0
    }

    if(sumatoriaNotas % 5 > 0){
      notaDef.total = parseInt((sumatoriaNotas / 5).toString().split('.')[0]) + 1
    } else {
      notaDef.total = sumatoriaNotas / 5
    }

    if (notaDef.sumatoria > 100) {
      setValidNotas(false)
      return
    }
    setValidNotas(true)
    setNotaDefinitiva(notaDef)
  }

  return (
    <div className="App">
      <h1 className='text-center'>Calculadora de Notas - UTDFT</h1>
      <div className='container'>
        <div className="row align-items-start">
          <div className="col">
            <label className='fs-5 text-center' htmlFor="notaMinima">Tipo de asignatura:</label>
            <select onChange={onTipoChange} className='form-select p-1 my-2' value={NotaMinima} name="notaMinima" id="notaMinima">
              <option value="12">Regular</option>
              <option value="16">Proyecto</option>
            </select>
          </div>
          <div className='col d-flex d-flex-col align-self-center'>
            <img src="icon-152x152.png" alt="logoutd" className='rounded-circle w-25' />
          </div>
        </div>
      </div>
      <Form dispatchNotas={onNotaChange} />
      <div className="container mt-4 text-center row">
        {
          validNotas &&
          <>
            {
              sumatoria <= 100 &&
              <span className='fs-5'> Sumatoria : {sumatoria} - Total : {total} </span>
            }          
            {
              total < NotaMinima &&
              <span className='fs-5 text-danger'>Asignatura aplazada</span>
            }
            {
              total >= NotaMinima &&
              <span className='fs-5 text-success'>Asignatura aprobada</span>
            }
          </>
        }
        {
          !validNotas &&
          <span className='fs-5 text-danger'>Notas no validas</span>
        }
      </div>

    </div>
  )
}

export default App
