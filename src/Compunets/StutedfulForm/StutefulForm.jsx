import { useState } from "react";


const StutefulForm = () => {
    const [name, setName] = useState('KAMRUL HASSAN');
    const [email ,setemail] = useState (null);
    const [Password, setPassword] = useState(null);
    const [error, setError] = useState('');
  
  const hendlerClikSubmilt = e =>{
    e.preventDefault();
    if(Password.length < 6){
        setError('Password must be 6 charaters type')

    }
    else{
        setError('');
        console.log(name, email, Password);
    }
    
  }

const handelEmailChange = e => {
    setName(e.target.value);
}
const handlerEmail = e =>{
    setemail(e.target.value);
}

const handlerpassword = e =>{
    setPassword(e.target.value)
}
    
    return (
        <div>
              <form onSubmit={hendlerClikSubmilt}>
                <input value={name} 
                onChange={handelEmailChange}
                type="name" name="name" placeholder="Name"/>
                <br />
                <input onChange={handlerEmail}
                 type="email" name="email" placeholder="Email"/>
                <br />
                <input  onChange={handlerpassword}
                type="Password" name="Password" id="" placeholder="Pesswrad" required/>
                <br/>
                 <input type="submit" value="Submit" />
                 {
                    error && <p>{error}</p>
                 }
            </form>
        </div>
    );
};

export default StutefulForm;