import { useState } from "react";
import AddProduct from "./AddProduct";
import { Button } from "@/components/ui/button";
import { Edit, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { useMutation } from "@/hooks/useMutation";
import { productService } from "@/api/productServices";
import { useApi } from "@/hooks/useApi";
import { useStoreStore } from "@/store/Store";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";

type LastestProductProp = {
  imageSrc: string;
  price: number;
  stock: number;
  name: string;
  description: string;
};

const LatestProduct: React.FC<LastestProductProp> = ({
  imageSrc,
  price,
  stock,
  description,
  name,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="relative w-[31%] overflow-hidden rounded-md border"
    >
      <div className="flex gap-2">
        <img
          className="h-[220px] w-full object-cover"
          src={imageSrc}
          alt="product-image"
        />
      </div>

      <div className="flex flex-col gap-2 p-4">
        <div className="flex justify-between">
          <h2 className="text-md font-bold">Rs. {price}</h2>
          <div className="w-fit rounded-2xl bg-green-200 p-1 px-4 text-xs font-bold text-green-600">
            Stock : {stock}
          </div>
        </div>
        <h2 className="text-md font-bold"> {name} </h2>
        <p className="text-sm">{description}</p>

        <div className="flex flex-1 flex-col gap-2 rounded-md">
          <div className="flex items-center justify-end gap-2">
            <Button>
              <Edit />
            </Button>

            <Button variant={"outline"}>
              <Plus />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Product: React.FC = () => {
  const { store } = useStoreStore();

  const [query, setQuery] = useState({
    search: "",
  });

  const {
    data: productsData,
    loading: productLoading,
    refetch: fetchProducts,
  } = useApi<ApiResponseType<ApiResponsePaginated<ProductType>>>(
    () => productService.get(`/${store?._id}?search=${query.search}`),
    [query.search],
    {
      debounceMs:700
    }
  );

  console.log(query);

  return (
    <div className="h-full w-full">
      <div className="mb-4 flex items-end justify-between py-4">
        <div className="grid gap-3">
          <Label className="text-lg">Search</Label>
          <div className="flex gap-2">
            <Input
              onChange={(e) => {
                setQuery((p) => ({ ...p, search: e.target.value }));
              }}
              className="w-[400px]"
            />
            <Button onClick={fetchProducts}>Search</Button>
          </div>
        </div>
        <AddProduct />
      </div>
      <AnimatePresence>
        {productLoading ? (
          <div className="flex h-[50%] w-full items-center justify-center">
            <div className="flex items-center gap-4">
              <div className="border-primary h-6 w-6 animate-spin rounded-full border border-l-transparent"></div>
              <span className="animate-pulse text-2xl font-semibold">
                Loading.....
              </span>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="flex flex-wrap gap-6"
          >
            {productsData?.data.products.map((prod) => (
              <LatestProduct
                name={prod?.name}
                description={prod?.description}
                imageSrc={prod.media[0]?.url}
                price={prod?.price}
                stock={Number(prod?.stock)}
                key={prod?._id}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Product;
