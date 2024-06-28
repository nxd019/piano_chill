import React, { useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Modal, Button, message } from 'antd';
import axios from 'axios';
import { ExclamationCircleOutlined } from '@ant-design/icons';


export const CourseCard = (props: any) => {
    const { id, title, price, onDelete } = props;
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = async (id:any) => {
        try {
            await axios.delete(`http://localhost:8080/admin/course/delete/${id}`); // Adjust the URL as ded
            message.success('Course deleted successfully');
            setIsModalVisible(false);
            onDelete(id); 
        } catch (error) {
            message.error('Failed to delete course');
            console.error('Error deleting course:', error);
        }
        console.log("dấda", id);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="w-7/12 h-36 bg-white shadow-lg rounded-lg overflow-hidden flex mt-4 border border-gray-500">
        <img 
          src="https://media.istockphoto.com/id/1431567498/vi/vec-to/vector-minh-h%E1%BB%8Da-c%C3%A1c-n%E1%BB%91t-nh%E1%BA%A1c-tr%E1%BA%AFng.jpg?s=612x612&w=0&k=20&c=EHyCs3t8lOnBJMwS8pUNVnXnaKgq6v4l76RfsBnfe5I=" 
          alt="Header Image" 
          className="w-1/3 h-full object-cover border border-gray-300" 
        />
        <div className="flex flex-col justify-between flex-grow p-4">
          <div className="flex justify-between items-center">
            <p className="text-base font-medium">{title}</p>
            <div className="flex">
              <button className="text-blue-500 hover:text-blue-700 focus:outline-none mr-2">
                <EditOutlined className="h-6 w-6" />
              </button>
              <button 
                className="text-red-500 hover:text-red-700 focus:outline-none"
                onClick={showModal}
              >
                <DeleteOutlined className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="flex justify-end items-end flex-grow">
            <p className="text-gray-700 text-right">{price}</p>
          </div>
        </div>
            <Modal
        title="Thông báo"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel} className="bg-gray-500 text-white">
            Không
          </Button>,
          <Button key="confirm" onClick={handleOk} className="bg-blue-500 text-white">
            Có
          </Button>,
        ]}
      >
        <div className="flex flex-col items-center">
          <ExclamationCircleOutlined className="text-4xl mb-4" />
          <p className="text-lg">Bạn có muốn xóa khóa học này không?</p>
        </div>
      </Modal>
        </div>
    );
};

export default CourseCard;
