import db from '../../utils/db';
export async function getStaticProps() {
   const  shows = await db.collection('shows').orderBy('ID').get();
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

  export default function ShowList(props){
    const {showsData} = props;

    return (
        <div>
            <h1>Shows</h1>
            {showsData.map(show =>(
                <div key={show.id}>
                    <h2>{show.Type} at {show.Name} with {show.Host}</h2>
                    <h3>{show.Day} from {show.Time}</h3>
                </div>
            ))}
        </div>
    )
  }