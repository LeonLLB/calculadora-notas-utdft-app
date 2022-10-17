import { useArrayForm } from "../hooks/useArrayForm"
import styles from './Form.module.css'

const Form = ({dispatchNotas}:{dispatchNotas:(notas:number[])=>void}) => {
    const {values:Notas, onInputChange:onNotaChange,addInput, removeInput} = useArrayForm([''])

    const filterNotas = () => Notas.map(nota=>parseInt(nota)).filter(nota=>!isNaN(nota))
    
    const preDispatch = () => {
        const notasFiltradas = filterNotas()

        dispatchNotas(notasFiltradas)
    }

    const onRemoveInput = (index:number) => {
        const notasFiltradas = filterNotas().filter((_,i)=>i!==index)
        dispatchNotas(notasFiltradas)
        removeInput(index)
    }

  return (
    <div className="row container mt-4">
        <button onClick={()=>addInput()} className="text-center btn btn-primary mb-4 ">Agregar nota</button>
        <form className={`${styles.formContainer} overflow-auto py-2`} >
            {
                Notas.map((nota,i)=>(
                    <span key={i} className="my-3">
                        <label className="form-label" htmlFor={`${i}`}>Nota: {i+1}</label>
                        <span className="row">
                            <input
                                onBlur={preDispatch}
                                onChange={(e)=>(onNotaChange(i,e.target.value))}
                                value={nota}
                                max={25} min={0}
                                className="form-control col"
                                name={`${i}`} type="number"
                                />
                            <button
                                type="button"
                                disabled={Notas.length === 1}
                                onClick={()=>onRemoveInput(i)}
                                className="btn btn-danger col-2 mx-2"
                                >Del</button>
                        </span>
                    </span>
                ))
            }
        </form>
    </div>
  )
}

export default Form