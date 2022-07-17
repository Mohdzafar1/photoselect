import React, { Component } from 'react';
import './App.css';

export class App extends Component{

   state={
    profileImg:"https://cdn.onlinewebfonts.com/svg/img_364496.png"
   } 
    imageHandler=(e)=>{
      const reader =new FileReader();
      reader.onload=()=>{
        if(reader.readyState === 2){
          this.setState({profileImg:reader.result})
        }
      }
      reader.readAsDataURL(e.target.files[0])
    }
    
  render(){
     const {profileImg}=this.state
    return(
      <>
   <div className="page">
    <div className="container">
      <h1 className="heading">Add your Image</h1>
      <div className="img-holder">
        <img src={profileImg} id="img" className='img'/>
      </div>
      <input type="file"name="image-upload"id="input" accept='image/*' onChange={this.imageHandler}/>
      <div className="label">
        <label htmlFor="input" className='image-upload-label'> 
        <i class="fas fa-image fa-1x"></i>
        Choose your photo
        </label>
      </div>
    </div>
   </div>
      </>
    )
  }
}

export default App;
