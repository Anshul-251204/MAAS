type ApiResponseType<T = any> = {
  statusCode: number;
  data: T;
  success: boolean;
  message: string;
  code: string;
};

type ApiResponsePaginated<T = any> = {
  limit: number;
  page: number;
  products: T[];
  total: number;
  totalPages: number;
};

type CategoryType = {
  media: {
    key: string;
    url: string;
  };
  _id: string;
  name: string;
  description: string;
  storeId: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type StoreType = {
  _id: string;
  userId: string;
  domain: string;
  customDomain: string;
  name: string;
  plan: "free" | "basic" | "permium";
  status: "active" | "deactive" | "disable";
  categories?:CategoryType[]
  createdAt: Date;
  updatedAt: Date;
};

type FileType = {
  key: string;
  url: string;
};

type ProductType = {
  name: string;
  description: string;
  media: {
    type: "videos" | "images";
    id: string;
    url: string;
  }[];
  category: string;
  price: number;
  storeId: string | ObjectId;
  stock?: number;
  sizes?: string[];
  colors?: {
    color: string;
    value: string;
  }[];
  keyValues?: {
    key: string;
    value: string;
  }[];
  _id: string;
};
