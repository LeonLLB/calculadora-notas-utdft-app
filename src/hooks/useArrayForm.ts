import { useState } from "react"

interface useArrayFormOptions {
    maxAmountOfValues: number,
    maxValue:number,
    minValue:number,
    minInputs: number
}

const defaultOptions : useArrayFormOptions = {
    maxAmountOfValues: 10,
    maxValue:25,
    minValue:0,
    minInputs: 1
}

export const useArrayForm = (defaultArrayValue:string[],options = defaultOptions) =>{
    const [values, setValues] = useState(defaultArrayValue)

    const onInputChange = (index: number,newValue:string) => {
        const copyOfValues = [...values]
        if(parseInt(newValue) > options.maxValue){
            copyOfValues[index] = options.maxValue.toString()
        } else if (parseInt(newValue) < options.minValue ) {
            copyOfValues[index] = options.maxValue.toString()
        } else {
            copyOfValues[index] = newValue
        }
        setValues([...copyOfValues])
    }

    const reset = () => setValues(defaultArrayValue)

    const addInput = (value = '') => {
        if(values.length >= options.maxAmountOfValues) return
        setValues([...values,value])
    } 

    const removeInput = (index: number) => {
        if(values.length > options.minInputs){
            const copyOfValues = [...values]
            const filterCopyOfValues = copyOfValues.filter((_,i)=>i!==index)
            setValues([...filterCopyOfValues])
        }
    }

    return {values, onInputChange, reset, addInput, removeInput}
} 