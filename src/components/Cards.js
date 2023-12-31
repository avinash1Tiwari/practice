import React, { useState } from "react";
import Card from "./Card";


const Cards = (props)=>{

    let courses = props.courses;
   let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);
    
    const getCourses = () => {
        
        if(category == "All")
        {
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData =>{
    
                    allCourses.push(courseData)
                })
            })
            console.log("inside Cards")
            console.log(allCourses)
        
            return allCourses;
        }
        else{
            return courses[category]
        }
       
       
        }

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
             {/* console.log("inside card custom") */}
        {
           
               getCourses().map((course) => (
                    
                    <Card key = {course.id} 
                    course = {course}
                    likedCourses={likedCourses}
                    setLikedCourses={setLikedCourses}/>
               ))
        }
        </div>
    );
}

export default Cards;