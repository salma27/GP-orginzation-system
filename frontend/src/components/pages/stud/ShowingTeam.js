import { React, useEffect, useState } from "react";
import { ShowingNames, Technologies } from "components/cards";
import { RiMailSendLine } from "react-icons/ri";
import { useAuthContext, useRequest } from "hooks";
import { confirmAction } from "utils";
import AskToJoinMyTeam from "components/Modals/AskToJoinMyTeam";
import { toast } from "react-toastify";
import { getSearchStudentTeamInfo, StudentRequestToJoinTeam } from "requests";

const projects = ["pro1", "pro4", "pro5"];

const style = {
    // backgrounds from 1 to 5 i.e. feed_4
    backgroundImage: "url(/feed_7.svg)",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
height: "100%"
    // height:"100vh",
};
//const students = ["sara", "salma"];
const ShowinTeam = (props) => {
    const { isStaff } = useAuthContext();
    const [showModal, setShowModal] = useState(false);

    const [request, requesting] = useRequest(getSearchStudentTeamInfo);
    const [info, setInfo] = useState([]);
    const [students, setStudents] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [TAs, setTAs] = useState([]);
    const [technologies, setTechnologies] = useState([]);
    const [requestJoinTeam, requestingJoionTeam] = useRequest(
        StudentRequestToJoinTeam
    );
    useEffect(() => {
        request({ id: props.res.teamId })
            .then((r) => {
                const arr1 = [];
                const arr2 = [];
                const arr3 = [];
                const arr4 = [];
                r.data.supervisors.forEach((element) => {
                    if (element.type === 0) {
                        arr1.push(element);
                    }
                    if (element.type === 1) {
                        arr2.push(element);
                    }
                });
                r.data.students.forEach((element) => {
                    arr3.push(element);
                    element.technologyIds.forEach((tech) => {
                        if (!arr4.includes(tech)) arr4.push(tech);
                    });
                });

                setDoctors(arr1);
                setTAs(arr2);
                setStudents(arr3);
                setInfo(r.data);
                setTechnologies(arr4);
                toast.success("data loaded successfully");
            })
            .catch(({ response }) => {
                toast.error(response.data.message);
                toast.error("Error showing team information");
            });
    }, []);
    const confirm = () => {
        confirmAction({
            message: "Are you sure you want to send this request?",
            onConfirm: () => {
                requestJoinTeam({ teamId: props.res.teamId })
                    .then((r) => {
                        toast.success("Request sent successfully");
                    })
                    .catch(({ response }) => {
                        toast.error(response.data.message);
                        toast.error("Error sending request");
                    });
            },
        });
    };

    return (
        <div className="container-fluid" style={style}>
            <div className="row m-auto" style={{ maxWidth: "100%" }}>
                <div className="col-12 personinfo-block">
                    <div className="row team-header">
                        <div className="col-12 col-lg-8">
                            <h2>Team Info</h2>
                        </div>
                        <div className="col-12 col-lg-4">
                            <button
                                className="primary-btn py-1 px-2 mr-1 mb-1"
                                onClick={() =>
                                    isStaff ? setShowModal(true) : confirm()
                                }
                            >
                                <RiMailSendLine className="mr-1" />
                                {isStaff
                                    ? "Ask To Be Supervisor"
                                    : "Ask to join"}
                            </button>
                            {showModal&&
                            <AskToJoinMyTeam
                                show={showModal}
                                hide={() => setShowModal(false)}
                                projects={projects}
                                teamId={props.res.teamId}
                            />}
                        </div>
                    </div>

                    <hr />
                    <ShowingNames
                        title="Students"
                        data={students}
                        isStudent={true}
                    />
                    <hr />
                    <ShowingNames
                        title="Supervising doctors"
                        data={doctors}
                        isStudent={false}
                    />
                    <hr />
                    <ShowingNames
                        title="Supervising Teaching Assistants"
                        data={TAs}
                        isStudent={false}
                    />
                    <hr />
                    <Technologies tech={technologies} />
                </div>
            </div>
        </div>
    );
};

export default ShowinTeam;
