// import { useState } from "react"

import { useState } from "react"

// const useInputState = (defaultValo = null) =>{
//    const [input, setinput] = useState(defaultValo);

//     // const handleChange = e =>{
//     //  setinput(e.target.value)
//     // }
//     // return[input, handleChange];

//     const onChange = e =>{
//         setinput(e.target.value)
//        }
//        return{
//         input,
//         onChange
//        }
// }

// export default useInputState;


const useInputState = (defaultValue = null)=>{
    const [input, setinput] = useState(defaultValue);

    const onChange= e=>{
           setinput(e.target.value)
    }
    return{
        input, onChange
    }
}

export default useInputState
