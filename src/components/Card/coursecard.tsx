import { EditOutlined, DeleteOutlined } from '@ant-design/icons';


export const CourseCard  = (props: any) => {
    const {  imageSrc, title, price  } = props;
    return(
        <div className="w-7/12 h-36 bg-white shadow-lg rounded-lg overflow-hidden flex mt-4  border border-gray-500">
      <img 
        src={imageSrc} 
        alt="Header Image" 
        className="w-1/3 h-full object-cover border border-gray-300" 
      />
      <div className="flex flex-col justify-between flex-grow p-4">
        <p className="ml-6 mt-8">{title}</p>
        <div className="flex flex-col justify-end flex-grow">
          <div className="flex justify-end">
            <button className="text-blue-500 hover:text-blue-700 focus:outline-none mr-2">
              <EditOutlined className="h-6 w-6" />
            </button>
            <button className="text-red-500 hover:text-red-700 focus:outline-none">
              <DeleteOutlined className="h-6 w-6" />
            </button>
          </div>
          <p className="text-gray-700 text-right mt-2">{price}</p>
        </div>
      </div>
    </div>
     
    ); 
  };
  
  export default CourseCard ;


