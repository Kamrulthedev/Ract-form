import { createContext } from "react";
import Ancle from "../Ancle/Ancle";
import Antuy from "../Antuy/Antuy";
import Dad from "../Dad/Dad";
import './Grenpa.css'
const AsstContect = createContext('gold')


const Grenpa = () => {

    const asst = 'Diamond';

    return (
        <div className="grenpa ">
            <h2>Grenpa</h2>
            <AsstContect.Provider value="gold">
                <section className="flex">
                    <Dad asst={asst}></Dad>
                    <Antuy></Antuy>
                    <Ancle></Ancle>
                </section>
            </AsstContect.Provider>
        </div>
    );
};

export default Grenpa;