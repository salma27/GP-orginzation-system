import {RequestCard} from "components/cards";
import React, {useState, useEffect} from "react";
import {CardColumns} from "react-bootstrap";
import {useRequest} from "hooks";
import {staffGetPolls, stafftVote} from "requests";
import { toast } from "react-toastify";

const requests = [
    {
        name: "Alen douglas",
        join: true,
    },
    {
        name: "Mike mikey",
        join: true,
    },
    {
        name: "Ali kory",
        join: false,
    },
    {
        name: "My name",
        join: false,
    },
    {
        name: "Tarzan",
        join: true,
    },
    {
        name: "Elsa",
        join: false,
    },
];
const StaffRequests = () => {
    const [data,setData] = useState([]);
    const [request,requesting] = useRequest(staffGetPolls);
    const [voteRequest,voteRequestin] = useRequest(stafftVote);

    useEffect(() => {
        request()
            .then(response=>{
                // console.log(response.data.polls);
                setData(response.data.polls);
            })
            .catch(error=>{
                toast.error("Couldn't get requests")
            })
    }, [])

    const vote = (pollId,pollOptionId)=>{
        voteRequest({pollId,pollOptionId})
            .then(res=>{
                toast.success("Done");
            })
            .catch(error=>{
                toast.error("faild");
            })
    }

    return (
        <div>
            <div className="row">
                <CardColumns>
                    {data.map((r, i) => (
                        <RequestCard {...r} key={i} vote={vote} />
                    ))}
                </CardColumns>
            </div>
        </div>
    );
};
export default StaffRequests;
