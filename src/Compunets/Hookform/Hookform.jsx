

const Hookform = () => {

    const handlerSubmit = e =>{
     e.preventDefault();
    }

    return (
        <div>
             <form onSubmit={handlerSubmit}>
                <input type="name" name="name" placeholder="Name"/>
                <br />
                <input type="email" name="email" placeholder="Email"/>
                <br />
                <input type="password" name="password" id="" placeholder="password" />
                <br/>
                 <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Hookform;