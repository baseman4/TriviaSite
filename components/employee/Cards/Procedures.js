export default function ProcedureCard(){
    return(
        <>
        <div style={{flexGrow:"1"}} className="Brand-BG-Dark my-0  pt-3 px-3 pt-md-5 px-md-5 pb-5 text-center overflow-hidden">
        <div className="my-3 py-3">
          <h2 className="display-5 Brand-Text-O">Procedures</h2>
          <p className="lead">Keep up to date with our company procedures.</p>
        </div>
        <a className="w-100 btn btn-outline-secondary Brand-BG-B " href="/employee/procedures">See Procedures</a>
        </div>
        </>
    )
}