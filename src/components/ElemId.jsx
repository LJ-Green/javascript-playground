import React from "react";
import BulbOff from "./../assets/light-bulb-off.png";
import BulbOn from "./../assets/light-bulb-on.png";
import Rat from "./../assets/rat.png";

const ElemId = () => {
  return (
    <div className="elemId">
      <h2>.getElementById()</h2>
      <button
        onClick={() =>
          (document.getElementById("click--me").innerHTML = "Thank you!")
        }
        id="click--me"
      >
        Go on give me a click!
      </button>
      <button
        onClick={() => (document.getElementById("bulb").style.width = "200px")}
      >
        use .style to make the bulb bigger!
      </button>
      <div className="bulbs-rats">
        <div>
          <button
            onClick={() => (document.getElementById("bulb").src = BulbOn)}
            className="bulb-button"
          >
            ON
          </button>
          <img className="bulbs" id="bulb" src={BulbOff} />
          <button
            onClick={() => (document.getElementById("bulb").src = BulbOff)}
            className="bulb-button"
          >
            OFF
          </button>
        </div>
        <div>
          <img className="rat" id="rat" src={Rat} alt="rat" />
          <button onClick={() => (document.getElementById("rat").style.display = "none")}>Hide Me</button>
        </div>
      </div>
    </div>
  );
};

export default ElemId;
