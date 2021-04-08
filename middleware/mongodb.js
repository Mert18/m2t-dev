import mongoose from 'mongoose';

const connectDB = handler => async (req, res) => {

    try {
        const conn = await mongoose.connect(process.env.mongodburl, {
            useUnifiedTopology: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useCreateIndex: true

        });


        console.log(`mongodb connected: ${conn.connection.host}`)
    } catch (error) {
        console.log("Error while connecting to database.")
        process.exit(1);
    }
    return handler(req, res);


};

export default connectDB;