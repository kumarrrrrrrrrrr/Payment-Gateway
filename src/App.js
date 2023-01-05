import './App.css';
import React,{useState} from 'react';

function App() {
  const [amount, setamount] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_live_iRWtHPLrJ9UHHa", 
        key_secret:"3otLDKNVHdPD6zBuP81zvOFE",
        amount: amount *100,
        currency:"INR",
        name:"STARTUP_PROJECTS",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <div className="App">
     <h1 className='react'>Razorpay Payment Gateway - React App</h1>
     <br/>
     <input type="text"placeholder='Enter the Amount'value={amount}onChange={(e)=>setamount(e.target.value)} />
     <br/><br/>
     <button className='fire' onClick={handleSubmit}>submit</button>
    </div>
  );
}

export default App;
