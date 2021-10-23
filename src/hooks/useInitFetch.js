import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllBrand } from "./../actions/action";

function useInitFetch() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBrand());
  }, [dispatch]);
}

export default useInitFetch;
