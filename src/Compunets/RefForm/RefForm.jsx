import {useEffect, useRef } from "react";


const RefForm = () => {
          
    const nameRef = useRef(null)
   const emailRef = useRef (null);
   const PasswordRef = useRef (null);

    useEffect(()=>{
        nameRef.current.focus();
    }
    )

  

    const handlerSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value)
        console.log(PasswordRef.current.value)

    }

    return (
        <div>
               <form onSubmit={handlerSubmit}>
                <input  ref={nameRef} type="name" name="name" placeholder="Name"/>
                <br />
                <input ref={emailRef} type="email" name="email" placeholder="Email"/>
                <br />
                <input ref={PasswordRef} type="password" name="password" id="" placeholder="password" />
                <br/>
                 <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;