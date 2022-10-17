import { ChangeEvent, useState } from 'react'
import './App.css'

function App() {
  const [TipoMateria, setTipoMateria] = useState('G')

  const onTipoChange = (e:ChangeEvent<HTMLSelectElement>) => {
    setTipoMateria(e.target.value)
  }

  return (
    <div className="App">
      <div className='container'>
        <div className="row align-items-start">
          <div className="col">
            <label className='fs-5' htmlFor="tipoMateria">Tipo de asignatura:</label>
            <select onChange={onTipoChange} className='form-select p-1 my-2' value={TipoMateria} name="tipoMateria" id="tipoMateria">
              <option value="G">Regulares</option>
              <option value="P">Proyecto</option>
            </select>
          </div>
          <div className='col'>
            LOGO UTD
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
