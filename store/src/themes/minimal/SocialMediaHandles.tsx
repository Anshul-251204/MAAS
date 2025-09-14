import { Facebook, Instagram, Twitter } from "lucide-react";

const SocialHanldes = () => {
    return (
      <div className=" px-8 py-4 w-full flex gap-4 justify-center ">
        <div className=" p-4 ">
          <Instagram />
        </div>
        <div className=" p-4 ">
          <Twitter />
        </div>
        <div className=" p-4 ">
          <Facebook />
        </div>
      </div>
    );
  };
  

  export default SocialHanldes