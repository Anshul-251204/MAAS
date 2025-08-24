import React, { useCallback, useState } from "react";
// import { CustomTheme, ThemeBox } from "./ThemeBox";
// import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Info, Plus, Upload, X } from "lucide-react";
import {
  TooltipContent,
  Tooltip,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ThemeAndLook: React.FC = () => {
  const [logo, setLogo] = useState<string>("");
  const [heroImages, setHeroImages] = useState<string[]>([]);

  const handleLogoUpload = useCallback((files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setLogo(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

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
    <div className="flex h-full w-full flex-col gap-4">
      {/* upload store logo  */}
      <div>
        <Label className="mb-4 flex items-center gap-3 text-base font-medium">
          Store logo (PNG 512×512 max)*
          <span>
            <Tooltip>
              <TooltipTrigger>
                <Info size={"1rem"} className="text-foreground/50" />
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  Please upload a logo in png format or <br />
                  upload a jpg white transparent background
                </p>
              </TooltipContent>
            </Tooltip>
          </span>
        </Label>
        <div className="flex items-center gap-4">
          <div
            className="border-primary hover:border-primary/50 flex h-16 w-16 cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 border-dashed transition-colors"
            onClick={() => document.getElementById("logo-upload")?.click()}
          >
            {logo ? (
              <img
                src={logo || "/placeholder.svg"}
                alt="Logo"
                className="h-full w-full object-cover"
              />
            ) : (
              <Upload className="text-muted-foreground h-6 w-6" />
            )}
          </div>
          <div>
            <p className="text-muted-foreground text-sm">
              Click to upload your logo
            </p>
            {logo && (
              <button
                onClick={() => setLogo("")}
                className="text-destructive mt-1 text-xs hover:underline"
              >
                Remove logo
              </button>
            )}
          </div>
        </div>
        <input
          id="logo-upload"
          type="file"
          accept="image/png,image/jpg,image/jpge"
          className="hidden"
          onChange={(e) => handleLogoUpload(e.target.files)}
        />
      </div>

      {/* upload slider i mages */}
      <div>
        <Label className="mb-4 block text-base font-medium">
          Upload 5 hero images (1920×1080) *
        </Label>
        {heroImages.length === 0 ? (
          <div
            className="border-primary hover:border-primary/50 flex h-[25vh]  cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 text-center transition-colors"
            onDrop={(e) => {
              e.preventDefault();
              handleImageUpload(e.dataTransfer.files);
            }}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => document.getElementById("hero-upload")?.click()}
          >
            <Upload className="text-muted-foreground mb-2 h-8 w-8" />
            <p className="text-muted-foreground text-sm">
              Drop images here or click to upload
            </p>
          </div>
        ) : (
          <div className="space-y-4 ">
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="relative">
                  {heroImages[i] ? (
                    <div className="border-border relative h-28 w-28 md:h-32 md:w-32 overflow-hidden rounded-lg border">
                      <img
                        src={heroImages[i] || "/placeholder.svg"}
                        alt={`Hero ${i + 1}`}
                        className="h-full w-full object-cover"
                      />
                      <button
                        onClick={() => removeImage(i)}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90 absolute top-3 right-3 flex h-5 w-5 items-center justify-center rounded-full text-xs"
                      >
                        <X className="h-3 w-3 text-background"  />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() =>
                        document.getElementById(`hero-upload-${i}`)?.click()
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
                    onChange={(e) => handleImageUpload(e.target.files, i)}
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

        {/* store tagline  */}
      <div>
        <Label className="mb-4 flex items-center gap-3 text-base font-medium">
          Store tagline
        </Label>

        <Input />
      </div>

        {/* store theme  */}
      <div>
        <Label className="mb-4 flex items-center gap-3 text-base font-medium">
          Theme
        </Label>

        <div className="flex space-x-4 overflow-x-auto rounded-lg border p-4">
          <Button className="bg-red-500 hover:bg-red-500">Accent</Button>
          <Button className="bg-blue-500 hover:bg-blue-500">Accent</Button>
          <Button className="bg-yellow-500 hover:bg-yellow-500">Accent</Button>
          <Button className="bg-purple-500 hover:bg-purple-500">Accent</Button>
          <Button className="bg-pink-500 hover:bg-pink-500">Accent</Button>
          <Button variant={"outline"}>Custom</Button>
        </div>
      </div>
    </div>
  );
};

export default ThemeAndLook;
