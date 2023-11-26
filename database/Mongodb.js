import mongoose from "mongoose";
const connect = async() => {
    await mongoose.connect(process.env.URI);
    console.log('server is connected to the database...');
}

export default connect;