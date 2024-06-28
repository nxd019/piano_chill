import { Button } from "antd";
import Image from "next/image";
import imgBanner from "../../public/Img/ImgBanner.jpg"
import Banner from "@/components/banner";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Card  } from 'antd';


export const CardImg = () => {


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
          image: 'https://chillproduction.vn/wp-content/uploads/2023/01/CAO-THU-2-768x432.jpg', // Replace with your image path
          title: 'Khóa học “Tân thủ Piano đệm hát”',
          price: '359.000 đ',
          originalPrice: '399.000 đ',
          students: 794,
          duration: '2 giờ 3 phút',
        },
      ];


    return(
      <div className="w-full h-full bg-white">
      <div className='flex flex-col items-center justify-center mt-16'>
        <div className='w-11/12 h-full bg-white grid grid-cols-2 gap-8'>
          {cardData.map((card, index) => (
            <Card
              key={index}
              style={{ width: '100%', height: 'auto' }}
              hoverable
              cover={<img alt={`card-${index}`} src={card.image} />}
            >
              <div className='flex justify-between text-xl'>
                <div>{card.title}</div>
                <div className="text-green-600">Sơ cấp</div>
              </div>
              <div className='mt-2 text-gray-500'>
                {card.students} học viên • {card.duration}
              </div>
              <div className='w-full mt-4 flex justify-between items-center'>
                <div>
                  <span className='text-gray-500 line-through'>{card.originalPrice}</span>
                  <span className='text-2xl ml-2'>{card.price}</span>
                </div>
                <Button
                type="primary"
                style={{ backgroundColor: 'white', borderColor: 'green', color: 'green', width: "150px" }}
              >
                Mua
              </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
    ); 
  };
  
  export default CardImg;