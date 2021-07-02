import React from "react";
import { LandkitName, Menu } from "../styles/Icons";
import { withRouter } from "react-router-dom";
function Layout(props) {
  const [width, setWidth] = React.useState(window.innerWidth);

  const [isMobile, setMobile] = React.useState(width <= 768);

  window.addEventListener("resize", function (event) {
    setWidth(window.innerWidth);

    setMobile(window.innerWidth <= 768);
  });
  return (
    <>
      <div
        style={{
          padding: "20px 0",
          width: "70%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          margin: "0 15%",
        }}
      >
        <div
          onClick={() => {
            props.history.push("/");
          }}
          style={{ height: "43.2px", display: "flex", alignItems: "center" }}
        >
          {" "}
          <LandkitName />
        </div>
        {isMobile ? (
          ""
        ) : (
          <div
            style={{
              height: "43.2px",
              display: "flex",
              alignItems: "center",
              width: "calc(100% - 192.93px)",
              justifyContent: "center",
            }}
          >
            <span
              className="AppBarTitles"
              onClick={() => {
                props.history.push("/landings");
              }}
            >
              Landings
            </span>
            <span
              className="AppBarTitles"
              onClick={() => {
                props.history.push("/pages");
              }}
            >
              Page
            </span>
            <span
              className="AppBarTitles"
              onClick={() => {
                props.history.push("/account");
              }}
            >
              Account
            </span>
            <span
              className="AppBarTitles"
              onClick={() => {
                props.history.push("/documentation");
              }}
            >
              Documentation
            </span>
          </div>
        )}{" "}
        <div
          style={{ width: "106.25px", display: "flex", alignItems: "center" }}
        >
          <a className="ButtonWithBackgroundBlue"> Buy now</a>
        </div>
        {/* <Menu /> */}
      </div>
      <div
        className="thinList"
        style={{
          height: "calc(100% - 85.6px)",
          overflowY: "auto",
          width: "100%",
        }}
      >
        {props.children}
      </div>
    </>
  );
}

export default withRouter(Layout);
