
import Banner from "@/components/banner";
import CardImg from "@/components/Card/card";

export default function Home() {


  return (
    <div>
      <Banner/>
      <div className="w-full h-72 bg-slate-300 flex flex-col items-center justify-center">
      <div className="w-7/12 h-1/3 bg-sky-300 flex flex-col justify-center items-center">
           <p className="text-sky-950 text-2xl flex flex-col justify-center items-center font-extrabold">Tự đàn được những bài hát </p>
           <p className="text-sky-950 text-2xl flex flex-col justify-center items-center font-extrabold">bạn yêu thích ngay hôm nay! </p>
      </div>
      <div className="w-6/12 h-1/3 flex flex-col justify-center items-center">
        <p className="text-black">Mỗi ngày chỉ cần dành ra một chút thời gian luyện tập, chắc chắn bạn có thể biết </p>
        <p className="text-black">chơi đàn chỉ sau 1 vài tuần. Hãy cùng với chúng mình học chơi đàn từ cơ bản cho</p>
        <p className="text-black"> tới nâng cao nhé. Mọi thứ đều đã có sẵn ở đây!</p>
      </div>
      </div>
      <CardImg/>
  </div>
  );
}
