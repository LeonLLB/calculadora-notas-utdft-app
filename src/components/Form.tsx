import { useArrayForm } from "../hooks/useArrayForm"
import styles from './Form.module.css'

const Form = ({dispatchNotas}:{dispatchNotas:(notas:number[])=>void}) => {
    const {values:Notas, onInputChange:onNotaChange,addInput} = useArrayForm([''])

    const preDispatch = () => {
        const notasFiltradas = Notas.map(nota=>parseInt(nota)).filter(nota=>!isNaN(nota))

        dispatchNotas(notasFiltradas)
    }

  return (
    <div className="row container mt-4">
        <button onClick={()=>addInput()} className="text-center btn btn-primary mb-4 ">Agregar nota</button>
        <form className={`${styles.formContainer} overflow-auto py-2`} >
            {
                Notas.map((nota,i)=>(
                    <span key={i} className="my-3">
                        <label className="form-label" htmlFor={`${i}`}>Nota: {i+1}</label>
                        <input onBlur={preDispatch} max={25} min={0} onChange={(e)=>(onNotaChange(i,e.target.value))} value={nota} className="form-control" name={`${i}`} type="number" />
                    </span>
                ))
            }
        </form>
    </div>
  )
}

export default Form