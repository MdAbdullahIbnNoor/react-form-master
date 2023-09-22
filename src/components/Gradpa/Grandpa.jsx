import { createContext, useState } from "react";
import Aunty from "../Anuty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

export const AssetContext = createContext('gold');
export const MoneyContext = createContext(2000);

const Grandpa = () => {
    const [money, setMoney] = useState(1000);
    const asset = 'diamond';
    return (
        <div className="border-8 border-orange-600 m-5 p-5 rounded-xl w-full mx-auto">
            <h2 className="text-3xl font-bold text-center ">Grandpa</h2>
            <p className="text-xl font-semibold text-center text-emerald-600">Net Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="gold">
                    <div className="flex justify-evenly">
                        <Dad asset={asset}></Dad>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </div>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    )
};

export default Grandpa

/**
 * 1. create a context and export
 * 2. Add provider for the context with a value
 * 3. useContext to access the value in the context
 * */
