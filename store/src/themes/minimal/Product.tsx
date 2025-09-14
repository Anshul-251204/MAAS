const Product = () => {
  return (
    <div className="w-[300px] h-[350px] flex flex-col gap-2  rounded-2xl overflow-hidden shadow-2xl  ">
      <img
        className="w-full object-cover "
        src="https://images.unsplash.com/photo-1512212621149-107ffe572d2f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="flex flex-col gap-2 px-4">
        <h1 className="text-md font-bold">Brown Sofa</h1>
        <p className="text-sm font-medium ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quis
          voluptas iusto recusandae tempora? ...
        </p>
        <p className="text-md font-bold">RS. 1000</p>
      </div>
    </div>
  );
};

export default Product;
