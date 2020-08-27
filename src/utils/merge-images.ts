import mergeImagesLib from "merge-images";

export async function mergeImages(
  images: Object[],
  options: Object
): Promise<string> {
  const result = await mergeImagesLib(images as any, options as any);

  return result;
}
