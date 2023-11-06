import Brother from "../Brother/Brother";
import MySlef from "../Mysaelf/MySlef";
import Sister from "../Sister/Sister";


const Dad = () => {
    return (
        <div>
            <h2>Dad</h2>
           <section className="flex">
            <MySlef></MySlef>
            <Brother></Brother>
            <Sister></Sister>
           </section>
        </div>
    );
};

export default Dad;