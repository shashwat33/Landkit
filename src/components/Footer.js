import React, { Component } from "react";
import {
  LandkitName,
  SocialIcon1,
  SocialIcon2,
  SocialIcon3,
  SocialIcon4,
} from "../styles/Icons";

export class Footer extends Component {
  render() {
    return (
      <div style={{ margin: "0 15%", width: "70%", padding: "0 1.25rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
          <div class="col-12 col-md-4 col-lg-3" style={{ width: "25%" }}>
            <div
              style={{
                height: "33.2px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {" "}
              <LandkitName />
            </div>
            <p
              style={{
                color: "#506690",
                fontSize: ".75rem",
                letterSpacing: ".08em",
                fontWeight: "1.55",
                margin: "0 0 .5rem 0",
              }}
            >
              A better way to build.
            </p>
            <ul
              style={{ display: "flex" }}
              class="list-unstyled list-inline list-social mb-6 mb-md-0"
            >
              <li class="list-inline-item list-social-item me-3">
                <a href="#!" class="text-decoration-none">
                  <SocialIcon2 />
                </a>
              </li>
              <li class="list-inline-item list-social-item me-3">
                <a href="#!" class="text-decoration-none">
                  <SocialIcon3 />
                </a>
              </li>
              <li class="list-inline-item list-social-item me-3">
                <a href="#!" class="text-decoration-none">
                  <SocialIcon1 />
                </a>
              </li>
              <li class="list-inline-item list-social-item">
                <a href="#!" class="text-decoration-none">
                  <SocialIcon4 />
                </a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-4 col-lg-2" style={{ width: "18.75%" }}>
            <h6
              style={{
                color: "#506690",
                textTransform: "uppercase",
                fontSize: ".75rem",
                letterSpacing: ".08em",
                fontWeight: "1.55",
                margin: "0",
                height: "33.2px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Products
            </h6>

            <ul class="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Page Builder
                </a>
              </li>
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  UI Kit
                </a>
              </li>
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Styleguide
                </a>
              </li>
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#!" class="text-reset">
                  Changelog
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md-4 col-lg-2" style={{ width: "18.75%" }}>
            <h6
              style={{
                color: "#506690",
                textTransform: "uppercase",
                fontSize: ".75rem",
                letterSpacing: ".08em",
                fontWeight: "1.55",
                margin: "0",
                height: "33.2px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Services
            </h6>

            <ul class="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Documentation
                </a>
              </li>
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Changelog
                </a>
              </li>
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Pagebuilder
                </a>
              </li>
              <li>
                <a href="#!" class="text-reset">
                  UI Kit
                </a>
              </li>
            </ul>
          </div>
          <div
            class="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0"
            style={{ width: "18.75%" }}
          >
            <h6
              style={{
                color: "#506690",
                textTransform: "uppercase",
                fontSize: ".75rem",
                letterSpacing: ".08em",
                fontWeight: "1.55",
                margin: "0",
                height: "33.2px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Connect
            </h6>

            <ul class="list-unstyled text-muted mb-0">
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Page Builder
                </a>
              </li>
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  UI Kit
                </a>
              </li>
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Styleguide
                </a>
              </li>
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Documentation
                </a>
              </li>
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Changelog
                </a>
              </li>
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#!" class="text-reset">
                  Changelog
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md-4 col-lg-2" style={{ width: "18.75%" }}>
            <h6
              style={{
                color: "#506690",
                textTransform: "uppercase",
                fontSize: ".75rem",
                letterSpacing: ".08em",
                fontWeight: "1.55",
                margin: "0",
                height: "33.2px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Legal
            </h6>

            <ul class="list-unstyled text-muted mb-0">
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Documentation
                </a>
              </li>
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Changelog
                </a>
              </li>
              <li>
                <a href="#!" class="text-reset">
                  Pagebuilder
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
