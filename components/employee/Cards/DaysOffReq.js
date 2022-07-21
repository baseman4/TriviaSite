/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */


export default function DORCard(){

    return (
       
       <div style={{flexGrow:"1"}} className="Brand-BG-W my-0  pt-3 px-3 pt-md-5 px-md-5 pb-5 text-center overflow-hidden">
         <div className="my-3 p-3">
           <h2 className="display-5 Brand-Text-B">Request Time Off</h2>
           <p className="lead">Select which days you will require off.</p>
         </div>
         <a className="w-100 btn btn-outline-secondary Brand-BG-O " href="/employee/DaysOffReq">Take a Vacation</a>
   
       </div>
   
    )   
   }