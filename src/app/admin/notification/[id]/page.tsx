// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Button, Modal } from 'antd';
// import { CheckCircleOutlined } from '@ant-design/icons';

// const NotificationDetail = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const [notification, setNotification] = useState(null);
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   useEffect(() => {
//     if (id) {
//       const fetchNotification = async () => {
//         try {
//           const response = await axios.get(`http://localhost:8080/admin/notification/${id}`);
//           setNotification(response.data);
//         } catch (error) {
//           console.error('Error fetching notification', error);
//         }
//       };
//       fetchNotification();
//     }
//   }, [id]);

//   const deleteNotification = async () => {
//     try {
//       await axios.delete(`http://localhost:8080/admin/notification/${id}`);
//       setIsModalVisible(true);
//     } catch (error) {
//       console.error('Error deleting notification', error);
//     }
//   };

//   if (!notification) return <p>Loading...</p>;

//   return (
//     <div className="w-full h-screen flex flex-col items-center justify-center">
//       <h1 className="text-3xl font-bold mb-4">{notification.name}</h1>
//       <p className="mb-4">{notification.content}</p>
//       <Button onClick={deleteNotification} className="bg-red-500 text-white">Delete</Button>

//       <Modal
//         title={<div style={{ textAlign: 'center', width: '100%' }}>Thông báo</div>}
//         visible={isModalVisible}
//         onOk={() => router.push('/admin/notification')}
//         onCancel={() => router.push('/admin/notification')}
//         footer={null}
//       >
//         <div className="text-center">
//           <CheckCircleOutlined className="text-white bg-sky-900 border-2 border-black rounded-full p-2" style={{ fontSize: '50px' }} />
//           <p className='mt-4'>Xóa thông báo thành công</p>
//           <button onClick={() => router.push('/admin/notification')} className="mt-4 bg-sky-900 text-white py-2 px-4 rounded">OK</button>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default NotificationDetail;
