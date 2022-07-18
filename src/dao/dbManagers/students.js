import { studentModel } from "../models/students.js"
/**
 * Puedes tomar más tiempo haciendo este módulo, ya que al final es el que más interesa de
 * esta práctica integradora.
 * Si te sobra tiempo, puedes desarrollar más métodos como getById, update o delete.
 * Sin embargo, para esta práctica con 2 debería bastarnos.
 */
export default class Students {
    constructor() {
        console.log(`Working students with Database persistence in mongodb`)
    }
    getAll = async () => {
        let students = await studentModel.find();
        return students
    }
    saveStudent = async (student) => {
        let result = await studentModel.create(student);
        return result;
    }
}