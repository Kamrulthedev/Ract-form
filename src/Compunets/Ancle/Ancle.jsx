import Cousin from "../cousin/Cousin"

const Ancle = () => {
    return (
        <div>
            <h2>Ancle</h2>
            <section className="flex">
              <Cousin name={'kamrul'}></Cousin>             
              <Cousin name={'Risa'}></Cousin>             
            </section>
        </div>
    );
};

export default Ancle;