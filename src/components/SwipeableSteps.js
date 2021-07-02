import React, { Component } from "react";
import { Airbnb, LeftArrow, RightArrow } from "../styles/Icons";
export class SwipeableSteps extends Component {
  render() {
    return (
      <div
        style={{
          margin: "0 15%",
          width: "80%",
          backgroundColor: "white",
          border: "50px",
          display: "flex",
          height: "auto",
          position: "relative",
          boxShadow: "0 1.5rem 4rem rgba(22,28,45,.05)",
        }}
      >
        <button
          style={{
            border: "none",
            left: "-22px",
            position: "absolute",
            borderRadius: "50%",
            borderRadius: "50%",
            backgroundColor: "#335eea",
            color: "white",
          }}
          class="flickity-button flickity-prev-next-button previous"
          type="button"
          aria-label="Previous"
        >
          <LeftArrow />
        </button>{" "}
        <button
          style={{
            border: "none",
            right: "-22px",
            position: "absolute",
            borderRadius: "50%",
            backgroundColor: "#335eea",
            color: "white",
          }}
          class="flickity-button flickity-prev-next-button previous"
          type="button"
          aria-label="Previous"
        >
          <RightArrow />
        </button>
        <div style={{ width: "50%", height: "400px" }}>
          {" "}
          <img
            src="photo-1.jpg"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              //   borderTopRightRadius: "0%",
              //   borderBottomRightRadius: "30%",
              borderRadius: "10px",
              //   transform: "translateX(50%)",
              //   borderTopRightRadius:
            }}
          />
        </div>
        <div
          style={{
            width: "50%",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ width: "200px", marginBottom: "2.5rem" }}>
            <Airbnb color="#FF5A5F" />
          </div>
          <h2
            style={{
              lineHeight: "1.6",
              fontSize: "1rem",
              width: "80%",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            “Landkit is hands down the most useful front end Bootstrap theme
            I've ever used. I can't wait to use it again for my next project.”
          </h2>
          <p
            class="fs-lg text-muted mb-7 mb-md-9"
            style={{
              textAlign: "center",
            }}
          >
            Dave Gamache
          </p>
        </div>
      </div>
    );
  }
}

export default SwipeableSteps;
