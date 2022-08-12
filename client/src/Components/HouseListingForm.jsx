import React, { useState } from 'react'
import '../StyleSheet/HouseListingForm.css';
import axios from 'axios';


const HouseListingForm = () => {

  const [price, setPrice] = useState (0);
  const [province, setProvince] = useState ("");
  const [city, setCity] = useState ("");
  const [numOfBedRooms, setNumOfBedRooms] = useState (1);
  const [numOfBathRooms, setNumOfBathRooms] = useState (1);
  const [isSaleOrRent, setIsSaleOrRent] = useState ("");
  const [houseImage, setHouseImage] = useState ("");

  const listProperty = () => {
    // e.preventDefault();

      // const url ='http://127.0.0.1:5000/house-upload'

      // const data = new FormData();

      // data.append("price", price);
      // data.append("province", province);
      // data.append("city", city);
      // data.append("numOfBedRooms", numOfBedRooms);
      // data.append("numOfBathRooms", numOfBathRooms);
      // data.append("isSaleOrRent", isSaleOrRent);
      // data.append("houseImage", houseImage);

      axios.post("/house-upload", {
        price: '',
        province: '',
        city: '',
        numOfBedRooms: '',
        numOfBathRooms: '',
        isSaleOrRent: '',
        houseImage: ''
      }).then(response=>{
        console.log(response.data);
      }).catch(error=>{
        console.log(error);
      });

  };



  return (
    <div className='HouseListing__container'>
        <div className="form">
            <h3>List Your Property</h3>
            <label>House Price</label>
            <input type="number" placeholder='House Price' onChange={(e)=>setPrice(e.target.value)} />
            <label>Province</label>
            <input type="text" placeholder='House Location (Province)' onChange={(e)=>setProvince(e.target.value)}  />
            <label>City</label>
            <input type="text" placeholder='House Location (City)' onChange={(e)=>setCity(e.target.value)}  />
            <label>Sale or Rent</label>
            <select onChange={(e)=>setIsSaleOrRent(e.target.value)}>
                <option>....</option>
                <option>SALE</option>
                <option>RENT</option>
            </select>
            <label>Number of bedrooms</label>
            <input type="number" placeholder='Number of bedrooms' onChange={(e)=>setNumOfBedRooms(e.target.value)} />
            <label>Number of bathrooms</label>
            <input type="number" placeholder='Number of bathrooms' onChange={(e)=>setNumOfBathRooms(e.target.value)}  />
            <label>House Image</label>
            <input type="file" placeholder='House Image' onChange={(e)=>setHouseImage(e.target.files[0])} />
            <button type='submit' onClick={listProperty}>LIST YOUR PROPERTY</button>
        </div>
    </div>
  );
};

export default HouseListingForm































// // console.log("price", price);
// // console.log("province", province);
// // console.log("city", city);
// // console.log("numOfBedRooms", numOfBedRooms);
// // console.log("numOfBathRooms", numOfBathRooms);
// // console.log("IsSaleOrRent", IsSaleOrRent);
// // console.log("houseImage", houseImage);
















// import React, { Component } from 'react'
// import axios from 'axios'


// class HouseListingForm extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        price: '',
//        province: '',
//        city:'',
//        numOfBedRooms:'',
//        numOfBathRooms:'',
//        IsSaleOrRent:'',
//        houseImage:'',
//       }
//   }

//   changeHandler = e => {
//     this.setState({[e.target.name]: e.target.value})
//   }

//   submitHandler = e =>{
//     e.preventDefault()
//     console.log(this.state)

//     axios.post('/api/house-listing', this.state)
//     .then(response=>{
//       console.log(response);
//     })
//     .catch(error=>{
//       console.log(error);
//     })
//   }

//   render(){  
//     const { price, province, city, numOfBedRooms, numOfBathRooms, IsSaleOrRent, houseImage } = this.state 
//     return (
//       <div>
//         <form onSubmit={this.submitHandler}>
//           <div>
//             <input type="number" name='price' value={ price } onChange={this.changeHandler}/>
//           </div>
//           <div>
//             <input type="text" name='province' value={ province } onChange={this.changeHandler}/>
//           </div>
//           <div>
//             <input type="text" name='city' value={ city } onChange={this.changeHandler}/>
//           </div>
//           <div>
//           <input type="text" name='numOfBedRooms' value={ numOfBedRooms } onChange={this.changeHandler}/>
//           </div>
//           <div>
//           <input type="text" name='numOfBathRooms' value={ numOfBathRooms } onChange={this.changeHandler}/>
//           </div>
//           <div>
//           <input type="text" name='IsSaleORent' value={ IsSaleOrRent } onChange={this.changeHandler}/>
//           </div>
//           <div>
//           <input type="text" name='houseImage' value={ houseImage } onChange={this.changeHandler}/>
//           </div>
//           <button type='submit'>Submit</button>
//         </form>
//       </div>
//     )
//   }
// }

// export default HouseListingForm