"use client"
import { Button } from "antd";

import CourseCard from "@/components/Card/coursecard";

import { useRouter } from "next/router";

export const CourseAdmin = () => {

  // const router = useRouter();


  // const handleAddCourse = () => {
  //   router.push('/admin/course/create');
  // };



    return(
     <div className="w-screen h-screen bg-white ">
        <div className="text-2xl text-boid h-28  flex justify-between">
          <p className="mt-14 ml-16">Quản lý khóa học</p>
          <Button className="mt-14 mr-20">Thêm khóa học</Button>
          </div>
          <div className="w-full h-full flex flex-col justify-start items-center">
        <CourseCard 
          imageSrc="link-to-your-image.jpg" 
          title="Khóa học A" 
          price="Giá: 1,000,000 VND" 
        />
        <CourseCard 
          imageSrc="link-to-your-image.jpg" 
          title="Khóa học B" 
          price="Giá: 2,000,000 VND" 
        />
        <CourseCard 
          imageSrc="link-to-your-image.jpg" 
          title="Khóa học C" 
          price="Giá: 3,000,000 VND" 
        />
      </div>
     </div>

   
  ); 
  };
  
  export default CourseAdmin;


