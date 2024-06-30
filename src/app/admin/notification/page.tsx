"use client";

import { useState, useEffect } from 'react';
import { Button } from 'antd';
import axios from 'axios';
import CourseCard from "@/components/Card/coursecard";
import Link from 'next/link';
import { Input, Space } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import { SearchOutlined } from '@ant-design/icons';
import NotificationCard from '@/components/Card/cardNotification';

interface Notification {
  id: string;
  name: string;
  content: string;
}


const Notification = () => {

  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:8080/admin/notification');
        setNotifications(response.data);
      } catch (error) {
        console.error("Error fetching notifications", error);
      }
    };
     fetchNotifications();
  }, []);

  return (
    <div className="w-screen h-screen bg-white">
      <div className='w-full flex justify-center'>
      <Input size="large" placeholder="Tìm kiếm ...." className='w-4/12 rounded-3xl h-12 border-2 border-gray-800 mt-10' prefix={<SearchOutlined style={{ fontSize: '16px'}} />} />
      </div>
      <div className="flex flex-col h-full">
  <div className="flex justify-end items-start w-full">
    <a href="/admin/notification/create">
      <Button className="mr-4 bg-sky-900 text-white h-12">Thêm thông báo</Button>
    </a>
  </div>
  <div className="w-full flex flex-col items-center">
     {notifications.map(notification => (
             <NotificationCard key={notification.id} name={notification.name} content={notification.content} />
          ))}
   
  </div>
</div>

     
    </div>
  );
};

export default Notification;
