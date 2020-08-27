import { mergeImages } from "./merge-images";
import { opts } from "../components/Webcam/constants";

export const createTemplateOne = (picture: string) =>
  mergeImages(
    [
      {
        src: picture,
        x: 0,
        y: 0,
      },
      {
        src:
          "https://res.cloudinary.com/thiagokpelo/image/upload/c_scale,w_120/v1598391872/LOFT_jq1mef.png",
        x: 160,
        y: 20,
      },
      {
        src:
          "https://res.cloudinary.com/thiagokpelo/image/upload/v1598391872/brasil_v1o2ny.png",
        x: 320,
        y: 50,
      },
      {
        src:
          "https://res.cloudinary.com/thiagokpelo/image/upload/c_scale,w_111/a_25/v1598391872/Cubos_xzusea.png",
        x: 10,
        y: 30,
      },
    ],
    opts
  );

export const createFilenameWithHash = (
  filename: string,
  extension: string
): string => `${filename}.${Date.now()}.${extension}`;
