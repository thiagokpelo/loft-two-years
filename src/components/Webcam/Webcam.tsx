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
              Apagar
            </Link>
          </>
        ) : (
          <>
            <WebcamFixed
              audio={false}
              height={554}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={435}
              videoConstraints={videoConstraints}
            />
            <ImageFixed
              top={20}
              left={160}
              src="https://res.cloudinary.com/thiagokpelo/image/upload/c_scale,w_120/v1598391872/LOFT_jq1mef.png"
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
