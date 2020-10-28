/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_INQUIRY } from '../redux/actions/inquiryActions';
import { ADD_LISTING } from '../redux/actions/listingActions';

const Listing = ({userMode, listing}) => {
  const [inquiry, setInquiry] = useState('');
  const dispatch = useDispatch();
  dispatch({type:ADD_LISTING,payload:listing.description});
  function makeInquiry(id)
  {
    axios.post('/api/makeInquiry',
      {
        listingId:id,
      }
    ).then(response => alert('Inquiry added.'))
      .catch(error => console.log(error));
  }

  async function deleteListing(id)
  {
    const {data} =await axios.get(`/api/deleteListing?id=${id}`);
    alert('Listing deleted, Reload to see effect');
  }

  async function loadInquiries(id)
  {
    const {data} =await axios.get(`/api/getInquiries?listingId=${id}`);
    dispatch({type:ADD_INQUIRY,payload:data.inquiries});
  }
  return (
    <table className="listing">
      <tbody>
        <tr>
          <td>{listing.title}</td>
          <td>{listing.description}</td>
          <td>{listing.price}</td>
          <td>{listing.type}</td>
          {userMode?
            <td><textarea onChange={event=>setInquiry(event.target.value)}/><button className='submit' onClick={()=>makeInquiry(listing.id)}>Submit</button></td>:
            <td><button onClick={()=>deleteListing(listing.id)}>Delete</button>
              <button onClick={()=>loadInquiries(listing.id)}>View Inquiries</button></td>}
        </tr>
      </tbody>
    </table>
  );
};

export default Listing;