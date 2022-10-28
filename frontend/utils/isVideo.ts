const supportedVideoExtensions = ["mp4", "webm"];

const isVideo = (filename: string): boolean => {
  return supportedVideoExtensions.includes(
    (filename.split(".").pop() || "").toLowerCase()
  );
};

export default isVideo;
