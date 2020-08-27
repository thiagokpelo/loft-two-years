export const getCameraPermission = (): Promise<any> => {
  return navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream: any) {
      return Promise.resolve(stream);
    })
    .catch(function (err: any) {
      console.log(err);
      return Promise.resolve(false);
    });
};
