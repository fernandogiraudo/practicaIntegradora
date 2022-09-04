import { studentModel } from "../models/students.js"

export default class Students {
    constructor() {
        console.log(`Working students with Database persistence in mongodb`)
    }
    getAll = async () => {
        let students = await studentModel.find();
        return students.map(student=>student.toObject())
    }
    saveStudent = async (student) => {
        let result = await studentModel.create(student);
        return result;
    }
}