"use client";

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import { Upload, message, Modal } from 'antd';
import { LoadingOutlined, PlusOutlined, CheckCircleOutlined } from '@ant-design/icons';


const TeacherForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);


  const onSubmit = async (data:any) => {
    console.log(data); 

    try {
      // Gọi API /teacher bằng Axios
      const response = await axios.post('http://localhost:8080/admin/teacher/createTeacher', data);

      setIsModalVisible(true);
    } catch (error) {
      console.error('Error adding teacher:', error);
      alert('Đã xảy ra lỗi khi thêm giảng viên.');
    }
  };

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <p className="text-3xl font-bold mb-8">Thêm giảng viên mới</p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-11/12 p-8 bg-white shadow-lg rounded">
  <div className="w-full flex flex-col space-y-6">
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
      </div>
      <div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Giới tính</label>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input type="radio" id="male" value="male" {...register('gender', { required: true })} className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
              <label htmlFor="male" className="ml-2 block text-sm text-gray-700">Nam</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="female" value="female" {...register('gender', { required: true })} className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300" />
              <label htmlFor="female" className="ml-2 block text-sm text-gray-700">Nữ</label>
            </div>
          </div>
          {errors.gender && <span className="text-red-500">Trường này là bắt buộc</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Địa chỉ</label>
          <input type="text" id="address" {...register('address', { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
          {errors.address && <span className="text-red-500">Trường này là bắt buộc</span>}
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
  </div>
  <div>
    
  </div>
  <div className='ml-4 flex justify-end'>
          <button type="submit" className="w-2/12 bg-sky-900 text-white py-2 px-4 rounded">Thêm giảng viên</button>
        </div>
</form>


<Modal
        title={<div style={{ textAlign: 'center', width: '100%' }}>Thông báo</div>}
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <div className="text-center">
        <CheckCircleOutlined className="text-white bg-sky-900 border-2 border-black rounded-full p-2" style={{ fontSize: '50px' }} />
          <p className='mt-4'>Thêm giảng viên thành công</p>
          <button onClick={() => setIsModalVisible(false)} className="mt-4 bg-sky-900 text-white py-2 px-4 rounded">OK</button>
        </div>
      </Modal>
    </div>
  );
};

export default TeacherForm;
