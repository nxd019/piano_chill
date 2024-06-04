'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import LogoPianoChill from "../../public/logoPianochill.png"
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';


export const menuItemsData = [
    {
      title: "Khóa học",
      url: "/course",
    },
    {
      title: "Sách",
      url: "/booK",
    },
    {
      title: "Chill News",
      url: "/chillNews",
    },
    {
      title: "Liên Hệ",
      url: "/contact",
    },
    {
        title: "Tài khoản",
        url: "/account",
      },
]
const { Search } = Input;
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
export const Header = () => {
  const [current, setCurrent] = useState('');
  return(
    <div className='flex justify-around w-full h-28 bg-white text-black items-center bg-sky-900'>
     <div className='font-bold'>
        <img src={LogoPianoChill.src} alt="Logo" width={125} height={125}/>
     </div>
     <Search placeholder="input search text" onSearch={onSearch} enterButton  style={{ width: 500 }}/>
     
    
     
     <div className='flex gap-12 text-white text-bold'>
     {menuItemsData.map((menuItemsData => (
        <Link href={menuItemsData.url} key={menuItemsData.title} >{menuItemsData.title}</Link>
      )))}
     </div>
    </div>
  ); 
};

export default Header;