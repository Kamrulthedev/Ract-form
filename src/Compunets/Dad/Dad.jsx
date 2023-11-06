import Brother from "../Brother/Brother";
import MySlef from "../Mysaelf/MySlef";
import Sister from "../Sister/Sister";


const Dad = ({asst}) => {
    return (
        <div>
            <h2>Dad</h2>
           <section className="flex">
            <MySlef Jinuk={asst}></MySlef>
            <Brother></Brother>
            <Sister></Sister>
           </section>
        </div>
    );
};

export default Dad;