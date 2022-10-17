import { useArrayForm } from "../hooks/useArrayForm"


const Form = () => {
    const {values:Notas, onInputChange:onNotaChange,addInput} = useArrayForm([''])

  return (
    <div className="row mt-4">
        <button onClick={()=>addInput()} className="text-center btn btn-primary mb-4 ">Agregar nota</button>
        <form>
            {
                Notas.map((nota,i)=>(
                    <span key={i} className="my-3">
                        <label className="form-label" htmlFor={`${i}`}>Nota: {i+1}</label>
                        <input onChange={(e)=>(onNotaChange(i,e.target.value))} value={nota} className="form-control" name={`${i}`} type="number" />
                    </span>
                ))
            }
        </form>
    </div>
  )
}

export default Form