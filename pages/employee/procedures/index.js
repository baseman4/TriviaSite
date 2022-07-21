/* eslint-disable @next/next/no-html-link-for-pages */
import db from "../../../../je-full-stack/utils/db";
import Link from 'next/link';
export async function getStaticProps() {
   const  procedures = await db.collection('procedures').get();
    const proData = procedures.docs.map(pro => ({
      id: pro.id,
      ...pro.data()
    }));
   // console.log(policyData);
    return {
      props: { proData },
      revalidate: 10
    }
  }

  export default function ProList(props){
    const {proData} = props;

    return (
        <div>
            <h1 style={{textAlign:"center", padding:"10px"}}>Procedures</h1>
            {proData.map(pro =>(
                <div key={pro.id} className="h-100 p-5 bg-light border rounded-3">
                    <h2>{pro.Title}</h2>
                    <p>{pro.content}</p>
                 </div>
            ))}
            <div style={{height:"100",justifyContent:"center"}} >

            <div className="container-fluid  d-flex">
            <a className="btn btn-primary Brand-BG-B btn-lg flex-grow-1 " style={{alignSelf: "stretch"}} type="button" href="/employee">Return to Dashboard</a>
      </div>


            </div>
        </div>
    )  
  }