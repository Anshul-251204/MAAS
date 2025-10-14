const Product = () => {
  return (
    <div className="rounded-3xl overflow-hidden group relative flex justify-center items-center transition-all duration-400 ">
      <h1 className=" text-3xl font-bold font-roboto absolute bg-accent mix-blend-color-dodge p-4 py-2 rounded-xl group-hover:block hidden transition-all duration-400 ">
        Sofa
      </h1>
      <img
        className="w-full h-full"
        src="https://plus.unsplash.com/premium_photo-1681980019667-96baeb36fc33?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
  );
};

export default Product;
