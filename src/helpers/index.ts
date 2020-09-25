const getBase64 = (
  img: Blob | File,
  callback: (file: string | ArrayBuffer | null) => void
) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const normFile = (e: any) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

export default { getBase64, normFile };
