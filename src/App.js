import Card from "./components/Card";
import myImage from "./images/icon-star.svg"



function App() {
  return (
    <>
    
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
        <li className="b-r">1</li>
        <li className="b-r">2</li>
        <li className="b-r">3</li>
        <li className="b-r">4</li>
        <li className="b-r">5</li>
      </ul>
    </div>

    <div className="btn-submit">
      <button className="btn-s">SUMBIT</button>

    </div>


  </div>
 </div>
   



    </>
  );


}

export default App;
