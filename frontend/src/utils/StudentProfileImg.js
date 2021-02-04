import { SearchBar } from "components/SearchBar";
import { Container, Row, Col } from "react-bootstrap";
import { FaBox } from "react-icons/fa";

const StudentProfileImg = ({}) => {
    return (
        <>
            <Container>
                <Row width="100%">
                    <Col
                        sm={12}
                        lg={6}
                        md={6}
                        width="50%"
                        style={{ float: "left" }}
                    >
                        <svg
                            style={{
                                marginTop: "20px",
                                display: "block",
                                marginRight: "auto",
                                marginLeft: "auto",
                            }}
                            width="50%"
                            height="50%"
                            viewBox="0 0 698 698"
                            class="injected-svg gridItem__media"
                        >
                            <defs>
                                <linearGradient
                                    id="b247946c-c62f-4d08-994a-4c3d64e1e98f-192"
                                    x1="349"
                                    y1="698"
                                    x2="349"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop
                                        offset="0"
                                        stop-color="gray"
                                        stop-opacity="0.25"
                                    ></stop>
                                    <stop
                                        offset="0.54"
                                        stop-color="gray"
                                        stop-opacity="0.12"
                                    ></stop>
                                    <stop
                                        offset="1"
                                        stop-color="gray"
                                        stop-opacity="0.1"
                                    ></stop>
                                </linearGradient>
                            </defs>
                            <circle
                                cx="349.68"
                                cy="346.77"
                                r="341.64"
                                fill="#f5f5f5"
                            ></circle>
                            <path
                                d="M601,790.76a340,340,0,0,0,187.79-56.2c-12.59-68.8-60.5-72.72-60.5-72.72H464.09s-45.21,3.71-59.33,67A340.07,340.07,0,0,0,601,790.76Z"
                                transform="translate(-251 -101)"
                                fill="#00bfa6"
                            ></path>
                            <circle
                                cx="346.37"
                                cy="339.57"
                                r="164.9"
                                fill="#333"
                            ></circle>
                            <path
                                d="M293.15,476.92H398.81a0,0,0,0,1,0,0v84.53A52.83,52.83,0,0,1,346,614.28h0a52.83,52.83,0,0,1-52.83-52.83V476.92a0,0,0,0,1,0,0Z"
                                opacity="0.1"
                            ></path>
                            <path
                                d="M296.5,473h99a3.35,3.35,0,0,1,3.35,3.35v81.18A52.83,52.83,0,0,1,346,610.37h0a52.83,52.83,0,0,1-52.83-52.83V476.35A3.35,3.35,0,0,1,296.5,473Z"
                                fill="#fdb797"
                            ></path>
                            <path
                                d="M544.34,617.82a152.07,152.07,0,0,0,105.66.29v-13H544.34Z"
                                transform="translate(-251 -101)"
                                opacity="0.1"
                            ></path>
                            <circle
                                cx="346.37"
                                cy="372.44"
                                r="151.45"
                                fill="#fdb797"
                            ></circle>
                            <path
                                d="M489.49,335.68S553.32,465.24,733.37,390l-41.92-65.73-74.31-26.67Z"
                                transform="translate(-251 -101)"
                                opacity="0.1"
                            ></path>
                            <path
                                d="M489.49,333.78s63.83,129.56,243.88,54.3l-41.92-65.73-74.31-26.67Z"
                                transform="translate(-251 -101)"
                                fill="#333"
                            ></path>
                            <path
                                d="M488.93,325a87.49,87.49,0,0,1,21.69-35.27c29.79-29.45,78.63-35.66,103.68-69.24,6,9.32,1.36,23.65-9,27.65,24-.16,51.81-2.26,65.38-22a44.89,44.89,0,0,1-7.57,47.4c21.27,1,44,15.4,45.34,36.65.92,14.16-8,27.56-19.59,35.68s-25.71,11.85-39.56,14.9C608.86,369.7,462.54,407.07,488.93,325Z"
                                transform="translate(-251 -101)"
                                fill="#333"
                            ></path>
                            <ellipse
                                cx="194.86"
                                cy="372.3"
                                rx="14.09"
                                ry="26.42"
                                fill="#fdb797"
                            ></ellipse>
                            <ellipse
                                cx="497.8"
                                cy="372.3"
                                rx="14.09"
                                ry="26.42"
                                fill="#fdb797"
                            ></ellipse>
                        </svg>
                    </Col>
                    <Col sm={12} md={6} lg={6} width="50%">
                        <svg
                            class="injected-svg gridItem__media"
                            style={{
                                display: "block",
                                marginRight: "auto",
                                marginLeft: "auto",
                            }}
                        >
                            <circle
                                cx="5"
                                cy="55"
                                r="4"
                                fill="#00bfa6"
                            ></circle>
                            <circle
                                cx="5"
                                cy="75"
                                r="4"
                                fill="#00bfa6"
                            ></circle>
                            <circle
                                cx="5"
                                cy="95"
                                r="4"
                                fill="#00bfa6"
                            ></circle>
                            <circle
                                cx="5"
                                cy="115"
                                r="4"
                                fill="#00bfa6"
                            ></circle>
                            <polygon
                                points="50 55 375 55 375 57 50 57"
                                fill="#3f3d56"
                            ></polygon>
                            <polygon
                                points="50 75 375 75 375 77 50 77"
                                fill="#3f3d56"
                            ></polygon>
                            <polygon
                                points="50 95 375 95 375 97 50 97"
                                fill="#3f3d56"
                            ></polygon>
                            <polygon
                                points="50 115 375 115 375 117 50 117"
                                fill="#3f3d56"
                            ></polygon>
                        </svg>
                    </Col>
                </Row>
            </Container>
        </>
    );
};
export default StudentProfileImg;
