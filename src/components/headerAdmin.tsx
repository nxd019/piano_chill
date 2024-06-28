import LogoPianoChill from "../../public/logoPianochill.png"
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';


export const HeaderAdmin = () => {
    return(
        <div className="w-full h-26 bg-sky-900">
            <div className="p-4 text-xl font-bold border-b bg-sky-900 flex justify-between">
        <img src={LogoPianoChill.src} alt="Logo" width={125} height={125} />
        <div>
        <Avatar size={64} icon={<UserOutlined />}  className="mr-8"/>
        
        </div>
      </div>

        </div>
     
    ); 
  };
  
  export default HeaderAdmin;