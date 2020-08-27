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
                            <div className="searchBox"></div>
                        </div>
                    </Parallax>
                </div >
            </Col>
        </Row>
    );
}

export default HomepageContainer;