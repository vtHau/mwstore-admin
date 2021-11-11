import React from "react";
import { Route } from "react-router-dom";
import { path } from "../constants/path";
import { role } from "../constants/role";
import PrivateRoute from "./../guards/PrivateRoute";

// Components
import Home from "../pages/Home";

//admin
import Admin from "../pages/Admin/Admin";
import AdminNew from "../pages/Admin/AdminNew";

//brand
import Brand from "../pages/Brand/Brand";
import BrandNew from "../pages/Brand/BrandNew";

//coupon
import Coupon from "../pages/Coupon/Coupon";
import CouponNew from "../pages/Coupon/CouponNew";

//comment
import Comment from "../pages/Comment/Comment";
import CommentNotConfirm from "../pages/Comment/CommentNotConfirm";

//user
import User from "../pages/User/User";

//feeship
import Feeship from "../pages/Feeship/Feeship";

//order
import Order from "../pages/Order/Order";
import OrderDetail from "../pages/Order/OrderDetail";

//slider
import Slider from "../pages/Slider/Slider";
import SliderNew from "../pages/Slider/SliderNew";

//info
import Visitor from "../pages/Visitor/Visitor";

//info
import Post from "../pages/Post/Post";
import PostEdit from "../pages/Post/PostEdit";
import PostNew from "../pages/Post/PostNew";

//product
import Product from "../pages/Product/Product";
import ProductNew from "../pages/Product/ProductNew";

//product
import Gallery from "../pages/Gallery/Gallery";

//statistic
import Statistic from "../pages/Statistic/Statistic";

//profile
import Profile from "../pages/Profile/Profile";

// Products physicaltest
import Product_list from "../components/products/physical/product-list";
import Product_detail from "../components/products/physical/product-detail";

//Sales
import Orders from "../components/sales/orders";
import Transactions_sales from "../components/sales/transactions-sales";
//Coupons
import ListCoupons from "../components/coupons/list-coupons";
import Create_coupons from "../components/coupons/create-coupons";

//Pages
import ListPages from "../components/pages/list-page";
import Create_page from "../components/pages/create-page";
import Media from "../components/media/media";
import List_menu from "../components/menus/list-menu";
import Create_menu from "../components/menus/create-menu";
import List_vendors from "../components/vendors/list-vendors";
import Create_vendors from "../components/vendors/create.vendors";
import Translations from "../components/localization/translations";
import Rates from "../components/localization/rates";
import Taxes from "../components/localization/taxes";
import Reports from "../components/reports/report";
import Invoice from "../components/invoice";
import Datatable from "../components/common/datatable";

function Routes() {
  return (
    <>
      <Route exact path={path.HOME} component={Home} />
      <Route path={path.PROFILE} component={Profile} />

      <PrivateRoute
        path={path.ADMIN_LIST}
        component={Admin}
        role={role.ADMIN}
      />
      <PrivateRoute
        path={path.ADMIN_NEW}
        component={AdminNew}
        role={role.ADMIN}
      />
      <PrivateRoute
        path={path.BRAND_LIST}
        component={Brand}
        role={role.BRAND}
      />
      <PrivateRoute
        path={path.BRAND_NEW}
        component={BrandNew}
        role={role.BRAND}
      />
      <PrivateRoute
        path={path.COUPON_LIST}
        component={Coupon}
        role={role.COUPON}
      />
      <PrivateRoute
        path={path.COUPON_NEW}
        component={CouponNew}
        role={role.COUPON}
      />
      <PrivateRoute
        path={path.COMMENT_LIST}
        component={Comment}
        role={role.COMMENT}
      />
      <PrivateRoute
        path={path.COMMENT_NOT_CONFIRM}
        component={CommentNotConfirm}
        role={role.COMMENT}
      />
      <PrivateRoute path={path.USER_LIST} component={User} role={role.USER} />
      <PrivateRoute
        path={path.FEESHIP_LIST}
        component={Feeship}
        role={role.FEESHIP}
      />
      <PrivateRoute
        exact
        path={path.ORDER_LIST}
        component={Order}
        role={role.ORDER}
      />
      <PrivateRoute
        path={path.ORDER_DETAIL + ":code"}
        component={OrderDetail}
        role={role.ORDER}
      />
      <PrivateRoute
        path={path.SLIDER_LIST}
        component={Slider}
        role={role.SLIDER}
      />
      <PrivateRoute
        path={path.SLIDER_NEW}
        component={SliderNew}
        role={role.SLIDER}
      />
      <PrivateRoute
        path={path.VISITOR}
        component={Visitor}
        role={role.VISITOR}
      />
      <PrivateRoute path={path.POST_LIST} component={Post} role={role.POST} />
      <PrivateRoute
        path={path.POST_EDIT + ":id"}
        component={PostEdit}
        role={role.POST}
      />
      <PrivateRoute path={path.POST_NEW} component={PostNew} role={role.POST} />
      <PrivateRoute
        path={path.PRODUCT_LIST}
        component={Product}
        role={role.PRODUCT}
      />
      <PrivateRoute
        path={path.PRODUCT_NEW}
        component={ProductNew}
        role={role.PRODUCT}
      />
      <PrivateRoute
        path={path.GALLERY_DETAIL + ":id"}
        component={Gallery}
        role={role.GALLERY}
      />
      <PrivateRoute
        path={path.STATISTIC}
        component={Statistic}
        role={role.STATISTIC}
      />
      {/*  <PrivateRoute
        path={`${process.env.PUBLIC_URL}/products/physical/product-list`}
        component={Product_list}
      />
       <PrivateRoute
        path={`${process.env.PUBLIC_URL}/products/physical/product-detail`}
        component={Product_detail}
      />
       <PrivateRoute
        path={`${process.env.PUBLIC_URL}/sales/orders`}
        component={Orders}
      />
       <PrivateRoute
        path={`${process.env.PUBLIC_URL}/sales/transactions`}
        component={Transactions_sales}
      />

       <PrivateRoute
        path={`${process.env.PUBLIC_URL}/coupons/list-coupons`}
        component={ListCoupons}
      />
       <PrivateRoute
        path={`${process.env.PUBLIC_URL}/coupons/create-coupons`}
        component={Create_coupons}
      />

       <PrivateRoute
        path={`${process.env.PUBLIC_URL}/pages/list-page`}
        component={ListPages}
      />
       <PrivateRoute
        path={`${process.env.PUBLIC_URL}/pages/create-page`}
        component={Create_page}
      />

       <PrivateRoute path={`${process.env.PUBLIC_URL}/media`} component={Media} />

       <PrivateRoute
        path={`${process.env.PUBLIC_URL}/menus/list-menu`}
        component={List_menu}
      />
       <PrivateRoute
        path={`${process.env.PUBLIC_URL}/menus/create-menu`}
        component={Create_menu}
      />

       <PrivateRoute
        path={`${process.env.PUBLIC_URL}/vendors/list_vendors`}
        component={List_vendors}
      />
       <PrivateRoute
        path={`${process.env.PUBLIC_URL}/vendors/create-vendors`}
        component={Create_vendors}
      />

       <PrivateRoute
        path={`${process.env.PUBLIC_URL}/localization/transactions`}
        component={Translations}
      />
       <PrivateRoute
        path={`${process.env.PUBLIC_URL}/localization/currency-rates`}
        component={Rates}
      />
       <PrivateRoute
        path={`${process.env.PUBLIC_URL}/localization/taxes`}
        component={Taxes}
      />

       <PrivateRoute
        path={`${process.env.PUBLIC_URL}/reports/report`}
        component={Reports}
      /> */}

      {/*  <PrivateRoute
        path={`${process.env.PUBLIC_URL}/settings/profile`}
        component={Profile}
      /> */}

      {/*  <PrivateRoute path={`${process.env.PUBLIC_URL}/invoice`} component={Invoice} />

       <PrivateRoute
        path={`${process.env.PUBLIC_URL}/data-table`}
        component={Datatable}
      /> */}
    </>
  );
}

export default Routes;
