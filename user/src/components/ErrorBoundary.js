import { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import { Button } from "react-bootstrap";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  //   componentDidCatch(error, errorInfo) {
  //     // You can also log the error to an error reporting service
  //     logErrorToMyService(error, errorInfo);
  //   }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Main>
          {/* <Navbar /> */}
          {/* <img src={sadthought} alt="image" srcset="" /> */}
          <h2>An Unexpected Error Occured</h2> <p>Please Logout</p>
          <p> Check your internet Connection</p>
          <p>Contact your developer</p>
          <a href="/login">
            <Button
              variant="secondary"
              onClick={() => {
                localStorage.removeItem("user");
              }}
            >
              Logout
            </Button>
          </a>{" "}
          <a href="/user/dashboard">
            <Button variant="secondary">Dashboard</Button>
          </a>{" "}
        </Main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

const Main = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    max-width: 70%;
    text-align: center;
  }
  img {
    width: 260px;
    height: 260px;
  }
`;
