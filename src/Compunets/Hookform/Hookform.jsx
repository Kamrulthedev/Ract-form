import useInputState from "../../Hooks/useInputState";


const Hookform = () => {

    // const [name, handleName] = useInputState('Kamrul')

    const emailstate = useInputState('kamrulthedev@gmail.com');

    const handlerSubmit = e =>{
        console.log('form data', emailstate.value)
     e.preventDefault();
    }

    return (
        <div>
             <form onSubmit={handlerSubmit}>
                {/* <input value={name} onChange={handleName} type="name" name="name" placeholder="Name"/> */}
                <br />
                <input {...emailstate} type="email" name="email" placeholder="Email"/>
                <br />
                <input type="password" name="password" id="" placeholder="password" />
                <br/>
                 <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Hookform;