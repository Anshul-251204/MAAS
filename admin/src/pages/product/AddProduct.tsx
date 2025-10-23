import { fileService } from "@/api/fileServices";
import { storeService } from "@/api/storeServices";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useApi } from "@/hooks/useApi";
import { useMutation } from "@/hooks/useMutation";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleX, CircleXIcon, Plus, Upload, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { json, z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useStoreStore } from "@/store/Store";
import { productService } from "@/api/productServices";

const AddProductSchema = z.object({
  name: z.string().min(2, "Name is required"),
  description: z
    .string()
    .min(2, " Description is required")
    .max(100, "Description can be only 100 letters"),
  price: z.number({
    error: (err) => {
      if (err.code == "invalid_type") {
        return "Price is required";
      }
    },
  }),
  stock: z.number({
    error: (err) => {
      if (err.code == "invalid_type") {
        return "Stock is required";
      }
    },
  }),
});

type AddProductType = z.infer<typeof AddProductSchema>;

type IsHaveType = {
  isHave: boolean;
  value: {
    value: string;
    color?: string;
  }[];
};

const AddProduct: React.FC = () => {
  const [addProductView, setAddProductView] = useState(false);
  const [heroImages, setHeroImages] = useState<string[]>([]);
  const [uploadImages, setUploadImages] = useState<FileType[]>([]);
  const [isHaveColor, setIsHaveColor] = useState<IsHaveType>({
    isHave: false,
    value: [],
  });
  const [isHaveSize, setIsHaveSize] = useState<{
    isHave: boolean;
    value: string[];
  }>({
    isHave: false,
    value: [],
  });
  const [currSize, SetCurrSize] = useState("");
  const [currColor, setCurrColor] = useState({
    value: "",
    color: "",
  });

  const [currKeyValue, setCurrKeyValue] = useState({
    key: "",
    value: "",
  });
  const [isHaveKeyValue, setIsHaveKeyValue] = useState<{
    isHave: boolean;
    value: { key: string; value: string }[];
  }>({ isHave: false, value: [] });
  const [currCategory, setCurrCategory] = useState("");
  const { store } = useStoreStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddProductType>({
    resolver: zodResolver(AddProductSchema),
  });

  const { mutate: uploadFileImages } = useMutation<ApiResponseType<object>>(
    fileService.upload,
    {
      onSuccess: (data) => {
        const currentData = data.data as FileType;
        setUploadImages((p) => [
          ...p,
          { ...currentData, type: "images", id: currentData.key },
        ]);
      },
      onError: (err) => {
        if (err.response.data.message) {
          toast.error(err.response.data.message, {
            position: "top-center",
          });
        }
      },
    },
  );

  const { data: categories, refetch: fetchCategories } = useApi<
    ApiResponseType<CategoryType[]>
  >((store) => storeService.getStoreCategories(store?._id), [], {
    onError: () => {},
    onSuccess: () => {},
    autoFetch: false,
  });

  const { mutate: addProductHandler } = useMutation<ApiResponseType<object>>(
    productService.create,
    {
      onSuccess: (data) => {
        toast.error(data.message, {
          position: "top-center",
        });
      },
      onError: (err) => {
        if (err.response.data.message) {
          toast.error(err.response.data.message, {
            position: "top-center",
          });
        }
      },
    },
  );

  const onSubmit = async (data: AddProductType) => {
    const payload = {
      ...data,
      sizes: isHaveSize.value,
      colors: isHaveColor.value,
      media: uploadImages,
      keyValues: isHaveKeyValue.value,
      storeId: store?._id,
      category: currCategory,
    };
    console.log(payload);
    await addProductHandler(payload);
  };

  const handleOpenProductModel = () => {
    setAddProductView(true);
  };

  const handleCloseProductModel = () => {
    setAddProductView(false);
  };

  const handleImageUpload = useCallback(
    (files: FileList | null, index?: number) => {
      if (!files) return;

      if (files.length > 1) {
        for (let i = 0; i < files.length; i++) {
          const formData = new FormData();
          formData.append("file", files.item(i)!, files.item(i)!.name);
          uploadFileImages(formData);
        }
      }

      if (files.length == 1) {
        const formData = new FormData();
        formData.append("file", files[0], files[0].name);
        uploadFileImages(formData);
      }

      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          if (typeof index === "number") {
            setHeroImages((prev) => {
              const newImages = [...prev];
              newImages[index] = result;
              return newImages;
            });
          } else {
            setHeroImages((prev) => [...prev, result].slice(0, 5));
          }
        };
        reader.readAsDataURL(file);
      });
    },
    [],
  );

  const removeImage = (index: number) => {
    setHeroImages((prev) => prev.filter((_, i) => i !== index));
  };

  const addSize = (value: string): void => {
    if (isHaveSize.value.find((v) => v.toLowerCase() == value.toLowerCase())) {
      toast.warning("Size already exists !", {
        position: "top-center",
      });
      return;
    }

    if (!value) {
      toast.warning("Please enter size !", {
        position: "top-center",
      });
      return;
    }

    setIsHaveSize((p) => ({
      ...p,
      value: [...p.value, value.toUpperCase()],
    }));
    SetCurrSize("");
  };

  const removeSize = (value: string): void => {
    setIsHaveSize((p) => ({
      ...p,
      value: p.value.filter((v) => v.toUpperCase() !== value.toUpperCase()),
    }));
  };

  const addColor = (value: { value: string; color: string }): void => {
    if (!value.color || !value.value) {
      toast.warning("Color & Value are required !", {
        position: "top-center",
      });
      return;
    }
    if (
      isHaveColor.value.find(
        (v) => v?.color?.toLowerCase() == value.color?.toLowerCase(),
      )
    ) {
      toast.warning("Color already exists !", {
        position: "top-center",
      });
      return;
    }
    setIsHaveColor((p) => ({
      ...p,
      value: [...p.value, value],
    }));
    setCurrColor({ color: "", value: "" });
  };

  const removeColor = (color: string): void => {
    setIsHaveColor((p) => ({
      ...p,
      value: p.value.filter((v) => color !== v.color),
    }));
  };

  const addKeyValue = (value: { key: string; value: string }): void => {
    if (!value.key || !value.value) {
      toast.warning("Key & Value are required !", {
        position: "top-center",
      });
      return;
    }
    if (
      isHaveKeyValue.value?.find(
        (kv) => kv.key.toLowerCase() == value.key.toLowerCase(),
      )
    ) {
      toast.warning("Key already exists !", {
        position: "top-center",
      });
      return;
    }
    setIsHaveKeyValue((p) => ({
      ...p,
      value: [...p.value, value],
    }));
    setCurrKeyValue({ key: "", value: "" });
  };

  const removeKeyValue = (key: string): void => {
    setIsHaveKeyValue((p) => ({
      ...p,
      value: p.value.filter((kv) => kv.key.toLowerCase() !== key.toLowerCase()),
    }));
  };

  useEffect(() => {
    if (store?._id) {
      fetchCategories(store);
    }
  }, []);

  return (
    <div className="flex w-full justify-end">
      <Button onClick={handleOpenProductModel}>Add Product</Button>
      <AnimatePresence>
        {addProductView && (
          <motion.div
            initial={{ width: 0, height: 0, opacity: 0 }}
            animate={{
              width: "100%",
              height: "100%",
              opacity: 1,
            }}
            exit={{
              width: "100%",
              height: "100%",
              opacity: 0,
              bottom: 0,
              right: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="bg-background absolute inset-0 left-0 z-40 p-8"
          >
            <div className="flex w-full justify-end">
              <Button onClick={handleCloseProductModel}>
                <CircleX />
              </Button>
            </div>
            <div className="bg-background mt-8 grid gap-3 rounded-2xl border p-8">
              <div className="grid gap-3">
                <Label>Name</Label>
                <Input {...register("name")} placeholder="eg. GlassWood" />
                {errors.name && (
                  <p className="text-xs text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="grid gap-3">
                <Label>Description</Label>
                <Input
                  {...register("description")}
                  placeholder="eg. fucking good this product is made up of reuseable sex toys"
                />
                {errors.description && (
                  <p className="text-xs text-red-500">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <div className="grid gap-3">
                <Label>Category</Label>
                <Select onValueChange={(value) => setCurrCategory(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories?.data?.map((cat) => (
                      <SelectItem key={cat._id} value={cat.name}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="mb-4 block text-base font-medium">
                  Upload 5 hero images (1920×1080) *
                </Label>
                {heroImages.length === 0 ? (
                  <div
                    className="border-primary hover:border-primary/50 flex h-[25vh] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 text-center transition-colors"
                    onDrop={(e) => {
                      e.preventDefault();
                      handleImageUpload(e.dataTransfer.files);
                    }}
                    onDragOver={(e) => e.preventDefault()}
                    onClick={() =>
                      document.getElementById("hero-upload")?.click()
                    }
                  >
                    <Upload className="text-muted-foreground mb-2 h-8 w-8" />
                    <p className="text-muted-foreground text-sm">
                      Drop images here or click to upload
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="relative">
                          {heroImages[i] ? (
                            <div className="border-border relative h-28 w-28 overflow-hidden rounded-lg border md:h-32 md:w-32">
                              <img
                                src={heroImages[i] || "/placeholder.svg"}
                                alt={`Hero ${i + 1}`}
                                className="h-full w-full object-cover"
                              />
                              <button
                                onClick={() => removeImage(i)}
                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90 absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full text-xs"
                              >
                                <X className="text-background h-3 w-3" />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() =>
                                document
                                  .getElementById(`hero-upload-${i}`)
                                  ?.click()
                              }
                              className="border-border hover:border-accent/50 flex h-15 w-15 items-center justify-center rounded-lg border-2 border-dashed transition-colors"
                            >
                              <Plus className="text-muted-foreground h-6 w-6" />
                            </button>
                          )}
                          <input
                            id={`hero-upload-${i}`}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) =>
                              handleImageUpload(e.target.files, i)
                            }
                          />
                        </div>
                      ))}
                    </div>
                    {heroImages.length < 2 && (
                      <p className="text-destructive text-sm">
                        Need 2 images to continue
                      </p>
                    )}
                  </div>
                )}
                <input
                  id="hero-upload"
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={(e) => handleImageUpload(e.target.files)}
                />
              </div>
              <div className="grid gap-3">
                <Label>Price</Label>
                <Input
                  {...register("price", { valueAsNumber: true })}
                  placeholder="999"
                  type="number"
                />
                {errors.price && (
                  <p className="text-xs text-red-500">{errors.price.message}</p>
                )}
              </div>
              <div className="grid gap-3">
                <Label>Stock</Label>
                <Input
                  {...register("stock", { valueAsNumber: true })}
                  placeholder="eg. 100"
                  type="number"
                />
                {errors.stock && (
                  <p className="text-xs text-red-500">{errors.stock.message}</p>
                )}
              </div>
              <div>
                <div className="flex flex-wrap gap-4">
                  <Label htmlFor="is-size">
                    {" "}
                    📐 You'r Product have Sizes ?
                  </Label>
                  <Switch
                    onCheckedChange={(e) => {
                      setIsHaveSize((p) => ({ ...p, isHave: e }));
                    }}
                    id="is-size"
                  />
                </div>
                {isHaveSize.isHave && (
                  <div>
                    <div className="flex flex-col gap-2 py-4">
                      <div className="grid-row-2 grid gap-2">
                        <Label htmlFor="s-label">Enter a Label</Label>
                        <div className="flex gap-4">
                          <Input
                            id="s-label"
                            value={currSize}
                            onChange={(e) => SetCurrSize(e.target.value)}
                            placeholder="eg. x, xs, l "
                          />
                          <Button onClick={() => addSize(currSize)}>Add</Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {isHaveSize.isHave &&
                        isHaveSize.value.map((value) => (
                          <Button
                            onClick={() => {
                              removeSize(value);
                            }}
                            variant={"outline"}
                            key={value}
                          >
                            {value} <CircleXIcon />{" "}
                          </Button>
                        ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <div className="flex gap-4">
                  <Label htmlFor="is-size">🌈 You'r Product have Colors?</Label>
                  <Switch
                    onCheckedChange={(e) => {
                      setIsHaveColor((p) => ({ ...p, isHave: e }));
                    }}
                    id="is-size"
                  />
                </div>
                {isHaveColor.isHave && (
                  <div>
                    <div className="flex flex-col gap-2 py-4">
                      <div className="grid-row-2 grid gap-2">
                        <Label htmlFor="s-label">Enter a Label & Color</Label>
                        <div className="flex gap-4">
                          <Input
                            id="s-label"
                            value={currColor.value}
                            onChange={(e) =>
                              setCurrColor((c) => ({
                                ...c,
                                value: e.target.value,
                              }))
                            }
                            placeholder="eg. Red, Green, Blue "
                          />
                          <Input
                            id="s-label"
                            type="color"
                            value={currColor.color}
                            onChange={(e) =>
                              setCurrColor((c) => ({
                                ...c,
                                color: e.target.value,
                              }))
                            }
                            placeholder="eg. x, xs, l "
                          />
                          <Button onClick={() => addColor(currColor)}>
                            Add
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {isHaveColor.isHave &&
                        isHaveColor.value.map((value) => (
                          <Button
                            onClick={() => {
                              removeColor(value.color!);
                            }}
                            variant={"outline"}
                            key={value.value}
                          >
                            {value.value}{" "}
                            <span
                              style={{
                                backgroundColor: value.color,
                              }}
                              className={`h-5 w-5 rounded-full`}
                            ></span>
                            <CircleXIcon />{" "}
                          </Button>
                        ))}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <div className="flex gap-4">
                  <Label htmlFor="is-size">
                    🚀 You'r Product have Extra key?
                  </Label>
                  <Switch
                    onCheckedChange={(e) => {
                      setIsHaveKeyValue((p) => ({ ...p, isHave: e }));
                    }}
                    id="is-size"
                  />
                </div>
                {isHaveKeyValue.isHave && (
                  <div>
                    <div className="flex flex-col gap-2 py-4">
                      <div className="grid-row-2 grid gap-2">
                        <Label htmlFor="key-label">
                          Enter a key & value pair
                        </Label>
                        <div className="flex gap-4">
                          <Input
                            id="key-label"
                            value={currKeyValue.key}
                            onChange={(e) =>
                              setCurrKeyValue((c) => ({
                                ...c,
                                key: e.target.value,
                              }))
                            }
                            placeholder="eg. Red, Green, Blue "
                          />
                          <Input
                            id="value-label"
                            type="text"
                            value={currKeyValue.value}
                            onChange={(e) =>
                              setCurrKeyValue((c) => ({
                                ...c,
                                value: e.target.value,
                              }))
                            }
                            placeholder="eg. x, xs, l "
                          />
                          <Button onClick={() => addKeyValue(currKeyValue)}>
                            Add
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {isHaveKeyValue.isHave &&
                        isHaveKeyValue.value.map((value) => (
                          <Button
                            onClick={() => {
                              removeKeyValue(value.key!);
                            }}
                            variant={"outline"}
                            key={value.value}
                          >
                            {value.key} : {value.value}
                            <CircleXIcon />{" "}
                          </Button>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex w-full justify-end">
              <Button onClick={handleSubmit(onSubmit)} className="my-4">
                Add
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AddProduct;
