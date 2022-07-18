import {Router} from 'express';
import Students from '../dao/fileManagers/students.js';

const studentsManager = new Students();
const router = Router();

router.get('/',async(req,res)=>{
    let students = await studentsManager.getAll();
    res.render('students',{students})
})


export default router;