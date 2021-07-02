import React, { Component } from "react";
import Layout from "../layouts/Layout";
import {
  RightArrow,
  ToggleIcon,
  TrendIcon,
  BracketIcon,
  Airbnb,
  Coinbase,
  Dribble,
  Instagram,
  Netflix,
  Pintrest,
  CheckCircle,
  SingleToggleIcon,
} from "../styles/Icons";
import BootstrapExpirience from "./BootstrapExpirience";
import SwipeableSteps from "./SwipeableSteps";
import StayFocusedUi from "./StayFocusedUi";
import BuyNow from "./BuyNow";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

function Home() {
  const [width, setWidth] = React.useState(window.innerWidth);

  const [isMobile, setMobile] = React.useState(width <= 768);

  window.addEventListener("resize", function (event) {
    setWidth(window.innerWidth);

    setMobile(window.innerWidth <= 768);
  });
  return (
    <Layout>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: "6rem 0 0 0",
          flexDirection: "column",
        }}
      >
        <div style={{ height: "400.8px", width: "100%", display: "flex" }}>
          <div
            style={{
              width: isMobile ? "86%" : "35%",
              marginLeft: isMobile ? "7%" : "15%",
              marginRight: isMobile ? "7%" : "0%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                lineHeight: "1.2",
                letterSpacing: "-.02em",
                fontSize: "3rem",
                fontWeight: "400",
                marginTop: "0",
              }}
            >
              Welcome to <span style={{ color: "#335eea" }}>ladndkit</span> .{" "}
              <br />
              Develope anything .
            </h1>
            <p
              style={{
                color: "#869ab8",
                fontSize: "1.3125rem",
                fontWeight: "400",
                lineHeight: "1.6",
              }}
            >
              Build a beautiful, modern website with flexible Bootstrap
              components built from scratch.
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
              }}
            >
              <a
                style={{
                  marginRight: "15px",
                  display: "flex",
                  alignItems: "center",
                }}
                className="ButtonWithBackgroundBlue"
              >
                <span style={{ marginRight: "5px" }}> View all pages</span>{" "}
                <RightArrow color={"white"} />
              </a>{" "}
              <a className="ButtonWithoutBackground lift"> Documentation</a>
            </div>
          </div>
          {isMobile ? (
            ""
          ) : (
            <div style={{ width: "42%" }}>
              <img
                src="illustration-2 (1).png"
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          )}
        </div>{" "}
        <div
          style={{
            height: "400.8px",
            width: "100%",
            display: "flex",
            borderBottom: "1px solid #f1f4f8",
            padding: "6rem 0",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "70%",
              display: "flex",
              margin: "0 15%",
            }}
          >
            <div
              style={{
                width: "33.34%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {" "}
              <ToggleIcon />
              <h3 style={{ fontWeight: "400", lineHeight: "1.3125rem" }}>
                Built for developers
              </h3>
              <p
                style={{
                  color: "#869ab8",
                  width: "67%",
                  lineHeight: "1.6",
                  margin: "0",
                }}
              >
                Landkit is built to make your life easier. Variables, build
                tooling, documentation, and reusable components.
              </p>
            </div>
            <div
              style={{
                width: "33.34%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <TrendIcon />
              <h3 style={{ fontWeight: "400", lineHeight: "1.3125rem" }}>
                Designed to be modern
              </h3>
              <p
                style={{
                  color: "#869ab8",
                  width: "67%",
                  lineHeight: "1.6",
                  margin: "0",
                }}
              >
                Designed with the latest design trends in mind. Landkit feels
                modern, minimal, and beautiful.
              </p>
            </div>
            <div
              style={{
                width: "33.34%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <BracketIcon />
              <h3 style={{ fontWeight: "400", lineHeight: "1.3125rem" }}>
                Documentation for everything
              </h3>
              <p
                style={{
                  color: "#869ab8",
                  width: "67%",
                  lineHeight: "1.6",
                  margin: "0",
                }}
              >
                We've written extensive documentation for components and tools,
                so you never have to reverse engineer anything.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "140.07px",
            width: "100%",
            display: "flex",
            padding: "3rem 0",
            borderBottom: "1px solid #f1f4f8",
          }}
        >
          <div
            style={{
              width: "70%",
              display: "flex",
              margin: "0 15%",
              height: "43.08px",
              justifyContent: "space-between",
            }}
          >
            <Airbnb />
            <Coinbase />
            <Dribble />
            <Instagram />
            <Netflix />
            <Pintrest />
          </div>
        </div>
        <div
          style={{
            height: "auto",
            width: "100%",
            display: "flex",
            padding: "6rem 0",
            display: "flex",

            backgroundImage: "linear-gradient(180deg,#f9fbfd 0,#fff)",
          }}
        >
          <div
            style={{
              height: "529.95px",
              width: "70%",
              display: "flex",
              margin: "0 15%",
            }}
          >
            <div style={{ width: "50%", height: "100%" }}>
              <div
                style={{
                  width: "360px",
                  height: "100%",
                  borderRadius: "8px",
                  boxShadow: "0 1.5rem 4rem rgba(22,28,45,.05)",
                }}
              >
                <div
                  style={{
                    height: "240.15px",
                    width: "100%",
                  }}
                >
                  <img
                    src="photo-2.jpg"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "8px 8px 0 0",
                    }}
                  />
                </div>
                <div
                  style={{
                    height: "249.8px",
                    backgroundColor: "white",
                    width: "100%",
                    padding: "20px 0",
                  }}
                >
                  {" "}
                  <div className="card-body">
                    <form>
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control form-control-flush"
                          id="cardName"
                        />
                        <label for="cardName">Name</label>
                      </div>
                      <div class="form-floating">
                        <input
                          type="email"
                          class="form-control form-control-flush"
                          id="cardEmail"
                        />
                        <label for="cardEmail">Email</label>
                      </div>
                      <div class="form-floating">
                        <input
                          type="password"
                          class="form-control form-control-flush"
                          id="cardPassword"
                          // placeholder="Password"
                        />
                        <label for="cardPassword">Password</label>
                      </div>
                      <div class="mt-6">
                        <button
                          class="btn w-100 btn-success lift"
                          type="submit"
                        >
                          Download a sample
                        </button>
                      </div>
                    </form>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div
              style={{
                width: "50%",
                height: "100%",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div
                class="col-12 col-md-6 order-md-2 aos-init aos-animate"
                data-aos="fade-left"
              >
                <h2
                  style={{
                    lineHeight: "1.35",
                    fontSize: "1.9375rem",
                    marginBottom: "1rem",
                    //   letterSpacing: "",
                  }}
                >
                  The most useful resource <br />
                  <span class="text-success">
                    ever created for <span>Dev</span>
                    <span
                      class="typed-cursor typed-cursor--blink"
                      aria-hidden="true"
                    >
                      |
                    </span>
                  </span>
                </h2>

                <p class="fs-lg text-muted mb-6">
                  Using Landkit to build your site means never worrying about
                  designing another page or cross browser compatibility. Our
                  ever-growing library of components and pre-designed layouts
                  will make your life easier.
                </p>

                <div class="d-flex" style={{ width: "100%" }}>
                  <div style={{ width: "50%" }}>
                    <div class="d-flex">
                      <CheckCircle />

                      <p class="text-success">Lifetime updates</p>
                    </div>

                    <div class="d-flex">
                      <CheckCircle />

                      <p class="text-success mb-lg-0">Tons of assets</p>
                    </div>
                  </div>
                  <div style={{ width: "50%" }}>
                    <div class="d-flex">
                      <CheckCircle />
                      <p class="text-success">Tech support</p>
                    </div>
                    <div class="d-flex">
                      <CheckCircle />
                      <p class="text-success mb-0">Integration ready</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div
          style={{
            height: "auto",
            width: "100%",
            display: "flex",
            padding: "6rem 0",
            backgroundImage: "linear-gradient(180deg,#f9fbfd 0,#fff)",
          }}
        >
          <BootstrapExpirience />
        </div>{" "}
        <div
          style={{
            height: "auto",
            width: "100%",
            display: "flex",
            padding: "3rem 0",
          }}
        >
          <div
            style={{
              width: "60%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              margin: "0 20%",
            }}
          >
            <h2
              style={{
                lineHeight: "1.35",
                fontSize: "1.9375rem",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              Our customers are our biggest fans.
            </h2>
            <p
              class="fs-lg text-muted mb-7 mb-md-9"
              style={{
                textAlign: "center",
                lineHeight: "1.6",
              }}
            >
              We don't like to brag, but we don't mind letting our customers do
              it for us. Here are a few nice things folks have said about our
              themes over the years.
            </p>
          </div>
        </div>{" "}
        <div
          style={{
            height: "auto",
            width: "100%",
            display: "flex",
            padding: "2rem 0",
            zIndex: "999",
          }}
        >
          <SwipeableSteps />
        </div>{" "}
        <div style={{ marginTop: "2rem", position: "relative", width: "100%" }}>
          <div
            style={{
              overflow: "hidden",
              bottom: "0",
              left: "0",
              right: "0",
              color: "#f1f4f8",
              // transform: "scale(2)",
              height: "auto",
              width: "100%",
            }}
            class="shape"
          >
            <svg
              viewBox="0 0 2880 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
                fill="currentColor"
              ></path>
            </svg>{" "}
          </div>
        </div>
        <div
          style={{
            height: "auto",
            width: "100%",
            display: "flex",
            padding: "2rem 0",
            backgroundColor: "#f1f4f8",
          }}
        >
          <StayFocusedUi />
        </div>{" "}
        <div
          style={{
            height: "auto",
            width: "100%",
            display: "flex",
            padding: "3rem 0",
            backgroundColor: "#f1f4f8",
          }}
        >
          <div
            style={{
              width: "60%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              margin: "0 20%",
            }}
          >
            <h2
              style={{
                lineHeight: "1.35",
                fontSize: "1.9375rem",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              Fair, simple pricing for all.
            </h2>
            <p
              class="fs-lg text-muted mb-7 mb-md-9"
              style={{
                textAlign: "center",
                lineHeight: "1.6",
              }}
            >
              All types of businesses need access to development resources, so
              we give you the option to decide how much you need to use.
            </p>
            <form class="d-flex align-items-center justify-content-center mb-7 mb-md-9">
              <span class="text-muted">Annual</span>

              <div style={{ margin: "0 .75rem", minHeight: "1.375rem" }}>
                <SingleToggleIcon />
              </div>
              <span class="text-muted">Monthly</span>
            </form>
          </div>
        </div>{" "}
        <div
          style={{
            height: "auto",
            width: "100%",
            display: "flex",
            padding: "2rem 0",
            marginBottom: "-450px",
            zIndex: "999",
            //   backgroundColor: "#f1f4f8",
          }}
        >
          <ContactUs />
        </div>{" "}
        <div
          style={{ marginTop: "16rem", position: "relative", width: "100%" }}
        >
          <div
            style={{
              overflow: "hidden",
              bottom: "0",
              left: "0",
              right: "0",
              color: "#1b2a4e",
              pointerEvents: "none",
              // transform: "scale(2)",
              height: "auto",
              width: "100%",
            }}
            class="shape"
          >
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
                fill="currentColor"
              ></path>
            </svg>{" "}
          </div>
        </div>
        <div
          style={{
            paddingTop: "16rem",
            backgroundColor: "#1b2a4e",
            height: "auto",
            width: "100%",
            display: "flex",
          }}
        >
          <BuyNow />
        </div>{" "}
        <div style={{ position: "relative" }}>
          <div
            style={{
              overflow: "hidden",
              bottom: "0",
              left: "0",
              right: "0",
              color: "#f1f4f8",
              // transform: "scale(2)",
              height: "auto",
              width: "100%",
            }}
            class="shape"
          >
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
                fill="currentColor"
              ></path>
            </svg>{" "}
          </div>
        </div>{" "}
        <div
          style={{
            padding: "6rem 0",
            backgroundColor: "#f1f4f8",
            height: "auto",
            width: "100%",
            display: "flex",
          }}
        >
          <Footer />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
