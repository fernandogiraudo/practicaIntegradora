import fs from 'fs';
import __dirname from '../../utils.js';
/**
 * Recuerda que es una práctica integradora, no te esmeres demasiado en explicar a fondo un tema
 * Tu mayor fuerte en la práctica integradora será la transición de fileSystem a base de datos
 * De manera que si utilizas mucho tiempo en desarrollar estos módulos, puede que no te dé el 
 * tiempo suficiente para poder hacer las demás cosas. 
 * Por ello, en lugar de desarrollar todos los métodos, sólo se desarrollarán los primeros dos
 * y los más importantes (creación y lectura).
 */
const path = __dirname+'/files/students.json'
export default class Students{
    constructor(){
        console.log(`Working with students on path: ${path}`)
    }
    getAll = async() =>{
        if(fs.existsSync(path)){
            try{
                let data = await fs.promises.readFile(path,'utf8');
                return JSON.parse(data);
            }
            catch(error){
                console.log("Couldn't read file: "+error)
                return null;
            }
        }
        else{
            return [];
        }
    }
    saveStudent = async(student) =>{
        try{
            student.courses = [];
            let students = await this.getAll();
            if(students.length===0){//First student
                student.id=1;
                students.push(student)
                await fs.promises.writeFile(path,JSON.stringify(students,null,'\t'))
            }
            else{
                student.id = students[students.length-1].id+1;
                students.push(student);
                await fs.promises.writeFile(path,JSON.stringify(students,null,'\t'));
                return student;
            }
        }
        catch(error){
            console.log("Couldn't write file: "+error)
            return null;
        }
    }
}