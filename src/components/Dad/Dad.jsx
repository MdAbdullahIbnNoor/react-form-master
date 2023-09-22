import React from 'react'
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Dad = ({asset}) => {
  return (
    <div className='border-4 border-red-600 m-5 p-5 rounded-xl'>
        <h2 className="border-2 border-amber-600 m-5 p-5 rounded-xl w-40 mx-auto text-3xl font-bold text-center">Dad</h2>
        <section className='flex flex-col'>
            <Myself asset={asset}></Myself>
            <Brother></Brother>
            <Sister></Sister>
        </section>
    </div>
  )
};

export default Dad