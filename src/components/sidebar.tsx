import Link from "next/link";
import LogoPianoChill from "../../public/logoPianochill.png";

export const Sidebar = () => {
    return(
      <div className="h-screen bg-sky-900 text-white w-64 flex-shrink-0">
      
      <nav className="mt-4">
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/admin/course">Quản lý khóa học</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/admin/teacher">Quản lý giảng viên</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/admin/notification">Quản lý thông báo</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/settings">Quản lý bình luận</Link>
          </li>
        </ul>
      </nav>
    </div>
    ); 
  };
  
  export default Sidebar;