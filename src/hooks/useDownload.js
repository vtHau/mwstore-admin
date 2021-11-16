import { useState, useEffect } from "react";
import moment from "moment";
import toast from "../helpers/toast";

function useDownload(path, fileName = "downloadFile", extension = "xlsx") {
  const [isLoading, setIsLoading] = useState(false);
  const [linkFile, setLinkFile] = useState();

  const initFileDownload = () => {
    fetch(path)
      .then((response) => response.blob())
      .then((blob) => {
        const timeExport = moment(new Date())
          .format("H_mm_ss_DD_MM_YYYY")
          .toString();
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${fileName}_${timeExport}.${extension}`);
        document.body.appendChild(link);
        setLinkFile(link);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    initFileDownload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const downloadFile = () => {
    setIsLoading(true);
    if (!linkFile) {
      initFileDownload();
    }

    try {
      linkFile.click();
      linkFile.parentNode.removeChild(linkFile);
    } catch (error) {
      return toast.error("Fail", "Download file fail");
    }

    setTimeout(() => {
      setIsLoading(false);
      return toast.success("Success", "Download file success");
    }, 500);
  };

  return [downloadFile, isLoading];
}

export default useDownload;
