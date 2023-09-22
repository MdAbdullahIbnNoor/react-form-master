import Special from "../Spaceial/Special"

const Myself = ({asset}) => {
  return (
    <div className="border-2 border-amber-600 m-5 p-5 rounded-xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Myself</h2>

        <section>
          <Special asset={asset}></Special>
        </section>
    </div>
  )
}

export default Myself
