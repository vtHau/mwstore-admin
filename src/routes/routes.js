import React from "react";
import { Route } from "react-router-dom";
import { path } from "../constants/path";
import { role } from "../constants/role";
import PrivateRoute from "./../guards/PrivateRoute";

// Components
import Home from "../pages/Home/Home";

//admin
import Admin from "../pages/Admin/Admin";
import AdminNew from "../pages/Admin/AdminNew";

//brand
import Brand from "../pages/Brand/Brand";
import BrandNew from "../pages/Brand/BrandNew";

//brand
import Role from "../pages/Role/Role";
import RoleNew from "../pages/Role/RoleNew";
import RoleEdit from "../pages/Role/RoleEdit";

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
import ProductReference from "../pages/Product/ProductReference";

//product
import Gallery from "../pages/Gallery/Gallery";

//statistic
import Statistic from "../pages/Statistic/Statistic";

//profile
import Profile from "../pages/Profile/Profile";

//message
import Message from "../pages/Message/Message";

//message
import Notification from "../pages/Notification/Notification";

function Routes() {
  return (
    <>
      <Route exact path={path.HOME} component={Home} />
      <Route path={path.PROFILE} component={Profile} role={path.PROFILE} />

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
        path={path.MESSAGE_LIST}
        component={Message}
        role={role.ADMIN}
      />
      <PrivateRoute path={path.ROLE_LIST} component={Role} role={role.ROLE} />
      <PrivateRoute path={path.ROLE_NEW} component={RoleNew} role={role.ROLE} />
      <PrivateRoute
        path={path.ROLE_EDIT + ":id"}
        component={RoleEdit}
        role={role.ROLE}
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
      <PrivateRoute path={path.NOTIFICATION} component={Notification} />
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
        path={path.PRODUCT_CRAWL}
        component={ProductReference}
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
    </>
  );
}

export default Routes;
