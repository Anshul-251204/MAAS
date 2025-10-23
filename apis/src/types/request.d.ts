type AddCategoryRequestType = {
  name: string;
  description: string;
  media: {
    key: string;
    url: string;
  };
  storeId?: string;
};
