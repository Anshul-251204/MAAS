const Hero = () => {
  return (
    <div className="w-full h-[90vh] bg-red-400  flex items-center justify-center  ">
      <div className="w-full h-full  relative  ">
        <div className=" absolute text-white bottom-[20%] left-4 ">
          <h1 className="text-5xl font-bold">Discover new things</h1>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,{" "}
            <br />
            molestiae officiis magnam animi non consequatur nulla, velit,
          </p>
        </div>
        <img
          className="w-full h-full object-cover"
          src={
            "https://images.unsplash.com/photo-1584824486516-0555a07fc511?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </div>
    </div>
  );
};

export default Hero;
