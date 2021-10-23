import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllBrand, fetchAllCoupon } from "./../actions/action";

function useInitFetch() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBrand());
    dispatch(fetchAllCoupon());
  }, [dispatch]);
}

export default useInitFetch;
