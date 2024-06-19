import CardImg from "@/components/Card/card";
import TeacherCard from "@/components/Card/cardTeacher";
import { Button } from "antd";

export const Teacher = () => {
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div className="text-2xl text-bold h-28 flex justify-between w-full px-16">
                <p className="mt-14">Quản lý giảng viên</p>
                <Button className="mt-14">Thêm giảng viên</Button>
            </div>
            <div className="w-9/12 h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4">
                <TeacherCard  name="Nguyễn Văn A" />
                <TeacherCard  name="Nguyễn Văn A" />
                <TeacherCard  name="Nguyễn Văn A" />
                <TeacherCard  name="Nguyễn Văn A" />
                <TeacherCard  name="Nguyễn Văn A" />
                <TeacherCard  name="Nguyễn Văn A" />
                <TeacherCard  name="Nguyễn Văn A" />
                <TeacherCard  name="Nguyễn Văn A" />
            </div>
        </div>
    );
};

export default Teacher;
