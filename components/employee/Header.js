import Image from "next/dist/client/image"
export default function EMPHead(){
    return(
        <div className="position-relative overflow-hidden pt-3 pt-md-5   text-center Brand-BG-Dark" >
    <div className="col-md-5 p-lg-5 mx-auto my-5">
        <Image src="/brand/JELogo_Trans.png" height="100" width="100" alt="Logo" />
      <h1 className="display-4 fw-normal">Employee Portal</h1>
      <p className="lead fw-normal">Everythin you need to be successful.<br></br> All in one place.</p>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
    )
}