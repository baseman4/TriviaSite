/* eslint-disable import/no-anonymous-default-export */
import db from '../../../utils/db';

export default async (req,res) =>{
    try {
        const shows = await db.collection('shows').orderBy('id').get();
        const showsData = shows.docs.map(show => ({
          id: show.id,
          ...show.data()
        }));
        res.status(200).json({ showsData });
      } catch (e) {
        res.status(400).end();
      }
}