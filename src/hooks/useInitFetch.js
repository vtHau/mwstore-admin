import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAllBrand,
  fetchAllCoupon,
  fetchAllUser,
} from "./../actions/action";

function useInitFetch() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBrand());
    dispatch(fetchAllCoupon());
    dispatch(fetchAllUser());
  }, [dispatch]);
}

export default useInitFetch;
