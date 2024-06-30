'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import LogoPianoChill from "../../public/logoPianochill.png"
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { SearchOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';


export const menuItemsData = [
    {
      title: "Thông tin",
      url: "/student/information",
    },
    {
      title: "Nạp Tiền",
      url: "/booK",
    },
    {
      title: "Liên Hệ",
      url: "/contact",
    },
]

export const HeaderStudent= () => {
  return(
    <div className='fixed top-0 left-0 w-full z-50 bg-sky-900'>
     <div className='flex justify-around w-full h-28 text-black items-center'>
     <div className='font-bold'>
        <img src={LogoPianoChill.src} alt="Logo" width={125} height={125}/>
     </div>
     <Input size="large" placeholder="Tìm kiếm ...." className='w-4/12 rounded-3xl' prefix={<SearchOutlined style={{ fontSize: '16px'}} />} />
     <div className='flex gap-12 text-white text-bold'>
     {menuItemsData.map((menuItemsData => (
        <Link href={menuItemsData.url} key={menuItemsData.title} >{menuItemsData.title}</Link>
      )))}
       <Avatar size={34} icon={<UserOutlined />}  className="mr-8"/>
     </div>
    </div>
    </div>
  ); 
};

export default HeaderStudent;