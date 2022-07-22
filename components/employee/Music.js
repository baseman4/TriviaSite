export default function Playlist(){
    const day = new Date();
    const today = day.getDay();

    let DOTW;

    switch(today){
        case 0:
           DOTW = "6SZ6EaFjfZnSJGfRf4QY9x?si=M_8HU7ccQROWxi8VtTNm-Q";
           break;
        case 1:
            DOTW = "4bOE3IM3bBZE6cUk6LxHna?si=Dt8e9OEeRAGuByDqveYJ_w";
            break;
        case 3:
            DOTW = "6dApvyPI6IyYhFOTUSqwT9?si=wjyknsuaRMSb5VD9KvDJrA";
            break;
        case 4:
            DOTW = "6U52bet4dGJR936n53r8dc?si=eGMm3QHWQhiK6o28Cu9nXg";
            break;
        case 5:
            DOTW = "3u1n7NWmh5HnlMQv4v8qTH?si=sv85QlIOR3OoatlQ8v1l-A";
            break;
        case 6:
            DOTW = "16caKD7G5RZgHMeCEXfF3n?si=J_MXGENzQ960zmbQpb5f6w";
            break;


    }
    let EMBsource = "https://open.spotify.com/embed/playlist/"+DOTW+"?utm_source=generator";
    let Downloadsource = "spotify:playlist:"+DOTW;
   

    return (
        <div>
            <h1 style={{textAlign:"center"}}><a href={Downloadsource} target="_blank" rel="noopener noreferrer">Download Playlist</a></h1>
        <iframe style={{borderRadius:"12px"}} src={EMBsource} width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        
        
        </div>
    )
}