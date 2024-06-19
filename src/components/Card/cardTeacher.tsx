import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export const TeacherCard = (props: any) => {
    const {  name, price } = props;
    return (
        <div className="w-56 h-48 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center mt-4 border border-gray-500">
            <div className="relative w-full flex justify-end p-2">
                <button className="text-blue-500 hover:text-blue-700 focus:outline-none mr-2">
                    <EditOutlined className="h-6 w-6" />
                </button>
                <button className="text-red-500 hover:text-red-700 focus:outline-none">
                    <DeleteOutlined className="h-6 w-6" />
                </button>
            </div>
            <img
                src={"https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-dark-gray-simple-avatar-png-image_3418404.jpg"}
                alt="Header Image"
                className="w-24 h-24 object-cover rounded-full border border-gray-300 mt-2"
            />
            <p className="mt-4 text-center text-lg font-medium">{name}</p>
        </div>
    );
};

export default TeacherCard;
