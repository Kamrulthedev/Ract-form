import { useContext } from "react";
import { AsstContect } from "../Gronpa/Grenpa";


const kajen = ({name}) => {
    const gift = useContext(AsstContect);
    return (
        <div>
            <h2>Cousin</h2>
               <p>{name}</p>
               <section className="flex">
                 <h4>WOW:{gift}</h4>
               </section>
        </div>
    );
};

export default kajen;