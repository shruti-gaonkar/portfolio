import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../component/Nav";
import { Parallax } from 'react-parallax';

const paraStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center"
};

function HomepageContainer() {
    return (
        <Row>
            <Col>
                <div id="index-banner">
                    <Parallax
                        bgImage="./images/bg.png"
                        bgImageAlt="Aquarium fish swimming in a tank."
                        style={paraStyle}
                        strength="600"
                    >
                        <div style={{ height: 775 }}>
                            <Navigation />
                            <div className="imageBox">
                                <div><img src="./images/profile.jpg" class="myImg" /></div>
                                <h1>Shruti Gaonkar</h1>
                                <h2>Full Stack Web Developer</h2>
                                <p className="intro">I am a Los Angeles based Fullstack Web Developer.</p>
                            </div>
                        </div>
                    </Parallax>
                </div >
            </Col>
        </Row>
    );
}

export default HomepageContainer;