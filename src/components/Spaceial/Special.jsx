import { useContext } from "react"
import { AssetContext } from "../Gradpa/Grandpa"

const Special = ({ asset }) => {
    const gift = useContext(AssetContext);
    return (
        <div className="border-2 border-amber-600 m-5 p-5 rounded-xl w-40 mx-auto">
            <h2 className=" text-3xl font-bold text-center">Special</h2>
            <p className="text-center text-lg text-red-600 font-medium">has: {gift}</p>
        </div>
    )
}

export default Special