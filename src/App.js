import Card from "./components/Card";
import myImage from "./images/icon-star.svg"
import Img from "./images/illustration-thank-you.svg"
import { useState } from "react";




function App() {


  const [isVisible,setIsVisible]=useState(true)
  const [activeValue,setActiveValue]=useState(null)

  const handleClick=(num)=>{
    setActiveValue(num)

  }

  const handleSubmit=()=>{
    setIsVisible((prevState) => !prevState)
  }


  const handleReturn=()=>{
    setIsVisible((prevState) => !prevState)
  }


  return (
<>
 {isVisible ? (   
 <div className="container1">
  <div className="card">
    <div className="star">
    <img src={myImage} alt="Beskrivning av bilden" />
    </div>
    <div className="head">
      How did we do?

    </div>
    <div className="text">
      Please let me know how we did with your support request.
      All feedback is appreciated to help us improve our offering!

    </div>
    <div className="btn-rank">
      <ul className="list">
        <li className={`b-r ${activeValue === 1 ? 'active' : ''}`}
          onClick={()=>handleClick(1)}><button>1</button></li>
       <li className={`b-r ${activeValue === 2 ? 'active' : ''}`}
          onClick={()=>handleClick(2)}><button>2</button></li>
          <li className={`b-r ${activeValue === 3 ? 'active' : ''}`}
          onClick={()=>handleClick(3)}><button>3</button></li>
       <li className={`b-r ${activeValue === 4 ? 'active' : ''}`}
          onClick={()=>handleClick(4)}><button>4</button></li>
         <li className={`b-r ${activeValue === 5 ? 'active' : ''}`}
          onClick={()=>handleClick(5)}><button>5</button></li>
      </ul>
    </div>

    <div className="btn-submit">
      <button className="btn-s"  onClick={handleSubmit}>SUMBIT</button>

    </div>


  </div>
 </div>)

 :


 (<div className='container2'>
      <div className="card">
          <div className='img-thnk'>
            <img src={Img} alt="Beskrivning av bilden" />
          </div>

          <div className="txtcont">

          <div className='txt-rate'>
            <p>You have rating {activeValue} of 5</p>
          </div>
          </div>

          <div className="head-thnk">
            Thank you!
          </div>

          <div className="text-thnk">
            We appreciate you taking the time 
            to give a rating. If you ever need
            more support don't hesitate to get in touch!
          </div>

          <div className="btn-return">
      <button className="btn-r"  onClick={handleReturn}>RETURN</button>

    </div>

          </div>



    </div>)}


  
  
   



</>
  );


}

export default App;
