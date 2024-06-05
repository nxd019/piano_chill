import { Button } from "antd";
import Image from "next/image";
import imgBanner from "../../public/Img/ImgBanner.jpg"
import Banner from "@/components/banner";
import { Card  } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import card1 from "../../public/Card/CAO-THU-1-768x432.jpg"
import card2 from "../../public/Card/CAO-THU-2-768x432.jpg"
import card3 from "../../public/Card/aaaaa-768x432.jpg"

export default function Home() {

const cardData = [
  {
    title: 'Khóa học "Cao thủ Piano đệm hát – Level 1"',
    image: 'https://chillproduction.vn/wp-content/uploads/2023/01/CAO-THU-1-768x432.jpg',
    price: '$400'
  },
  {
    title: 'Khóa học "Cao thủ Piano đệm hát – Level 2"',
    image: 'https://chillproduction.vn/wp-content/uploads/2023/01/CAO-THU-2-768x432.jpg',
    price: '$400'
  },
  {
    title: 'Khóa Guitar đệm hát dành cho người mới bắt đầu',
    image: 'https://chillproduction.vn/wp-content/uploads/2023/02/aaaaa-768x432.jpg',
    price: '$400'
  },
  {
    title: 'Khóa học "Cao thủ Piano đệm hát – Level 1"',
    image: 'https://chillproduction.vn/wp-content/uploads/2023/01/CAO-THU-1-768x432.jpg',
    price: '$400'
  },
  {
    title: 'Khóa học "Cao thủ Piano đệm hát – Level 2"',
    image: 'https://chillproduction.vn/wp-content/uploads/2023/01/CAO-THU-2-768x432.jpg',
    price: '$400'
  },
  {
    title: 'Khóa Guitar đệm hát dành cho người mới bắt đầu',
    image: 'https://chillproduction.vn/wp-content/uploads/2023/02/aaaaa-768x432.jpg',
    price: '$400'
  },
];

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
    <div className='flex flex-col items-center justify-center mt-16'>
      <div className='w-11/12 h-full bg-white grid grid-cols-3 grid-rows-2 gap-8'>
        {cardData.map((card, index) => (
          <Card
           key={index}
           style={{ width: '100%', height: 'auto' }}
           hoverable
           cover={<img alt={`card-${index}`} src={card.image} />}
      >
          <div className='flex justify-center text-2xl'>{card.title}</div>
          <div className="w-full mt-4 flex justify-end">
          <p className="text-2xl mr-10">{card.price}</p>
          <Button type="primary" key="add-to-cart">
            <ShoppingCartOutlined /> Thêm vào giỏ hàng
          </Button>
           </div>
         </Card>
       ))}
      </div>
      <Button type="primary" ghost className="px-10 py-6 rounded-full text-lg font-bold hover:bg-cyan-600 flex justify-center items-center mt-10">
              Xem khóa học
      </Button>
    </div>

        
  </div>
  );
}
