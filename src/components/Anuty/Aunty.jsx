import { useContext } from "react"
import Cousin from "../Cousin/Cousin"
import { MoneyContext } from "../Gradpa/Grandpa"

const Aunty = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div className="border-4 border-cyan-600 m-5 p-5 rounded-xl">
      <h2 className="border-2 border-amber-600 m-5 p-5 rounded-xl w-40 mx-auto text-3xl font-bold text-center">Aunty</h2>

      <section>
        <Cousin name={'Hiya'}></Cousin>
        <Cousin name={'Hiba'}></Cousin>
      </section>
      <p className="text-xl font-semibold text-center text-red-600">Money: {money}</p>
      <button onClick={() => setMoney(money + 1000)} className="btn btn-error flex justify-center w-3/5 mx-auto text-semibold text-white">Add 1K</button>
    </div>
  )
}

export default Aunty