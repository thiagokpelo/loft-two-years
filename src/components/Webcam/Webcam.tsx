import React, {
  forwardRef,
  ForwardRefExoticComponent,
  useCallback,
  useRef,
  useState,
} from "react";

import { ImageFixed, Preview, WebcamFixed } from "./Webcam.styles";
import { Button, Link } from "../Button";
import { videoConstraints } from "./constants";
import {
  createFilenameWithHash,
  createTemplateOne,
} from "../../utils/create-templates";
import { Card } from "../Card";
import { getCameraPermission } from "../../utils/camera-permissions";

// eslint-disable-next-line react/display-name
export const Webcam: ForwardRefExoticComponent<any> = forwardRef((_, ref) => {
  const webcamRef = useRef(null);
  const [image, setImageSrc] = useState("");
  const mergeCapture = async (picture: string) => {
    try {
      const r = await createTemplateOne(picture);

      return r;
    } catch (e) {
      console.log(e);
      return "";
    }
  };

  const capture = useCallback(async () => {
    const hasCameraPermission = await getCameraPermission();

    console.log("hasCameraPermission", hasCameraPermission);

    if (!hasCameraPermission) return "";

    const response = webcamRef.current
      ? // @ts-ignore
        webcamRef.current.getScreenshot()
      : null;

    const merge = await mergeCapture(`data:image/jpeg;base64${response}`);

    setImageSrc(merge);
  }, [webcamRef]);

  const clearImage = () => {
    setImageSrc("");
  };

  return (
    <>
      <Card ref={ref}>
        {image ? (
          <>
            <Preview image={image} />
            <Button
              as="a"
              download={createFilenameWithHash("loft-two-years", "jpeg")}
              href={image}
              variant="solid"
            >
              Download
            </Button>
            <Link as="button" onClick={clearImage}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6H5H21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 11V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 11V17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </>
        ) : (
          <>
            <WebcamFixed
              mirrored={true}
              audio={false}
              forceScreenshotSourceSize={true}
              height="100%"
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
            <ImageFixed
              top={50}
              left={320}
              src="https://res.cloudinary.com/thiagokpelo/image/upload/v1598391872/brasil_v1o2ny.png"
            />
            <ImageFixed
              top={30}
              left={10}
              src="https://res.cloudinary.com/thiagokpelo/image/upload/c_scale,w_111/a_25/v1598391872/Cubos_xzusea.png"
            />
            <Button onClick={capture} variant="solid">
              Tirar foto
            </Button>
          </>
        )}
      </Card>
    </>
  );
});
