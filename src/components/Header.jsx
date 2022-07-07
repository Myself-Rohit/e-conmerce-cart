import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom"
import { removeFromCart } from '../actions/action.js';


function Header() {

    const [price, setPrice] = useState(0);

    const getData = useSelector((s) => s.reducer.carts);

    const [open, setOpen] = useState(false);

    const cartStatus = () => {
          setOpen(!open);
    }

    const dispatch = useDispatch();
    const removeItem = (id) => {
        dispatch(removeFromCart(id))
    }

    const total = () => {
        let price = 0;
        getData.map((item) => {
            price = item.price*item.qnty + price
        });
        setPrice(price)
    }

    useEffect(() => {
        total();
    },[total])
    
    return (
        <div className="bg-gray-900 fixed w-full flex items-center justify-between px-20 py-3">
            <div className='flex items-center space-x-7 text-white '>
                <NavLink to="/">Add to Cart</NavLink>
                <NavLink to="/" className='text-sm text-stone-500 font-semibold'>Home</NavLink>
            </div>
            <div onClick={cartStatus} className='relative cursor-pointer'>
             
                    <img  className='w-7 shrink-0 object-cover' src="https://img.icons8.com/external-sbts2018-flat-sbts2018/2x/external-cart-ecommerce-basic-1-sbts2018-flat-sbts2018.png" />
                
                {getData.length ? <div className='bg-blue-700 w-4 h-4 absolute top-0 -right-1 rounded-full text-center text-xs text-white shrink-0'>{getData.length}</div>:("")}
            </div>

            {open && <div className='p-4 max-h-96 bg-white  rounded-md shadow-xl shadow-slate-700 overflow-y-scroll fixed right-3 top-14'>
                 

                {getData.length ? (<div className='w-96'>
                    <div className='font-bold flex justify-between'>
                        <p>Photo</p>
                        <p>Restaurant</p>
                      <img  onClick={cartStatus} className='w-7 h-7 cursor-pointer relative -right-3 -top-3' src="https://img.icons8.com/glyph-neue/2x/multiply.png" />
                    </div>
                    <div className='border border-black'></div>

                    {getData.map((d) => {
                        
                        return <div key={d.id} className='shadow-md shadow-slate-200 mb-2'>
                                <div className='flex justify-between pt-2 pb-5'>
                                <NavLink key={d.id} to={`/cart/${d.id}`} onClick={cartStatus}>
                                        <img className='w-20 h-20 rounded pb-0 hover:opacity-60 active:scale-95' src={d.imgdata} />
                                        </NavLink>
                                   <div className='flex flex-col sm:flex-row justify-between w-3/5'>
                                   <div className='space-y-4'>
                                      <p className='font-semibold'>{d.rname}</p>
                                      <p>Price: <span className='font-semibold'>₹</span> {d.price}</p>
                                      <p>Quantity : {d.qnty}</p>
                                  </div>
                                  <img onClick={()=>removeItem(d.id)} className='w-6 h-6 cursor-pointer mt-3 sm:mt-0' src='https://img.icons8.com/glyph-neue/2x/delete-forever.png' />
                                    </div>
                                </div>
                        </div>
                    }
                    )}
                    <p className=' bg-white py-2'>Total : <span className='font-semibold'>₹</span> {price}</p>
                </div>) :
                    (<div className='flex flex-col items-center p-4 relative'>
                        <p className='font-semibold'>Your cart is empty</p>
                        <img className='w-20 h-20' src='https://img.icons8.com/color/2x/shopping-cart--v2.gif' />
                        <img onClick={cartStatus} className='w-7 h-7 absolute -top-3 -right-2 cursor-pointer' src="https://img.icons8.com/glyph-neue/2x/multiply.png" />
                    </div>)}

            </div>}
        </div>
    );
}

export default Header;
