"use client";

import { useForm } from 'react-hook-form';
import { useState } from 'react';

const TeacherForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data: any) => {
    console.log(data);
    // Xử lý logic khi submit form ở đây
  };

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <p className="text-3xl font-bold mb-8">Thêm giảng viên mới</p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-11/12 max-w-3xl p-8 bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Tên đăng nhập</label>
              <input type="text" id="username" {...register('username', { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
              {errors.username && <span className="text-red-500">Trường này là bắt buộc</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mật khẩu</label>
              <input type="password" id="password" {...register('password', { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
              {errors.password && <span className="text-red-500">Trường này là bắt buộc</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">Chức vụ</label>
              <input type="text" id="role" {...register('role', { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
              {errors.role && <span className="text-red-500">Trường này là bắt buộc</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="lecturerId" className="block text-sm font-medium text-gray-700">Mã giảng viên</label>
              <input type="text" id="lecturerId" {...register('lecturerId', { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
              {errors.lecturerId && <span className="text-red-500">Trường này là bắt buộc</span>}
            </div>
          </div>
          <div>
            <div className="mb-4">
              <label htmlFor="lecturerName" className="block text-sm font-medium text-gray-700">Tên giảng viên</label>
              <input type="text" id="lecturerName" {...register('lecturerName', { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
              {errors.lecturerName && <span className="text-red-500">Trường này là bắt buộc</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Ngày sinh</label>
              <input type="date" id="dob" {...register('dob', { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
              {errors.dob && <span className="text-red-500">Trường này là bắt buộc</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Giới tính</label>
              <select id="gender" {...register('gender', { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50">
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="other">Khác</option>
              </select>
              {errors.gender && <span className="text-red-500">Trường này là bắt buộc</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" {...register('email', { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
              {errors.email && <span className="text-red-500">Trường này là bắt buộc</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Số điện thoại</label>
              <input type="text" id="phone" {...register('phone', { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
              {errors.phone && <span className="text-red-500">Trường này là bắt buộc</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Lương</label>
              <input type="text" id="salary" {...register('salary', { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
              {errors.salary && <span className="text-red-500">Trường này là bắt buộc</span>}
            </div>
          </div>
        </div>
        <div className='ml-4'>
          <button type="submit" className="w-full bg-sky-900 text-white py-2 px-4 rounded hover:bg-blue-600">Thêm giảng viên</button>
        </div>
      </form>
    </div>
  );
};

export default TeacherForm;
