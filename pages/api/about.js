import connectDB from '../../middleware/mongodb';
import Data from '../../models/dataModel.js';
import expressHandler from 'express-async-handler';


const handler = expressHandler(async (req, res) => {

    if (req.method === "POST") {
        const data = new Data(req.body);
        const createdData = await data.save();
        res.status(201).json(createdData);
    }

    if (req.method === "GET") {
        const datas = await Data.find({});
        res.status(200).json(datas);
    }


})

export default connectDB(handler);
