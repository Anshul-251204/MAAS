const Hero = () => {
    return (
      <div className="w-full h-[70vh] my-[10vh]  flex items-center justify-center px-8 ">
        <div className="w-full h-full rounded-2xl overflow-hidden relative  ">
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
              "https://plus.unsplash.com/premium_photo-1661766077694-6e3750b0fb97?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </div>
      </div>
    );
  }

  export default Hero;