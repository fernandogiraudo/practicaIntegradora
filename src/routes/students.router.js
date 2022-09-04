import {Router} from 'express';
import Students from '../dao/dbManagers/students.js';

const studentsManager = new Students();
const router = Router();

router.get('/', async (req,res)=>{
    let students = await studentsManager.getAll();
    if(!students) return res.status(500).send({status:"error",error:"Couldn't get students due to internal error"})
    res.send({status:"success",payload:students})
})

router.post('/',async(req,res)=>{
    let {first_name,last_name,dni,age,gender} = req.body;
    if(!first_name||!last_name||!dni||!age||!gender) return res.status(400).send({status:"error",error:"Incomplete values"})
    let result = await studentsManager.saveStudent({
        first_name,
        last_name,
        dni,
        age,
        gender
    })
    if(!result) return res.status(500).send({status:"success",payload:result})
    res.send({status:"success",payload:result})
})

export default router;