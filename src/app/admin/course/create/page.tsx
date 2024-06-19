"use client";

import { useForm } from 'react-hook-form';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';

const CourseForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = (data: any) => {
    console.log(data);
    // You can handle form submission logic here, including image upload if needed.
  };

  const beforeUpload = (file: File) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must be smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      setLoading(false);
      setImageUrl(info.file.response.url);
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Thêm ảnh</div>
    </div>
  );

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <p className="text-3xl font-bold mb-8">Thêm khóa học mới</p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-9/12  p-8 bg-white shadow-lg rounded-lg flex">
        <div className="flex-1 mr-8">
          <div className="mb-4">
            <label htmlFor="idCourse" className="block text-sm font-medium text-gray-700">ID Course</label>
            <input type="text" id="idCourse" {...register('idCourse', { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
            {errors.idCourse && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" {...register('name', { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
            {errors.name && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
            <textarea id="content" {...register('content', { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"></textarea>
            {errors.content && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
            <input type="text" id="time" {...register('time', { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
            {errors.time && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
            <input type="text" id="price" {...register('price', { required: true })} className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
            {errors.price && <span className="text-red-500">This field is required</span>}
          </div>
          <div className="mt-6">
            <button type="submit" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Thêm khóa học</button>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <label className="block text-sm font-medium text-gray-700 mb-4">Upload Image</label>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
          </Upload>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;
