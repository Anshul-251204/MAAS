type ApiResponseType<T = any> = {
  statusCode: number;
  data: T;
  success: boolean;
  message: string;
  code: string;
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
  createdAt: Date;
  updatedAt: Date;
};

type FileType = {
  key: string;
  url: string;
};
