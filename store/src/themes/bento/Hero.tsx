const Hero = () => {
    return (
      <div className="w-full h-[90vh] p-8 flex gap-4">
        <div className=" flex-1 bg-green-500 rounded-4xl overflow-hidden shadow-xl ">
          <img
            className="w-full h-full object-cover  "
            src="https://plus.unsplash.com/premium_photo-1678074057896-eee996d4a23e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
  
        <div className="flex-1 flex flex-col gap-4 ">
          <div className="w-full bg-amber-500 h-[40%] rounded-4xl overflow-hidden  ">
            <img
              className="w-full h-full object-cover "
              src="https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-full bg-cyan-400 rounded-4xl overflow-hidden  h-[60%] ">
            <img
              className="w-full h-full object-cover "
              src="https://plus.unsplash.com/premium_photo-1688125414593-391cf90f3103?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
  
        <div className="flex-1 flex flex-col gap-4 0">
          <div className="w-full bg-blue-500 h-[60%] rounded-4xl overflow-hidden ">
            <img
              className="w-full h-full object-cover "
              src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-full bg-red-500 h-[40%] rounded-4xl overflow-hidden ">
            <img
              className="w-full h-full object-cover "
              src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };

  export default Hero