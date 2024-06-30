import React, { useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Modal, Button, message } from 'antd';
import axios from 'axios';
import { ExclamationCircleOutlined } from '@ant-design/icons';


export const NotificationCard = (props: any) => {
    const { id, name, content, onDelete } = props;
    
    return (
        <div className="w-7/12 h-36 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col mt-4 border border-gray-500">
  <div className="flex justify-between p-4">
    <p className='font-bold text-xl'>{name}</p>
    <button className="text-red-500 hover:text-red-700 focus:outline-none">
                    <DeleteOutlined className="h-6 w-6" />
                </button>
  </div>
  <div className="px-4">
    <p>{content}</p>
  </div>
</div>

        
    );
};

export default NotificationCard;
