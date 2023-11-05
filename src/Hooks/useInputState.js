import { useState } from "react"

const useInputState = (defaultValo = null) =>{
   const [input, setinput] = useState(defaultValo);

    const handleChange = val =>{
     setinput(val)
    }
    return[input, handleChange];
}

export default useInputState;