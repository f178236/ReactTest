import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Listing from './Listing';
const ViewListings = () => {
  const [listings,setListings]= useState();
  useEffect(()=>{
    (async ()=>{
      const {data} =await axios.get('/api/viewListings');
      setListings(data.items);
    })();
  },[]);
  return (
    <div>
      <h1>ViewListings</h1>
      <ul>
        {listings?
          listings.map((listing, id)=>{
            return(
              <Listing key={id} userMode={true} listing={listing}/>
            );
          }):null}
      </ul>
    </div>
  );
};

export default ViewListings;