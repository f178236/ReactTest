import React from 'react';
import { useSelector } from 'react-redux';
const Inquiries = () => {
  const inquiries = useSelector(state=>{
    return state.inquiryReducer.inquiries;
  });

  return (
    <div>
      <h1>Inquiries</h1>
      <ul>
        {inquiries?
          inquiries.map(({id,title, description,type, price })=>{
            return(
              <li key={id} className='inquiry'>
                {id} {title}{description}{type} {price} 
              </li>
            );
          }):null}
      </ul>
      
    </div>
  );
};
export default Inquiries;
