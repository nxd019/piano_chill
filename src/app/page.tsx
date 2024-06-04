import { Button } from "antd";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-full h-screen flex flex-col items-center justify-center"
    style={{ 
      backgroundImage: `url('/banner.png')`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <div className="w-full h-full flex  justify-center">
      <div className="h-full w-1/3  flex flex-col items-start justify-center">
        <p className="text-gray-600 text-xl">XIN CHÀO,</p>
        <p className="text-7xl text-cyan-500 mt-2">Khóa học cảm âm vừa ra mắt!!</p>
        <div className="flex justify-start w-full mt-10">
        <Button type="primary" ghost className="px-10 py-6 rounded-full text-lg font-bold hover:bg-cyan-600 flex justify-center items-center mr-8">
          Xem sách
        </Button>
        <Button type="primary" ghost className="px-10 py-6 rounded-full text-lg font-bold hover:bg-cyan-600 flex justify-center items-center">
          Xem khóa học
        </Button>
       

        </div>

      </div>
      <div className="h-full w-1/3 bg-red-400">

      </div>
      </div>
    </div>
    </div>
  );
}
