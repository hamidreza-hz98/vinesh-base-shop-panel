"use client"


import { transformGridQuery } from '@/lib/request';
import { deleteProduct, getAllProducts } from '@/store/product/product.action';
import QueryString from 'qs';
import React from 'react'
import { useDispatch } from 'react-redux';
import Overview from '../common/overview/Overview';
import { productColumns } from '@/constants/columns';

const ProductsPageWrapper = () => {
  const dispatch = useDispatch();
  
    const getProducts = async (params) => {
      const query = transformGridQuery({ ...params });
  
      const data = await dispatch(
        getAllProducts(
          QueryString.stringify(query, { encodedValuesOnly: true })
        )
      ).unwrap();
  
      return {
        items: data.products,
        rowCount: data.total,
      };
    };
  
    const handleDeleteProduct = async (_id) => {
      const message = await dispatch(deleteProduct(_id)).unwrap();
  
      return { success: true, message };
    };
  return (
     <div>
          <Overview
            title="مدیریت محصولات"
            breadcrumbs={[
              { name: "امیران واچ" },
              { name: "داشبورد", path: "/dashboard" },
              { name: "محصولات" },
            ]}
            columns={productColumns}
            getMany={getProducts}
            deleteOne={handleDeleteProduct}
          />
        </div>
  )
}

export default ProductsPageWrapper