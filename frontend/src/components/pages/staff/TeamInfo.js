import React from "react";
import { Navbar } from "components/navbar";
import * as pages from "components/pages";
import { Tab, Tabs, Nav } from "react-bootstrap";
import { useAuthContext } from "hooks";
import { useLocation } from "react-router";

const style = {
    // backgrounds from 1 to 5 i.e. feed_4
    backgroundImage: "url(/feed_7.svg)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover"
    // height:"100vh",
};

const TemaInfo = () => {
    // const { isStaff } = useAuthContext();
    const location = useLocation();
    const state = location.state;

    return (
        <div className="container-fluid" style={style}>
            <div className="row">
                <div className="col-12">
                    <Navbar />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-7 m-auto">
                    <Tabs
                        defaultActiveKey="team"
                        variant="pills"
                        className="nav-justified"
                    >
                        <Tab eventKey="team" title="Team">
                            <pages.ShowingTeam res={state}/>
                        </Tab>
                        <Tab eventKey="projects" title="Projects">
                            <pages.Projects teamId={state.teamId} btn={true}/>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default TemaInfo;
