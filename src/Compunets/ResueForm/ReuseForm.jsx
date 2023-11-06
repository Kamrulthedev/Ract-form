

const ReuseForm = ({SubmitForm, handlerbutton}) => {


    const handlerSubmit = e =>{
      e.preventDefault();

    }



    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <h2>{SubmitForm}</h2>
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