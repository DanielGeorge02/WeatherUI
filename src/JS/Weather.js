import React from "react";
import Sunny from "../Sunny.json";
import Lottie from "lottie-react";
import "../CSS/Weather.css";
import { MdArrowBackIosNew, MdArrowForwardIos, MdAddBox } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { IoToggleSharp } from "react-icons/io5";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Weather = () => {
  return (
    <div className="weather">
      <div className="head">
        <MdAddBox size={30} style={{ color: "white" }} />
        <h3>Today 28 Sept</h3>
        <div className="toggle">
          <IoToggleSharp size={30} style={{ color: "white" }} />
        </div>
      </div>

      <div className="location">
        <LocationOnIcon style={{ marginRight: "5px", color: "white" }} />
        <h4>New York, USA</h4>
      </div>
      <div className="image">
        <Lottie
          animationData={Sunny}
          alt="Sunny"
          width={"230px"}
          height={"230px"}
        />
      </div>
      <div className="degree">
        <div className="degree-cel">
          <MdArrowBackIosNew
            size={25}
            style={{ color: "rgb(206, 221, 240)" }}
          />
          <h1>27°</h1>
          <MdArrowForwardIos
            size={25}
            style={{ color: "rgb(206, 221, 240)" }}
          />
        </div>

        <div className="degree-des">Feels like: 25°</div>
        <div className="sunny">
          <FiSun />
          <p>Sunny</p>
        </div>
      </div>

      <div className="desc">
        <div className="date">
          <h5>13:58PM</h5>
          <h4>WED</h4>
        </div>
        <div className="desc-det">
          <div className="det-name">
            <p>NNW wind</p>
            <p>Precipitation</p>
            <p>Chance</p>
          </div>
          <div className="det-num">
            <p>8 km/hr</p>
            <p>1.4 cm</p>
            <p>42%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
