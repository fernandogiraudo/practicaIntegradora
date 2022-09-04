import {Router} from 'express';
import Students from '../dao/dbManagers/students.js';

const studentsManager = new Students();
const router = Router();

router.get('/',async(req,res)=>{
    let students = await studentsManager.getAll();
    console.log(students);
    res.render('students',{students})
})


export default router;