export default function EMPShows(){
const FOLDER = `https://drive.google.com/embeddedfolderview?id=1A5GfnI-m0HdACQUI8QP6MVhxgkNVh8u-#grid` 

    return(
        <div>
            <h1 style={{textAlign:"center"}}>Today`&#39;`s Shows:</h1>
        <iframe src={FOLDER} style={{width:"100%", height:"300px", border:"0"}}></iframe>
        </div>
    )
}