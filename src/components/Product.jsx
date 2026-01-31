import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItem, recItem, alrecItem } from "../redux/slice";
import { fetchProducts } from "../redux/productslice";

const product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const selector = useSelector((state) => state.products.items);
  console.log(selector);

  return (
    <div className="p-20 bg-gray-800">
      
      <h1 className="text-2xl font-bold text-center">product card </h1>
      {/* <button
        onClick={() => dispatch(alrecItem())}
        className="bg-amber-300 w-20 cursor-pointer"
      >
        all crear{" "}
      </button> */}
      {/* <div className='border-amber-300 shadow-2xl w-60 pb-5 pl-5 '>
        <img src="https://images.unsplash.com/photo-1761839257946-4616bcfafec7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" alt="hello " className='h-30  object-cover ' />
        <h1>hello yer</h1>
        <h4>tum kya kar rhe ho </h4>
        <h6>tam sab kel rahe h </h6>
        <div className='flex gap-5'>
        <button className='bg-gray-500 w-20  cursor-pointer'  onClick={()=>
        dispatch(addItem(1))
        }>add</button>
        <button className='bg-amber-600 w-20 cursor-pointer' onClick={()=>
            dispatch(recItem(1))
        }>dec</button>
        </div> 
     </div> */}
      <div className="flex flex-wrap gap-5">
        {selector.map((item) => (
          <div
            className="border-amber-300 shadow-md rounded-3xl w-60 pb-5 p-2 mt-5"
            key={item.id}
          >
            <img src={item.thumbnail} alt="" />
            <div className="bg-gray-500 rounded-md p-2 mt-2 font-bold text-white">
              <div className="title">{item.title}</div>
              <div className="brand">Brand={item.brand}</div>
              <div className="price">price:$-{item.price}</div>
              <div className="rating">Rating:{item.rating}</div>
              <div className="justify-between">
                <button
                  className="bg-green-500 w-25  cursor-pointer m-2 p-2 rounded-md font-bold"
                  onClick={() => dispatch(addItem(item))}
                >
                  add card
                </button>

                {/* <button
                  className="bg-red-600 w-20  cursor-pointer"
                  onClick={() => dispatch(recItem(item.id))}
                >
                  remove
                </button> */}
              </div>
              
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default product;
