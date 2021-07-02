import React, { Component } from "react";

export class StayFocusedUi extends Component {
  render() {
    return (
      <div
        style={{
          width: "70%",
          height: "100%",
          display: "flex",
          margin: "0 15%",
          paddingTop: "7rem",
        }}
      >
        {" "}
        <div
          style={{
            height: "499.2px",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              lineHeight: "1.35",
              fontSize: "1.9375rem",
              marginBottom: "1rem",
            }}
          >
            Stay focused on your business. <br />
            <span class="text-primary">Let us handle the design</span>.
          </h2>
          <p style={{ color: "#506690" }} class="fs-lg mb-6">
            You have a business to run. Stop worring about cross-browser bugs,
            designing new pages, keeping your components up to date. Let us do
            that for you.
          </p>
          <div class="d-flex">
            <div class="pe-5">
              <h3>
                <span>100</span>%
              </h3>
              <p style={{ color: "#506690" }}>Satisfaction</p>
            </div>
            <div class="border-start border-gray-300"></div>
            <div style={{ padding: "0 1.5rem" }}>
              <h3 class="mb-0">
                <span>24</span>/<span>7</span>
              </h3>
              <p style={{ color: "#506690" }}>Support</p>
            </div>
            <div class="border-start border-gray-300"></div>
            <div style={{ padding: "0 0 0 1.5rem" }}>
              <h3 class="mb-0">
                <span>100</span>k+
              </h3>
              <p style={{ color: "#506690" }}>Sales</p>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "499.2px",
            width: "50%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src="illustration-8.png"
            alt="..."
            class="img-fluid mb-6"
            style={{
              marginBottom: "0",
              height: "256.95px",
            }}
          />
        </div>
      </div>
    );
  }
}

export default StayFocusedUi;
