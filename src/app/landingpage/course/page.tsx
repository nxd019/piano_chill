import CardImg from "@/components/Card/card";

export const Course = () => {
    return(
      <div className="w-full h-full flex  justify-center"
      style={{ 
        backgroundImage: `url('/banner.png')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
        <div>
          <p className="text-3xl text-black ">Khóa học</p>
          <CardImg/>
        </div>
        
      </div>
    ); 
  };
  
  export default Course;


