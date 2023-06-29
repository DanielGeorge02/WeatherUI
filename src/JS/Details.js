/* eslint-disable no-template-curly-in-string */
import React from "react";
import { Line } from "react-chartjs-2";
import "../CSS/Details.css";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import ReactSpeedometer from "react-d3-speedometer";
import { Transition } from "react-d3-speedometer";
import { TfiMoreAlt } from "react-icons/tfi";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FcApproval, FcHighPriority } from "react-icons/fc";

import {
  Chart as chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

chartjs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Filler,
  Tooltip
);

const Details = () => {
  const color = [
    "rgba(173, 230, 240, 1)",
    "rgba(113, 184, 240, 1)",
    "rgba(19, 120, 241, 1)",
    "blue",
    "darkblue",
  ];
  const data = {
    labels: [
      "13:58",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
      "24:00",
    ],
    datasets: [
      {
        label: "Temperature",
        data: [27, 28, 29, 30, 27, 29, 31, 28, 27, 26, 28, 29],
        backgroundColor: ["rgba(137, 196, 244,0.5)"],
        borderColor: " rgba(113, 184, 240, 1) ",
        fill: true,
        tension: 0.4,
        borderWidth: 1,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: true,
    },
    enabled: true,
    scales: {
      y: {
        min: 20,
        max: 35,
        beginAtZero: true,
        title: {
          display: true,
          text: "Temperature",
          color: "black",
        },
      },
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
    },
  };

  return (
    <div className="Details">
      <div className="profile">
        <div className="welcome">
          <h4>Welcome back Daniel!</h4>
          <p style={{ fontSize: "13px" }}>
            Check out today's weather information
          </p>
        </div>
        <div className="photo">
          <TfiMoreAlt style={{ cursor: "pointer" }} />
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            sx={{ width: 56, height: 56 }}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <div className="graph-det">
        <div className="graph">
          <h5>Upcoming hours</h5>
          <Line data={data} options={options}></Line>
        </div>
      </div>
      <div className="highlight">
        <p>Today's highlight</p>
      </div>
      <div className="more-det">
        <div className="more">
          <div className="more1">
            <div className="sun">
              <div
                style={{
                  height: "20%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h5 style={{ color: " rgba(148, 147, 147, 0.5)" }}>
                  Sunrise & Sunset
                </h5>
              </div>
              <div className="sun1">
                <div
                  style={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "30px",
                    backgroundColor: "#FFBF00",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaArrowUp color="white" />
                </div>
                <div className="suntime">
                  <h5>6:35 AM</h5>
                  <h6>-1m 46 sec</h6>
                </div>
              </div>
              <div className="sun1">
                <div
                  style={{
                    height: "30px",
                    width: "30px",
                    borderRadius: "30px",
                    backgroundColor: "#FFBF00",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FaArrowDown color="white" />
                </div>
                <div className="suntime">
                  <h5>5:42 PM</h5>
                  <h6>+2m 25 sec</h6>
                </div>
              </div>
            </div>
            <div className="sun">
              <div
                style={{
                  height: "20%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h5 style={{ color: "rgba(148, 147, 147, 0.5)" }}>Humidity</h5>
              </div>
              <div>
                <div
                  className="con1"
                  style={{
                    fontSize: "60px",
                    height: "55%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  12%
                </div>

                <div
                  className="con2"
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <h5>Normal</h5>
                  <FcApproval />
                </div>
                <div></div>
              </div>
            </div>
            <div className="sun">
              <div
                style={{
                  height: "20%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h5 style={{ color: "rgba(148, 147, 147, 0.5)" }}>
                  Chance of Rain
                </h5>
              </div>
              <div
                className="con1"
                style={{
                  fontSize: "55px",
                  height: "55%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                42%
              </div>
              <div
                className="con2"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <h5>Normal</h5>
                <FcApproval />
              </div>
            </div>
          </div>
          <div className="more2">
            <div className="sun">
              <div
                style={{
                  height: "20%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h5 style={{ color: "rgba(148, 147, 147, 0.5)" }}>
                  Visibility
                </h5>
              </div>
              <div
                className="con1"
                style={{
                  height: "55%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p style={{ fontWeight: "600", fontSize: "50px" }}>
                  5.2 <span style={{ fontSize: "20px" }}>Km</span>
                </p>
              </div>
              <div
                className="con2"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <h5>Normal</h5>
                <FcApproval />
              </div>
            </div>
            <div className="sun">
              <div
                style={{
                  height: "20%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h5 style={{ color: "rgba(148, 147, 147, 0.5)" }}>
                  Air Quality
                </h5>
              </div>
              <div
                className="con1"
                style={{
                  height: "55%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p style={{ fontSize: "40px", fontWeight: "600" }}>105</p>
              </div>
              <div
                className="con2"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <h5>Unhealthy</h5>
                <FcHighPriority />
              </div>
            </div>
            <div className="sun">
              <div
                style={{
                  height: "20%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h5 style={{ color: "rgba(148, 147, 147, 0.5)" }}>
                  Precipitation
                </h5>
              </div>
              <div
                className="con1"
                style={{
                  height: "55%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p style={{ fontWeight: "700", fontSize: "50px" }}>
                  1.4<span style={{ fontSize: "20px" }}> cm</span>
                </p>
              </div>
              <div
                className="con2"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <h5>Normal</h5>
                <FcApproval />
              </div>
            </div>
          </div>
        </div>
        <div className="speedometer">
          <h3 style={{ color: "rgba(148, 147, 147, 0.5)" }}>Wind Status</h3>
          <ReactSpeedometer
            height={180}
            value={8}
            minValue={0}
            maxValue={100}
            segmentColors={color}
            needleTransitionDuration={2000}
            needleTransition={Transition.easeBounceInOut}
            currentValueText="${value} km/hr"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
