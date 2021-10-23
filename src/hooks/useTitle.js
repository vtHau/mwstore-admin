import { useEffect } from "react";

function useTitle(title) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = title;
  }, [title]);
}

export default useTitle;
