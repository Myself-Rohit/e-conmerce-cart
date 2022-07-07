import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { removeFromCart, addToCart, decreaseItem } from '../actions/action.js';

function CardsDetails() {
   
    const [item, setItem] = useState([]);
    const id = useParams();
    const getData = useSelector((s) => s.reducer.carts);
   
    useEffect(() => {
        const compareItem = getData.filter((d) => {
            return id.id == d.id
        });
        setItem(compareItem[0]);
    }, [id]);

    const dispatch = useDispatch();

    const addItem = (e) => {
        dispatch(addToCart(e))
    }
    
    const history = useNavigate()
    const removeItem = (id) => {
        dispatch(removeFromCart(id));
        history("/")
    }

    const decreaseQnty = (item) => {
        dispatch(decreaseItem(item))
    }
   
  return (
      <div className="flex flex-col items-center h-screen pt-14 bg-gray-200">
          <h1 className='text-3xl font-bold pt-2 pb-7 text-gray-900'>Items Details Page</h1>
          {item && <>
              <div className='flex items-center px-2 py-4 rounded-md  bg-white shadow-xl'>
             <img className='h-60 w-80 rounded' src={item.imgdata} />
               <div className='flex'>
                   <div className='flex flex-col ml-5 w-48 space-y-10'>
                          
                     <p><strong className='font-bold'>Restaurant :</strong> {item.rname}</p>

                          <p><strong className='font-bold'>Price :</strong>  <span className='font-semibold'>₹</span> {item.price}</p>

                      <p><strong className='font-bold'>Dishes :</strong> {item.address}</p>
                      
                          <p><strong className='font-bold'>Total :</strong> <span className='font-semibold'>₹</span> {item.price*item.qnty}</p>
                  </div>

                  <div className='flex flex-col ml-5 w-48 space-y-10 pt-10'>
                      <p className='font-bold'>Rating :
                          <span className='font-normal px-1 ml-1 rounded text-white bg-green-600'> {item.rating} ★</span></p>
                      
                          <p className='font-bold'>Order Review :
                              <span className='font-normal'> <span className='font-semibold'>₹</span> {item.somedata}</span>
                          </p>
                      
                      <div className='font-bold flex'>Quantity :
                              <div className="flex ml-2 ">
                                  <button onClick={item.qnty < 1 ? removeItem(item.id):
                                      () => decreaseQnty(item)} className='bg-gray-400 font-bold text-lg px-2 active:scale-90'>-</button>
                                  <p className='bg-gray-400 font-bold border-x border-white px-2'>{item.qnty}</p>
                                  <button onClick={()=>addItem(item)} className='bg-gray-400 font-bold text-lg px-2 active:scale-90'>+</button>
                              </div>
                      </div>

                      <p className='font-bold'>Remove :<img onClick={()=>removeItem(item.id)} className='w-6 h-6 cursor-pointer inline-block' src='https://img.icons8.com/glyph-neue/2x/delete-forever.png' /></p>
                  </div>
              </div>
          </div>
              </>
          }
              
    </div>
  )
}

export default CardsDetails;
