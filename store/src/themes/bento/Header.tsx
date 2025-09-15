import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export const Header = () => {
    return (
      <header className="w-full px-8 py-4  shadow-lg flex justify-between">
        <div className="flex gap-4 items-center">
          <img
            className="w-12 h-12 rounded-full"
            src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <h1 className="font-bold text-2xl font-roboto ">Starbucks</h1>
        </div>
  
        <div className="flex gap-4">
         
          <Input placeholder="search..."/>
          <Button variant={"default"} >Search</Button>
        </div>
      </header>
    );
  };

  export default Header;