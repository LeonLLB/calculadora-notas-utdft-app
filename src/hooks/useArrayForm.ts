import { useState } from "react"

interface useArrayFormOptions {
    maxAmountOfValues: number
}

const defaultOptions = {
    mamaxAmountOfValues: 10
}

export const useArrayForm = (defaultArrayValue:string[],options = defaultOptions) =>{
    const [values, setValues] = useState(defaultArrayValue)

    const onInputChange = (index: number,newValue:string) => {
        const copyOfValues = [...values]
        copyOfValues[index] = newValue
        setValues([...copyOfValues])
    }

    const reset = () => setValues(defaultArrayValue)

    const addInput = (value = '') => {
        if(values.length >= options.mamaxAmountOfValues) return
        setValues([...values,value])
    } 

    return {values, onInputChange, reset, addInput}
} 