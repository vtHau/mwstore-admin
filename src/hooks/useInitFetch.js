import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAllBrand,
  fetchAllCoupon,
  fetchAllUser,
  fetchAllAddress,
  fetchAllProduct,
} from "./../actions/action";

function useInitFetch() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBrand());
    dispatch(fetchAllCoupon());
    dispatch(fetchAllUser());
    dispatch(fetchAllAddress());
    dispatch(fetchAllProduct());
  }, [dispatch]);
}

export default useInitFetch;
