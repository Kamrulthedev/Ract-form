import Ancle from "../Ancle/Ancle";
import Antuy from "../Antuy/Antuy";
import Dad from "../Dad/Dad";
import './Grenpa.css'


const Grenpa = () => {

    const asst = 'Diamond';

    return (
        <div className="grenpa ">
            <h2>Grenpa</h2>
            <section className="flex">
            <Dad asst={asst}></Dad>
            <Antuy></Antuy>
            <Ancle></Ancle>
            </section>
        </div>
    );
};

export default Grenpa;