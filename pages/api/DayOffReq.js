/* eslint-disable import/no-anonymous-default-export */
import db from '../../utils/db';

export default async (req,res) => {
    try{

            const { id } = await db.collection('DaysOff').add({
                ...req.body,
                created: new Date().toISOString(),
            });
            res.status(200).json({ id });

    } catch (e){
        res.status(400).end();
    }
}