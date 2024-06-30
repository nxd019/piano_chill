"use client";

import {  useEffect, useState } from "react";
import axios from "axios";
import CardImg from "@/components/Card/card";
import TeacherCard from "@/components/Card/cardTeacher";
import { Button, Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';

interface Teacher {
    id: number;
    lecturerName: string;
    // Thêm các thuộc tính khác nếu có
}

export const Teacher = () => {
    const [teachers, setTeachers] = useState<Teacher[]>([]);

    useEffect(() => {
        
        const fetchTeachers = async () => {
            try {
                const response = await axios.get<Teacher[]>("http://localhost:8080/admin/teacher");
                setTeachers(response.data); 
            } catch (error) {
                console.error("Error fetching teachers:", error);
            }
        };

        fetchTeachers();
    }, []);

    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className='w-full flex justify-center'>
                <Input 
                    size="large" 
                    placeholder="Tìm kiếm ...." 
                    className='w-4/12 rounded-3xl h-12 border-2 border-gray-800 mt-10' 
                    prefix={<SearchOutlined style={{ fontSize: '16px' }} />} 
                />
            </div>
            <div className="text-2xl text-bold h-28 flex justify-end w-full px-16">
                <a href="/admin/teacher/createTeacher">
                    <Button className="mr-4 bg-sky-900 text-white h-12">Thêm giảng viên</Button>
                </a>
            </div>
            <div className="w-7/12 h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4">
                {teachers.map((teacher) => (
                    <TeacherCard key={teacher.id} name={teacher.lecturerName} />
                ))}
            </div>
        </div>
    );
};

export default Teacher;