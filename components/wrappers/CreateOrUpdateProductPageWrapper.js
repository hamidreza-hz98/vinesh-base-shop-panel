"use client"

import useNotifications from '@/hooks/useNotifications/useNotifications';
import { purifyData } from '@/lib/request';
import { createProduct, getProductDetails, updateProduct } from '@/store/product/product.action';
import { selectProduct } from '@/store/product/product.selector';
import { useRouter, useSearchParams } from 'next/navigation';
import QueryString from 'qs';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../common/Loader';
import PageContainer from '../common/PageContainer';
import ProductForm from '../forms/ProductForm';

const CreateOrUpdateProductPageWrapper = () => {
  const searchParams = useSearchParams();
    const dispatch = useDispatch();
    const router = useRouter();
    const productDetails = useSelector(selectProduct);
    const notifications = useNotifications();
  
    const _id = searchParams.get("id");

    const loadData = React.useCallback(async () => {
    if (_id) {
      const query = { _id };

      await dispatch(getProductDetails(QueryString.stringify(query))).unwrap();
    }
  }, [dispatch, _id]);

  const handleCreateOrUpdateProduct = async (product) => {
    try {
      const body = purifyData(product, ["tags", "categories", "brand", "media", "seo.ogImage", "seo.twitterImage"]);

      const message = _id
        ? await dispatch(updateProduct({ _id, body })).unwrap()
        : await dispatch(createProduct(body)).unwrap();

      notifications.show(message, {
        severity: "success",
        autoHideDuration: 3000,
      });

      router.push("/dashboard/products");
    } catch (error) {
      notifications.show(error, {
        severity: "error",
        autoHideDuration: 3000,
      });
    }
  };

  if (!productDetails) {
    return <Loader />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    loadData();
  }, [loadData]);

  return (
        <PageContainer
      title="مشخصات محصول:"
      breadcrumbs={[
        { name: "امیران واچ" },
        { name: "داشبورد", path: "/dashboard" },
        { name: "محصولات", path: "/dashboard/products" },
        { name: _id ? "ویرایش محصول" : "ساخت محصول جدید" },
      ]}
    >
      <ProductForm
        onSubmit={handleCreateOrUpdateProduct}
        data={productDetails || null}
        mode={_id ? "edit" : "create"}
      />
    </PageContainer>
  )
}

export default CreateOrUpdateProductPageWrapper