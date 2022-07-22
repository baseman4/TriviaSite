/* eslint-disable @next/next/no-html-link-for-pages */
import db from "../../../utils/db";
import Link from 'next/link';
export async function getStaticProps() {
   const  policies = await db.collection('policies').get();
    const policyData = policies.docs.map(policy => ({
      id: policy.id,
      ...policy.data()
    }));
    console.log(policyData);
    return {
      props: { policyData },
      revalidate: 10
    }
  }

  export default function PolicyList(props){
    const {policyData} = props;

    return (
        <div>
            <h1 style={{textAlign:"center", padding:"10px"}}>Policies</h1>
            {policyData.map(policy =>(
                <div key={policy.id} className="h-100 p-5 bg-light border rounded-3">
                    <h2>{policy.Title}</h2>
                    <p>{policy.content}</p>
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