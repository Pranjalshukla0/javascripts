//DESTRUCTUREING
const course={
    courseName:"mycourse",
    price:"200",
    courseInstructure:"pranjal"
}
//console.log(  course.courseInstructure);

 
 const{courseInstructure: inst}=course;
//console.log(courseInstructure);
 console.log(inst);
 
 const navbar = ({company})=>{

 }
 navbar(company="pranjal");

 // json api

//  {
//     'name': "pranjal",
//     "age": "21"
//  }

//  [
//     {},
//     {},
//     {},
//  ]