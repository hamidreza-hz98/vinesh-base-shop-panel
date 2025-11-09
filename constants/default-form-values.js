const seoDefaultValues = (data) => ({
  title: data?.seo?.title || "",
  description: data?.seo?.description || "",
  keywords: data?.seo?.keywords || "",
  ogTitle: data?.seo?.ogTitle || "",
  ogDescription: data?.seo?.ogDescription || "",
  ogImage: data?.seo?.ogImage || "",
  twitterTitle: data?.seo?.twitterTitle || "",
  twitterDescription: data?.seo?.twitterDescription || "",
  twitterImage: data?.seo?.twitterImage || "",
  canonical: data?.seo?.canonical || "",
  robots: data?.seo?.robots || "",
  additionalMetaTags: data?.seo?.additionalMetaTags || "",
});

export const mediaDefaultValues = (data) => ({
  _id: data?._id || null,

  file: data
    ? { path: data?.path, type: data?.type, mimeType: data?.mimeType }
    : null,

  title: data?.title || "",
  description: data?.description || "",

  seoTitle: data?.seoTitle || "",
  seoDescription: data?.seoDescription || "",
  seoKeywords: data?.seoKeywords?.split?.(",")?.map((k) => k.trim()) || [],

  mediaAlt: data?.mediaAlt || "",
  mediaTitle: data?.mediaTitle || "",
  mediaCaption: data?.mediaCaption || "",
  mediaTranscript: data?.mediaTranscript || "",
});

export const defaultBrandValues = (data) => ({
  _id: data?._id || null,
  name: data?.name || "",
  englishName: data?.englishName || "",
  slug: data?.slug || "",
  description: data?.description || "",
  tags: data?.tags || [],
  logo: data?.logo || null,
  seo: {...seoDefaultValues(data)},
});

export const defaultCategoryValues = (data) => ({
  _id: data?._id || null,
  name: data?.name || "",
  slug: data?.slug || "",
  description: data?.description || "",
  children: data?.children || [],
  tags: data?.tags || [],
  image: data?.image || null,
  seo: {...seoDefaultValues(data)},
});
