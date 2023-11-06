

const ReuseForm = ({SubmitForm,handlerSubmit, handlerbutton, children}) => {

const handlerLocalsubmit = e =>{
    e.preventDefault();
    const date ={
        name: e.target.value,
        email: e.target.value,
        password: e.target.value
    }
    handlerSubmit(date);
}


    return (
        <div>
          
          {children}
            <form onSubmit={handlerLocalsubmit}>
              
                <input type="name" name="name" placeholder="Name"/>
                <br />
                <input type="email" name="email" placeholder="Email"/>
                <br />
                <input type="password" name="password" id="" placeholder="password" />
                <br/>
                 <input type="submit" value={handlerbutton} />
            </form>
        </div>
    );
};

export default ReuseForm;