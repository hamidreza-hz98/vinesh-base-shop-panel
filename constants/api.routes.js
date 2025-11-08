export const adminLoginApi = `${process.env.NEXT_PUBLIC_BASE_URL}/admin/login`;

export const uploadMediaApi = `${process.env.NEXT_PUBLIC_BASE_URL}/media/upload`;

export const getAllMediaApi = (query) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/media/all?${query}`;

export const modifyMediaApi = (id) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/media/${id}`;

export const createBrandApi = `${process.env.NEXT_PUBLIC_BASE_URL}/brand`;

export const brandDetailsApi = (query) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/brand/details?${query}`;

export const modifyBrandApi = (id) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/brand/${id}`;

export const getAllBrandsApi = (query) =>
  `${process.env.NEXT_PUBLIC_BASE_URL}/brand?${query}`;
