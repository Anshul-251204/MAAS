const ENDPOINT = {
  auth: {
    signUp: "/auth/signup",
    singin: "/auth/signin",
  },
  store: {
    init: "/api/store",
    addTheme: "/api/store/theme",
    getCategory: (storeId: string) => `/api/category/${storeId}`,
    getStoreByUserId: (userId: string) => `/api/store/${userId}`,
  },
  file: {
    upload: "/api/file",
  },
  product: {
    create: "/api/product",
    get: "/api/product",
  },
};

export default ENDPOINT;
