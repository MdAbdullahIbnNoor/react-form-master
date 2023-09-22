import { useContext } from "react"
import { MoneyContext } from "../Gradpa/Grandpa"


const Cousin = ({ name }) => {
    const [money, setMoney] = useContext(MoneyContext);
    console.log(money);
    return (
        <div>
            <div className="border-2 border-amber-600 m-5 p-5 rounded-xl mx-auto">
                <h2 className="text-3xl font-bold text-center">Cousin</h2>
                {/* <p className="text-xl font-semibold text-center">{money}</p> */}
            </div>
        </div>
    )
}

export default Cousin