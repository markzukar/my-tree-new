"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../../components/FrontApp/Navbar";
import Carousel from 'react-bootstrap/Carousel';

export default function Home(test) {
  console.log("test------>", test)
  return (
    <div>
      <div class="container-fluid">
        <Navbar />
        <div class="row h-100 align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
          <div class="">
            <Carousel>
              <Carousel.Item interval={1500}>
                <img
                  className="d-block w-100"
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                  alt="Image One"
                />
                <Carousel.Caption>
                  <h3>Label for first slide</h3>
                  <p>Sample Text for Image One</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                  alt="Image Two"
                />
                <Carousel.Caption>
                  <h3>Label for second slide</h3>
                  <p>Sample Text for Image Two</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
