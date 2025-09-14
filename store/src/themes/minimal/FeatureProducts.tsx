import Product from "./Product";

const FeatureProduct = () => {
  return (
    <div className="w-full p-8  ">
      <div className="w-full">
        <h1 className="font-bold text-4xl text-center py-12 font-roboto ">
          Feature Product
        </h1>
        <div className="flex flex-wrap py-8 gap-4">
          <Product />
          <Product />
          <Product />
          <Product /> <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
