import axios from "axios";
import dashify from "dashify";
import { useEffect,useState } from "react";
import { useRouter } from "next/router";


  export async function getStaticProps({query}) {
    const {id} = query;
    const  shows = await db.collection('shows').doc(id).get();
     const showsData = shows.docs.map(show => ({
       id: show.id,
       ...show.data()
     }));
     console.log(showsData);
     return {
       props: { showsData },
       revalidate: 10
     }
   }

   const GetPol = (props) =>{
      return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">{props.Title}</h1>
                <p className="col-md-8 fs-4">{props.content}</p>
                <button className="btn btn-primary btn-lg" type="button">Return to Policies</button>
            </div>
        </div>

      )

}

export default GetPol;