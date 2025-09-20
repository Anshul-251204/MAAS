import Product from "./Product";

const FeatureProduct = () => {
  return (
    <div className="w-full p-4 md:p-8  ">
      <div className="w-full">
        <h1 className="font-bold text-4xl text-center py-12 font-roboto ">
          Feature Product
        </h1>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 sm:p-4 md:p-6 lg:p-8">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
         
         
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
