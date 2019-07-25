import React from 'react';
import logo from './logo.svg';
import './App.css';
import Css from './react.css';
import Slider from './carousal.js';




class App extends React.Component{
  onSubmitClick(){
    console.log("submit clicked")
  }

  arr = ["http://www.allwhitebackground.com/images/1/1104.jpg","http://www.allwhitebackground.com/images/1/1104.jpg","http://www.allwhitebackground.com/images/1/1104.jpg","http://www.allwhitebackground.com/images/1/1104.jpg","http://www.allwhitebackground.com/images/1/1104.jpg"];

  radioClicked(a){
    console.log(a);
  }c
  render(){
  return (
     <div class="main-container">
      <div class="left-container">
        <div className="App"> 
        <a href="#" class="next">Next &raquo;</a>      
      <Slider imgArray={this.arr}/>
      
            
            
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            />
            
            
        </div>
      </div>
  
      <div class="right-container">
          <h2>Sleeves</h2> 
          <input type="radio" name ="Sleeve" onClick={()=>this.radioClicked("Full Sleeve")}/>Full Sleeve
          <input type="radio" name ="Sleeve" onClick={()=>this.radioClicked("Half Sleeve")}/>Half Sleeve
          <input type="radio" name ="Sleeve" onClick={()=>this.radioClicked("3/4")}/>3/4
          <input type="radio" name ="Sleeve" onClick={()=>this.radioClicked("Short")}/>Short

          <h2>Surface</h2> 
          <input type="radio" name ="Surface" onClick={()=>this.radioClicked("Solid")}/>Solid 
          <input type="radio" name ="Surface" onClick={()=>this.radioClicked("Printed")}/>Printed
          <input type="radio" name ="Surface" onClick={()=>this.radioClicked("Checks")}/>Checks
          <input type="radio" name ="Surface" onClick={()=>this.radioClicked("Textured")}/>Textured
          <input type="radio" name ="Surface" onClick={()=>this.radioClicked("Self-design")}/>Self-design

          <h2>Fit</h2> 
          <input type="radio" name ="Fit" onClick={()=>this.radioClicked("Regular")}/>Regular
          <input type="radio" name ="Fit" onClick={()=>this.radioClicked("Slim")}/>Slim
          <input type="radio" name ="Fit" onClick={()=>this.radioClicked("Classic")}/>Classic
          <input type="radio" name ="Fit" onClick={()=>this.radioClicked("Tailored")}/>Tailored
          <input type="radio" name ="Fit" onClick={()=>this.radioClicked("Snug")}/>Snug
          <input type="radio" name ="Fit" onClick={()=>this.radioClicked("Muscle fit")}/>Muscle fit
          <input type="radio" name ="Fit" onClick={()=>this.radioClicked("Smart")}/>Smart

          <h2>Print</h2> 
          <input type="radio" name ="Print" onClick={()=>this.radioClicked("Stripe")}/>Stripe
          <input type="radio" name ="Print" onClick={()=>this.radioClicked("Pin stripe")}/>Pin stripe
          <input type="radio" name ="Print" onClick={()=>this.radioClicked("Verticle stripe")}/>Verticle stripe
          <input type="radio" name ="Print" onClick={()=>this.radioClicked("Floral")}/>Floral
          <input type="radio" name ="Print" onClick={()=>this.radioClicked("Leaf")}/>Leaf
          <input type="radio" name ="Print" onClick={()=>this.radioClicked("Animal")}/>Animal
          <input type="radio" name ="Print" onClick={()=>this.radioClicked("Tropicle")}/>Tropicle

          <h2>Fabric</h2> 
          <input type="radio" name ="Fabric" onClick={()=>this.radioClicked("100% Cotton")}/>100% Cotton
          <input type="radio" name ="Fabric" onClick={()=>this.radioClicked("Cotton blend")}/>Cotton blend
          <input type="radio" name ="Fabric" onClick={()=>this.radioClicked("Nylon")}/>Nylon
          <input type="radio" name ="Fabric" onClick={()=>this.radioClicked("Lyocell")}/>Lyocell
          <input type="radio" name ="Fabric" onClick={()=>this.radioClicked("Polyster")}/>Polyster
          <input type="radio" name ="Fabric" onClick={()=>this.radioClicked("Polycotton")}/>Polycotton
          


          
          <a href="#" class="next">Next &raquo;</a>



          
      </div>
        
    </div>
  
  );
}
}
export default App;
