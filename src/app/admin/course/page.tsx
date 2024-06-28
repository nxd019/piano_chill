"use client";

import { useState, useEffect } from 'react';
import { Button } from 'antd';
import axios from 'axios';
import CourseCard from "@/components/Card/coursecard";
import Link from 'next/link';
import { Input, Space } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { SearchOutlined } from '@ant-design/icons';

interface Course {
  id: string;
  name: string;
  price: number;
  description: string;
}

const CourseAdmin = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/admin/course');
        setCourses(response.data);
        console.log("data", response)
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);



  const handleDeleteCourse = ( id: any) => {
    console.log("đáasd", id)
  };

  return (
    <div className="w-screen h-screen bg-white">
      <div className='w-full flex justify-center'>
      <Input size="large" placeholder="Tìm kiếm ...." className='w-4/12 rounded-3xl h-12 border-2 border-gray-800 mt-10' prefix={<SearchOutlined style={{ fontSize: '16px'}} />} />
      </div>
      <div className="flex flex-col h-full">
  <div className="flex justify-end items-start w-full">
    <a href="/admin/course/create">
      <Button className="mr-4 bg-sky-900 text-white h-12">Thêm khóa học</Button>
    </a>
  </div>
  <div className="w-full flex flex-col items-center">
    {courses.map((course) => (
      <CourseCard
        key={course.id}
        title={course.name}
        price={`Giá: ${course.price} VND`}
        onDelete={handleDeleteCourse}
      />
    ))}
  </div>
</div>

     
    </div>
  );
};

export default CourseAdmin;
