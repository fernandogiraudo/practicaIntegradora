import { courseService } from "../repositories/services.js";

export const getAllCourses = async (req, res) => {
  let courses = await courseService.getAllCourses();
  res.send({ status: "success", payload: courses });
};

export const createCourse = async(req,res)=>{
    const {title,description} = req.body;
    let newCourse = {
        title,
        description,
        users:[],
        teacher:'sin asignar'
    }
    const result = await courseService.createCourse(newCourse);
    res.send({status:"success",payload:result});
}