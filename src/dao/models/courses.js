import mongoose from 'mongoose';

const courseCollection = 'courses';

const coursesSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    students:{
        type:Array,
        default:[]
    }
})

export default coursesModel = mongoose.model(courseCollection,coursesSchema);