import mongoose from "mongoose";


const connectDB = async() =>{
    try {
       await mongoose.connect('mongodb://localhost:27017/GmailClone');
       console.log('Connected to Database')
    } catch (error) {
        console.log(error)
        
    }

}
export default connectDB