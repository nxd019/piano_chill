import LogoPianoChill from "../../public/logoPianochill.png"


export const Footer = () => {
    return(
      <div className="w-full h-72 bg-sky-900 mt-8 flex">
          <div className="mt-20 ml-16">
          <img src={LogoPianoChill.src} alt="Logo" width={250} height={250}/>
          </div>
          <div className="text-white mt-24 ml-36">
            <p className="font-bold text-3xl">Công ty cổ phần giải trí Chill Production </p>
            <p>Địa chỉ : Khương đình, Thanh Xuân, Hà Nội</p>
            <p>Số điện thoại: 0987654321</p>
            <p>Email: pianoChill@gmail.com</p>
          </div>
  
      </div>
    ); 
  };
  
  export default Footer;