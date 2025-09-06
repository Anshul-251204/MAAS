import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleX, Plus, Upload, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useCallback, useState } from "react";

const AddProduct: React.FC = () => {
  const [addProductView, setAddProductView] = useState(false);
  const [heroImages, setHeroImages] = useState<string[]>([]);

  const handleOpenProductModel = () => {
    setAddProductView(true);
  };

  const handleCloseProductModel = () => {
    setAddProductView(false);
  };

  const handleImageUpload = useCallback(
    (files: FileList | null, index?: number) => {
      if (!files) return;

      Array.from(files).forEach((file, i) => {
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
                <Input placeholder="eg. GlassWood" />
              </div>
              <div className="grid gap-3">
                <Label>Description</Label>
                <Input placeholder="eg. fucking good this product is made up of reuseable sex toys" />
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
                    {heroImages.length < 5 && (
                      <p className="text-destructive text-sm">
                        Need 5 images to continue
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
                <Input placeholder="eg. 999" type="number" />
              </div>
              <div className="grid gap-3">
                <Label>Stock</Label>
                <Input placeholder="eg. 100" type="number" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AddProduct