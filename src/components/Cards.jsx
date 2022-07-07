import React from 'react'
import data from './CardsData.js';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/action.js';

  function Cards() {
    const dispatch = useDispatch(data);
  const send = (e) => {
    dispatch(addToCart(e))
    }

  return (
    <div className='flex flex-col items-center h-full bg-gray-200 pt-14 pb-20'>
      <p className='text-3xl font-bold pt-2 pb-7 text-gray-900'>Add to Cart</p>
      <div className='flex flex-wrap justify-center'>
        {data.map((item, id) => {
          return (
            <div className='mb-2 space-y-2 px-4 py-3 shadow-lg shadow-gray-400 rounded-lg mx-3'
              key={id}>
              <img className='h-60 w-80 rounded-md' src={item.imgdata} />
              <p className=' font-bold'>{item.rname}</p>
              <p className='text-sm'>Price : <span className='font-bold'>₹</span> {item.price}</p>
              <button onClick={()=>send(item)} className='bg-blue-700 py-1 w-full text-white font-semibold rounded-md'>Add to Cart</button>
        </div>)}
        )}
        <span className='w-96'></span>
      </div>
      
    </div>
  )
}

export default Cards
