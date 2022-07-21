import EMPHead from "../../components/employee/Header";
import ShowCard from "../../components/employee/Cards/Shows";
import DORCard from "../../components/employee/Cards/DaysOffReq";
import PolicyCard from "../../components/employee/Cards/Policies";
import ProcedureCard from "../../components/employee/Cards/Procedures";
export default function EmployeePage(){
return (
    <>
        <EMPHead />
        <div className="d-md-flex flex-md-equal w-100 my-md-3  pt-0">
        <ShowCard />
        <DORCard />
        </div>
        <div className="d-md-flex flex-md-equal  w-100 my-md-3   pt-0">
        
        <PolicyCard />
        <ProcedureCard />
        </div>
    </>
)
}