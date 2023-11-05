

const SimpleFrom = () => {

    const handlerSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
       console.log(e.target.phone.value);
       
    };


    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <input type="text" name="name" placeholder="Name"/>
                <br />
                <input type="text" name="email" placeholder="Email"/>
                <br />
                <input type="text" name="phone" id="" placeholder="contect" />
                <br/>
                 <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleFrom;