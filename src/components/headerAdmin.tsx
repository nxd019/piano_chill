import LogoPianoChill from "../../public/logoPianochill.png"


export const HeaderAdmin = () => {
    return(
        <div className="w-full h-26 bg-sky-900">
            <div className="p-4 text-xl font-bold border-b bg-sky-900">
        <img src={LogoPianoChill.src} alt="Logo" width={125} height={125} />
      </div>

        </div>
     
    ); 
  };
  
  export default HeaderAdmin;