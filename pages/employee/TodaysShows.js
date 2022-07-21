/* eslint-disable @next/next/no-html-link-for-pages */
import EMPShows from "../../components/employee/EMPshows";
import Playlist from "../../components/employee/Music";
export default function EMPLOYEE_PAGE(){
    return(
        <>
        <EMPShows />
        <Playlist />
        
        <div className="container-fluid  d-flex">
            <a className="btn btn-primary Brand-BG-B btn-lg flex-grow-1 m-5" style={{alignSelf: "stretch"}} type="button" href="/employee">Return to DashBoard</a>
            </div>
        </>
    )
}