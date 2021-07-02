import React, { Component } from "react";
import { CheckCircle } from "../styles/Icons";
export class ContactUs extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "0 15%",
          width: "70%",
        }}
      >
        <div style={{ width: "50%", flex: "0 0 auto" }}>
          <div
            class="card rounded-lg shadow-lg mb-6 mb-md-0 aos-init aos-animate"
            style={{ zIndex: "1" }}
          >
            <div style={{ width: "100%" }}>
              <div style={{ justifyContent: "center", padding: "3rem 2rem" }}>
                <div style={{ width: "100%" }}>
                  <p style={{ margin: "0 0 1.5rem", textAlign: "center" }}>
                    <span
                      style={{
                        backgroundColor: "rgba(51,94,234,.1)",
                        color: "#335eea",
                        borderRadius: "50rem",
                      }}
                      class="badge"
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
                        Standard
                      </span>
                    </span>
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.5rem",
                        lineHeight: "1.35",
                        letterSpacing: "-.01em",
                        fontWeight: "400",
                        marginTop: ".5rem",
                      }}
                    >
                      $
                    </span>
                    <span
                      style={{
                        lineHeight: "1.3",
                        fontSize: "2.5rem",
                        letterSpacing: "-.01em",
                        fontWeight: "400",
                        margin: "0",
                      }}
                    >
                      29
                    </span>
                    <span
                      style={{
                        fontSize: "1.5rem",
                        lineHeight: "1.35",
                        letterSpacing: "-.01em",
                        fontWeight: "400",
                        marginBottom: ".25rem",
                      }}
                    >
                      /mo
                    </span>
                  </div>

                  <p
                    style={{ textAlign: "center", margin: "0 0 2rem" }}
                    class="text-muted"
                  >
                    per seat
                  </p>

                  <div class="d-flex">
                    <CheckCircle />

                    <p style={{ margin: "0 0 1rem 0" }}>
                      {" "}
                      Rich, responsive landing pages
                    </p>
                  </div>
                  <div class="d-flex">
                    <CheckCircle />

                    <p style={{ margin: "0 0 1rem 0" }}>
                      100+ styled components
                    </p>
                  </div>
                  <div class="d-flex">
                    <CheckCircle />

                    <p style={{ margin: "0 0 1rem 0" }}>
                      Flexible, simple license
                    </p>
                  </div>
                  <div class="d-flex">
                    {" "}
                    <CheckCircle />
                    <p style={{ margin: "0 0 1rem 0" }}>Speedy build tooling</p>
                  </div>
                  <div class="d-flex">
                    {" "}
                    <CheckCircle />
                    <p style={{ margin: "0 0 1rem 0" }}>
                      6 months free support included
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              style={{
                backgroundColor: "#335eea",
                color: "white",
                padding: "1.122rem 1.5rem",
                fontSize: "1.0625rem",
                textAlign: "center",
                textDecoration: "none",
              }}
              href="#!"
              // class="card-btn btn w-100 btn-lg btn-primary"
            >
              Get it now
            </a>
          </div>
        </div>
        <div
          style={{ width: "40%", flex: "0 0 auto", margin: "0 0 0 -10px" }}
          class="col-12 col-md-6 ms-md-n3"
        >
          <div
            class="card rounded-lg shadow-lg aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div style={{ width: "100%" }}>
              <div style={{ justifyContent: "center", padding: "3rem 2rem" }}>
                <p style={{ margin: "0 0 6rem", textAlign: "center" }}>
                  <span
                    class="badge"
                    style={{
                      backgroundColor: "rgba(51,94,234,.1)",
                      color: "#335eea",
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
                      Enterprise
                    </span>
                  </span>
                </p>

                <p
                  style={{
                    textAlign: "center",
                    fontSize: "1.1875rem",
                    fontWeight: "400",
                    margin: "0 0 5rem 0",
                  }}
                  class="text-muted"
                >
                  We offer variable pricing with discounts for larger
                  organizations. Get in touch with us and we’ll figure out
                  something that works for everyone.
                </p>
              </div>
            </div>

            <a
              href="#!"
              style={{
                backgroundColor: "#d9e2ef",
                color: "#506690",
                padding: "1.122rem 1.5rem",
                fontSize: "1.0625rem",
                textAlign: "center",
                textDecoration: "none",
              }}
              // class="card-btn btn w-100 btn-lg btn-light"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUs;
