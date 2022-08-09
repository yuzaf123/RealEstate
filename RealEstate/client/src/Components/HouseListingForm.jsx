import React, {useState} from 'react'
import '../StyleSheet/HouseListingForm.css';
import axios from 'axios';


const HouseListingForm = () => {

  const [price, setPrice] = useState(0);
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [numOfBedRooms, setNumOfBedRooms] = useState(1);
  const [numOfBathRooms, setNumOfBathRooms] = useState(1);
  const [IsSaleOrRent, setIsSaleOrRent] = useState("");
  const [houseImage, setHouseImage] = useState("");

  const listProperty = () =>{
    const url = '/api/house-listing'

    const data = new FormData();

    data.append('price', price);
    data.append('province', province);
    data.append('city', city);
    data.append('numOfBedRooms', numOfBedRooms);
    data.append('numOfBathRooms', numOfBathRooms);
    data.append('IsSaleOrRent', IsSaleOrRent);
    data.append('houseImage', houseImage);


    axios.post(url, data).then(response=>{
      console.log(response.data);
    }).catch(error=>console.log(error))


  };
  

  return (
    <div className='HouseListing__container'>
        <div className="form">
            <h3>List Your Property</h3>
            <label>House Price</label>
            <input type="number" placeholder='House Price' onChange={(e)=>setPrice(e.target.value)} value={price} />
            <label>Province</label>
            <input type="text" placeholder='House Location (Province)' onChange={(e)=>setProvince(e.target.value)} value={province} />
            <label>City</label>
            <input type="text" placeholder='House Location (City)' onChange={(e)=>setCity(e.target.value)} value={city} />
            <label>Sale or Rent</label>
            <select onChange={(e)=>setIsSaleOrRent(e.target.value)} value={IsSaleOrRent}>
                <option>....</option>
                <option>SALE</option>
                <option>RENT</option>
            </select>
            <label>Number of bedrooms</label>
            <input type="number" placeholder='Number of bedrooms' onChange={(e)=>setNumOfBedRooms(e.target.value)} value={numOfBedRooms} />
            <label>Number of bathrooms</label>
            <input type="number" placeholder='Number of bathrooms' onChange={(e)=>setNumOfBathRooms(e.target.value)} value={numOfBathRooms} />
            <label>House Image</label>
            <input type="file" placeholder='House Image' onChange={(e)=>setHouseImage(e.target.files[0])} />
            <button type='submit' onClick={listProperty }>LIST YOUR PROPERTY</button>
        </div>
    </div>
  );
};

export default HouseListingForm















// console.log("price", price);
// console.log("province", province);
// console.log("city", city);
// console.log("numOfBedRooms", numOfBedRooms);
// console.log("numOfBathRooms", numOfBathRooms);
// console.log("IsSaleOrRent", IsSaleOrRent);
// console.log("houseImage", houseImage);