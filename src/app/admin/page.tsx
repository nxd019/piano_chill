import Link from "next/link";
import LogoPianoChill from "../../../public/logoPianochill.png"
import { Component } from "react";

export default function AdminHome() {
    return(
      <div className="h-screen bg-sky-900 text-white w-64">
      <div className="p-4 text-xl font-bold border-b bg-sky-900">
      <img src={LogoPianoChill.src} alt="Logo" width={125} height={125}/>
      </div>
      <nav className="mt-4">
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/admin/course">Quản lý khóa học</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/users">Quản lý giảng viên</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/settings">Quản lý thông báo</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/settings">Quản lý bình luận</Link>
          </li>
        </ul>
      </nav>
    </div>
    ); 
  };
  
  