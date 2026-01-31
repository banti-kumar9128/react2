import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {recItem} from "../redux/slice"

const Card = () => {
  const dispatch = useDispatch();
  const carditems = useSelector((state) => state.fat.items);

  if (carditems.length === 0) {
    return <h4 className="text-center mt-20 font-bold">cart is empty </h4>;
  }

const total = carditems.reduce((sum, item) => {
  return sum + Number(item.price) * (item.quantity || 1);
}, 0);


  return (

    <> <div className="bg-gray-800 ">
    <h1 className="text-4xl font-bold mb-4 text-center text-white pt-15">your Products </h1> 
    <div className=" flex flex-wrap gap-5 p-10 bg-gray-800">
      

      {carditems.map((item)=>(
                      <div className='border-amber-300 shadow-md rounded-3xl w-60 pb-5 p-2 mt-5 ' key={item.id}>
                      <img src={item.thumbnail} alt="" />
                      <div className="bg-gray-500 rounded-md p-2 mt-2 font-bold text-white">
                      <div className='title'>{item.title}</div>
                       <div className='brand'>Brand:{item.brand}</div>
                        <div className='price'>Price: ₹{item.price}</div>
                         <div className='rating'>Rating: {item.rating}</div>
                         <div className='justify-between'>
                    
      
                          <button className='bg-red-600 w-25 rounded-md font-bold text-xl cursor-pointer' onClick={()=>dispatch(recItem(item.id))}>remove</button>
      
           </div>
            </div>          
        </div>
      ))}

      
      

     
    </div>

     <h1 className="text-xl font-bold text-white mb-10 text-center ">
  Total Amount: ₹{total.toFixed(2)}
     </h1>
</div>
    </>
  );
};

export default Card;
