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
