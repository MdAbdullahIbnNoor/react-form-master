import Cousin from "../Cousin/Cousin";

const Uncle = () => {
  return (
    <div className="border-4 border-cyan-600 m-5 p-5 rounded-xl">
      <h2 className="border-2 border-amber-600 m-5 p-5 rounded-xl w-40 mx-auto text-3xl font-bold text-center">Uncle</h2>

      <section>
        <Cousin name={'Shafi'}></Cousin>
        <Cousin name={'Sadik'}></Cousin>
      </section>
    </div>
  )
};

export default Uncle