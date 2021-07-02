import React, { Component } from "react";
import { BootstrapIcon1, BootstrapIcon2 } from "../styles/Icons";
import BootstrapIllustration from "../illustrations/BootstrapIllustration";
export class BootstrapExpirience extends Component {
  render() {
    return (
      <div class="d-flex" style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "35%", marginLeft: "15%" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              lineHeight: "1.35",
              letterSpacing: "-.01em",
              fontWeight: "400",
            }}
          >
            {" "}
            We have lots of experience <br />
            <span style={{ color: "#335eea" }}>building Bootstrap themes</span>.
          </h2>
          <p
            style={{
              fontSize: "1.1875rem",
              margin: "0 0 2rem",
              color: "#869ab8",
            }}
          >
            We've built well over a dozen Bootstrap themes and sold tens of
            thousands of copies.
          </p>
          <div class="d-flex" style={{ display: "flex", width: "100%" }}>
            <div
              class="text-primary"
              style={{ color: "#335eea", width: "48px" }}
            >
              <BootstrapIcon1 />
            </div>

            <div style={{ marginLeft: "15px", width: "calc(100% - 63px)" }}>
              <h4
                style={{
                  margin: "0 0 0.25rem",
                  fontSize: "1.0625rem",
                  lineHeight: "1.45",
                  letterSpacing: "-.01em",
                  fontWeight: "400",
                }}
              >
                Bootstrap users since the beginning
              </h4>
              <p class="text-muted mb-6">
                We've been developing with Bootstrap since it was publicly
                released in 2011 .
              </p>
            </div>
          </div>
          <div class="d-flex">
            <div class="icon text-primary" style={{ width: "48px" }}>
              <BootstrapIcon2 />
            </div>

            <div style={{ marginLeft: "15px", width: "calc(100% - 63px)" }}>
              <h4 class="mb-1">Deep understanding of Bootstrap</h4>

              <p class="text-muted mb-6 mb-md-0">
                We've watched Bootstrap grow up over the years and understand it
                better than almost anyone.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            marginRight: "10%",
            width: "35%",
            height: "556.81pxpx",
            position: "relative",
          }}
        >
          {/* <div class="shape shape-fluid-y shape-blur-4 text-gray-200"> */}
          {/* <BootstrapIllustration /> */}
          <div className="img-skewed img-skewed-start">
            {" "}
            <img
              class="screenshot img-fluid img-skewed-item"
              src="dashkit.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default BootstrapExpirience;
