
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { ADD_LISTING } from '../redux/actions/listingActions';
const ListingCreationForm = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  function handleSubmit() {
    axios.post('/api/createListing',
      {
        title:title,
        description:desc,
        type:type,
        price:price,
      }
    // eslint-disable-next-line no-unused-vars
    ).then(response => alert('Listing added.'))
      .catch(error => console.log(error));
    dispatch({type:ADD_LISTING,payload:desc});
    setTitle('');
    setDesc('');
    setType('');
    setPrice(0);
  }
  return (
    <div>
      <h3>Add Listing</h3>
      <label htmlFor='title'>Title</label><br/>
      <input value={title} id='title'  onChange={event=>setTitle(event.target.value)}/><br/>
      <label htmlFor='input-description'>Description</label><br/>
      <input value={desc} id='input-description' onChange={event=>setDesc(event.target.value)}/><br/>
      <label htmlFor='type'>Type</label><br/>
      <input value={type} id='type' onChange={event=>setType(event.target.value)}/><br/>
      <label htmlFor='price'>Price</label><br/>
      <input value={price} id='price' onChange={event=>setPrice(parseFloat(event.target.value|0))}/><br/>
      <button onClick={handleSubmit} >Submit</button>
    </div>
  );
};

export default ListingCreationForm;
