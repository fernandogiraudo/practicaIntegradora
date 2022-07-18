import mongoose from 'mongoose';

const studentCollection = 'students';

const studentsSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    dni:Number,
    age:Number,
    gender:{
        type:String,
        enmu:["M","F"],
        required:true
    },
    courses:{
        type:Array,
        default:[]
    }
})

export const studentModel = mongoose.model(studentCollection,studentsSchema);