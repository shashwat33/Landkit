import React, { Component } from "react";
import { Questionmark } from "../styles/Icons";
export class BuyNow extends Component {
  render() {
    return (
      <div
        style={{
          width: "70%",
          height: "fit-content",
          margin: "0 15%",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "50%",
              color: "white",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignContent: "space-between",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                marginBottom: "2rem",
              }}
            >
              <div style={{ width: "100%", height: "100%", display: "flex" }}>
                <Questionmark />
                <h4 style={{ margin: " 0 0 0 1.5rem", fontSize: "1.1875rem" }}>
                  Can I use Landkit for my clients?
                </h4>
              </div>
              <div
                style={{ width: "60%", height: "100%", margin: "0 0 0 3rem" }}
              >
                <p
                  style={{
                    color: "#869ab8",
                    fontSize: "1.1875rem",
                    fontWeight: "350",
                  }}
                >
                  Absolutely. The Bootstrap Themes license allows you to build a
                  website for personal use or for a client.
                </p>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                marginBottom: "2rem",
              }}
            >
              <div style={{ width: "100%", height: "100%", display: "flex" }}>
                <Questionmark />
                <h4 style={{ margin: " 0 0 0 1.5rem", fontSize: "1.1875rem" }}>
                  Do I get free updates?
                </h4>
              </div>
              <div
                style={{ width: "60%", height: "100%", margin: "0 0 0 3rem" }}
              >
                <p
                  style={{
                    color: "#869ab8",
                    fontSize: "1.1875rem",
                    fontWeight: "350",
                  }}
                >
                  Yes. We update all of our themes with each Bootstrap update,
                  plus are constantly adding new components, pages, and features
                  to our themes.
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                marginBottom: "2rem",
              }}
            >
              <div style={{ width: "100%", height: "100%", display: "flex" }}>
                <Questionmark />
                <h4
                  style={{
                    margin: " 0 0 0 1.5rem",
                    color: "white",
                    fontSize: "1.1875rem",
                  }}
                >
                  Is there a money back guarantee?
                </h4>
              </div>
              <div
                style={{ width: "60%", height: "100%", margin: "0 0 0 3rem" }}
              >
                <p
                  style={{
                    color: "#869ab8",
                    fontSize: "1.1875rem",
                    fontWeight: "350",
                  }}
                >
                  Yup! Bootstrap Themes come with a satisfaction guarantee.
                  Submit a return and get your money back.
                </p>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                marginBottom: "2rem",
              }}
            >
              <div style={{ width: "100%", height: "100%", display: "flex" }}>
                <Questionmark />
                <h4
                  style={{
                    margin: " 0 0 0 1.5rem",
                    color: "white",
                    fontSize: "1.1875rem",
                  }}
                >
                  Does it work with Rails? React? Laravel?
                </h4>
              </div>
              <div
                style={{ width: "65%", height: "100%", margin: "0 0 0 3rem" }}
              >
                <p
                  style={{
                    color: "#869ab8",
                    fontSize: "1.1875rem",
                    fontWeight: "350",
                  }}
                >
                  Yes. Landkit has basic CSS/JS files you can include. If you
                  want to enable deeper customization, you can integrate it into
                  your assets pipeline or build processes.
                </p>
              </div>
            </div>
          </div>{" "}
        </div>
        <div
          style={{
            height: "auto",
            width: "100%",
            display: "flex",
            padding: "3rem 0",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {" "}
          <p style={{ margin: "0 0 1rem", textAlign: "center" }}>
            <span
              class="badge"
              style={{
                backgroundColor: "rgba(51,94,234,.1)",
                color: "#506690",
                borderRadius: "50rem",
              }}
            >
              <span
                style={{
                  fontSize: ".75rem",
                  fontWeight: "600",
                  letterSpacing: ".08em",
                  lineHeight: "1.55",
                  textTransform: "uppercase",
                }}
              >
                Get started
              </span>
            </span>
          </p>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              maxWidth: "600px",
            }}
          >
            <h2
              style={{
                lineHeight: "1.35",
                fontSize: "1.9375rem",
                marginBottom: "1rem",
                textAlign: "center",
                color: "white",
              }}
            >
              Get Landkit and save your time.
            </h2>
            <p
              class="fs-lg text-muted mb-7 mb-md-9"
              style={{
                textAlign: "center",
                lineHeight: "1.6",
                marginBottom: "3rem",
              }}
            >
              Stop wasting time trying to do it the "right way" and build a site
              from scratch. Landkit is faster, easier, and you still have
              complete control.
            </p>
          </div>{" "}
          <div
            style={{
              width: "141.25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a className="ButtonWithBackgroundBlue btn-success"> Buy it now</a>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default BuyNow;
