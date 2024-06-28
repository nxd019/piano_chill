"use client";

import React from 'react';
import { useForm } from 'react-hook-form';

const Account = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data:any) => console.log(data);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center"
      style={{ 
        backgroundImage: `url('/banner.png')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
      <div className="bg-white p-8 rounded shadow-md w-11/12 mt-8 rounded-xl h-10/12 border border-gray-300 border-2">
        <div className='w-full flex justify-center'>
          <p className='font-bold text-2xl'>Thông tin cá nhân</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='mt-8'>
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                Họ Tên
              </label>
              <input
                {...register('fullName', { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                type="text"
                placeholder="Họ Tên"
              />
              {errors.fullName && <span className="text-red-500 text-xs italic">Họ tên là bắt buộc.</span>}
            </div>
            <div className="w-1/2 ml-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                Địa Chỉ
              </label>
              <input
                {...register('address', { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                placeholder="Địa Chỉ"
              />
              {errors.address && <span className="text-red-500 text-xs italic">Địa chỉ là bắt buộc.</span>}
            </div>
          </div>
          
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="displayName">
                Tên Hiển Thị
              </label>
              <input
                {...register('displayName', { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="displayName"
                type="text"
                placeholder="Tên Hiển Thị"
              />
              {errors.displayName && <span className="text-red-500 text-xs italic">Tên hiển thị là bắt buộc.</span>}
            </div>
            <div className="w-1/2 ml-2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                Số Điện Thoại
              </label>
              <input
                {...register('phoneNumber', { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phoneNumber"
                type="tel"
                placeholder="Số Điện Thoại"
              />
              {errors.phoneNumber && <span className="text-red-500 text-xs italic">Số điện thoại là bắt buộc.</span>}
            </div>
          </div>
          
          <div className="mb-4 flex justify-center">
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                {...register('email', { required: true })}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
              {errors.email && <span className="text-red-500 text-xs italic">Email là bắt buộc.</span>}
            </div>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Account;
