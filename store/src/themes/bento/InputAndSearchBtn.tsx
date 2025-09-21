"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const InputAndSearchBtn = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  return (
    <div className="flex gap-2">
      <Input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        placeholder="search..."
      />
      <Button
        variant={"default"}
        onClick={() => {
          router.push(`/product/${query}`);
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default InputAndSearchBtn;
