import React, { useEffect, useRef } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import logo from "../../assets/logo.png";

const PrivacyPolicy = () => {
  const goBack = () => {
    window.history.back();
  };

  const pageRef = useRef(null)

  const handleGetRef = () => {
    if (pageRef && pageRef.current) {
      pageRef.current.scrollIntoView({ behavior: "smooth", top: -2 });
    }
  };

  useEffect(() => {
    handleGetRef();
  }, []);

  return (
    <div ref={pageRef}>
      <div
        style={{
          padding: "7px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FaArrowLeftLong
          style={{ color: "black", fontSize: "18px" }}
          onClick={goBack}
        />
        <h2>Privacy Policy</h2>
        <img src={logo} alt="logo" style={{ width: "40px", height: "40px" }} />
      </div>
      <div style={{ margin: "20px" }}>
        <div>
          <p style={{ textAlign: "left" }}>
            Last updated: jan 12, 2023.
            <br />
            This Privacy Policy describes how 2geda ("we," "us," or "our")
            collects, uses, and shares your personal information when you use
            our social media application and related services (collectively
            referred to as the "App").
          </p>
        </div>
        <div style={{ margin: "20px 0" }}>
          <h2>Information We Collect</h2>
          <p style={{ textAlign: "left" }}>
            Account information
            <br />
            <span style={{ textAlign: "left" }}>
              When you create an account on 2geda, we may collect the following
              information:
            </span>
          </p>
          <ul
            style={{
              fontSize: "14px",
              fontWeight: "500",
            }}
          >
            <li style={{ listStyle: "inherit" }}>Full name</li>
            <li style={{ listStyle: "inherit" }}>Email addess</li>
            <li style={{ listStyle: "inherit" }}>Profile picture</li>
            <li style={{ listStyle: "inherit" }}>Username</li>
            <li style={{ listStyle: "inherit" }}>Password</li>
          </ul>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <h2>User Content</h2>
          <p style={{ textAlign: "left" }}>
            The App allows you to create and share content, such as posts,
            photos, and comments. This content may be publicly visible to other
            users depending on your privacy settings.
            <br />
            Usage information
            <br />
            We collect information about how you interact with the App,
            including:
          </p>
          <ul style={{ fontSize: "14px", fontWeight: "500" }}>
            <li style={{ listStyle: "inherit" }}>
              Log data (e.g., IP address, device information, access times)
            </li>
            <li style={{ listStyle: "inherit" }}>
              Usage patterns (e.g., features used, time spent on the App)
            </li>
          </ul>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <h2>Location Information</h2>
          <p style={{ textAlign: "left" }}>
            If you enable location services, we may collect and process
            information about your location.
            <br />
            How We Use Your Information
            <br />
            We use the collected information for various purposes, including:
          </p>

          <ul style={{ fontSize: "14px", fontWeight: "500" }}>
            <li style={{ listStyle: "inherit" }}>
              Providing and improving the App's features and functionality{" "}
            </li>
            <li style={{ listStyle: "inherit" }}>
              Customizing content and recommendations{" "}
            </li>
            <li style={{ listStyle: "inherit" }}>
              Analyzing usage patterns to enhance user experience{" "}
            </li>
            <li style={{ listStyle: "inherit" }}>
              Communicating with you about the App, updates, and promotions
            </li>
            <li style={{ listStyle: "inherit" }}>
              Enforcing our terms and policies
            </li>
          </ul>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <h2>Information Sharing</h2>
          <p style={{ textAlign: "left" }}>
            We may share your information in the following circumstances:
          </p>
          <ul style={{ fontSize: "14px", fontWeight: "500" }}>
            <li style={{ listStyle: "inherit" }}>With your consent </li>
            <li style={{ listStyle: "inherit" }}>
              To comply with legal obligations{" "}
            </li>
            <li style={{ listStyle: "inherit" }}>
              To protect our rights, privacy, safety, or property{" "}
            </li>
            <li style={{ listStyle: "inherit" }}>
              In connection with a merger, acquisition, or sale of assets
            </li>
          </ul>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <h2>Your Choices</h2>
          <p style={{ textAlign: "left" }}>
            You have the following choices regarding your information:
          </p>
          <ul style={{ fontSize: "14px", fontWeight: "500" }}>
            <li style={{ listStyle: "initial" }}>
              Adjust privacy settings to control who can see your content
            </li>
            <li style={{ listStyle: "initial" }}>
              Opt-out of promotional communications
            </li>
            <li style={{ listStyle: "initial" }}>Disable location services</li>
          </ul>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <h2>Security</h2>
          <p style={{ textAlign: "left" }}>
            We implement reasonable security measures to protect your
            information, but no method of transmission over the internet or
            electronic storage is 100% secure.
            <br />
            Changes to this Privacy Policy
            <br />
            We may update this Privacy Policy from time to time, and any changes
            will be posted on this page.
          </p>
        </div>
        <div style={{ paddingBottom: "50px" }}>
          <h2>Contact Us</h2>
          <p style={{ textAlign: "left" }}>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at support@2geda.net.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
