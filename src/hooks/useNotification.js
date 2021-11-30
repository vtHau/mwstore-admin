import { useEffect, useRef } from "react";
import { io } from "socket.io-client";
import toast from "./../helpers/toast";
import * as PATH_URL from "./../constants/apiUrl";

function useNotification() {
  const socket = useRef();

  useEffect(() => {
    socket.current = io(PATH_URL.BASE_URL_NODE);
    socket.current.on("receive_notification", (data) => {
      toast.success("Notification", data.notification);
    });
  }, []);
}

export default useNotification;
