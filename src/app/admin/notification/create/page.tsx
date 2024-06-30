"use client";

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import { Modal } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const NotificationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const onSubmit = async (data: any) => {
    console.log(data);

    try {
      // Gọi API /notification bằng Axios
      const response = await axios.post('http://localhost:8080/admin/notification/create', data);

      setIsModalVisible(true);
    } catch (error) {
      console.error('Error adding notification:', error);
      alert('Đã xảy ra lỗi khi thêm thông báo.');
    }
  };

  return (
    <div className='w-full h-screen flex flex-col items-start justify-start mt-16 ml-16'>
      <p className="text-3xl font-bold mb-8">Thêm thông báo mới</p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-11/12 p-8 bg-white shadow-lg rounded">
        <div className="w-full flex flex-col space-y-6">
          <div className="mb-4 ">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Tiêu đề</label>
            <input type="text" id="name" {...register('name', { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
            {errors.name && <span className="text-red-500">Trường này là bắt buộc</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="receceiver" className="block text-sm font-medium text-gray-700">Người nhận</label>
            <input type="text" id="receceiver" {...register('receceiver', { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
            {errors.receceiver && <span className="text-red-500">Trường này là bắt buộc</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">Nội dung</label>
            <textarea id="content" {...register('content', { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
            {errors.content && <span className="text-red-500">Trường này là bắt buộc</span>}
          </div>
        </div>
        <div className='ml-4 flex justify-end'>          <button type="submit" className="w-2/12 bg-sky-900 text-white py-2 px-4 rounded mt-7">Gửi</button>
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
          <p className='mt-4'>Thêm thông báo thành công</p>
          <button onClick={() => setIsModalVisible(false)} className="mt-4 bg-sky-900 text-white py-2 px-4 rounded">OK</button>
        </div>
      </Modal>
    </div>
  );
};

export default NotificationForm;
