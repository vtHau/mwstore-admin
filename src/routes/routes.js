import React from "react";
import { ScrollContext } from "react-router-scroll-4";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { path } from "./../constants/path";
import App from "./../App";

// Components
import Home from "./../pages/Home";

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

// Products physicaltest
import Product_list from "./../components/products/physical/product-list";
import Product_detail from "./../components/products/physical/product-detail";

//Sales
import Orders from "./../components/sales/orders";
import Transactions_sales from "./../components/sales/transactions-sales";
//Coupons
import ListCoupons from "./../components/coupons/list-coupons";
import Create_coupons from "./../components/coupons/create-coupons";

//Pages
import ListPages from "./../components/pages/list-page";
import Create_page from "./../components/pages/create-page";
import Media from "./../components/media/media";
import List_menu from "./../components/menus/list-menu";
import Create_menu from "./../components/menus/create-menu";
import List_vendors from "./../components/vendors/list-vendors";
import Create_vendors from "./../components/vendors/create.vendors";
import Translations from "./../components/localization/translations";
import Rates from "./../components/localization/rates";
import Taxes from "./../components/localization/taxes";
import Profile from "./../components/settings/profile";
import Reports from "./../components/reports/report";
import Invoice from "./../components/invoice";
import Datatable from "./../components/common/datatable";
import Login from "./../components/Auth/Login";

function Routes() {
  return (
    <Router>
      <ScrollContext>
        <Switch>
          <Route exact path={path.LOGIN} component={Login} />
          <App>
            <Route exact path={path.HOME} component={Home} />
            <Route path={path.BRAND_LIST} component={Brand} />
            <Route path={path.BRAND_NEW} component={BrandNew} />
            <Route path={path.COUPON_LIST} component={Coupon} />
            <Route path={path.COUPON_NEW} component={CouponNew} />
            <Route path={path.COMMENT_LIST} component={Comment} />
            <Route
              path={path.COMMENT_NOT_CONFIRM}
              component={CommentNotConfirm}
            />
            <Route path={path.USER_LIST} component={User} />
            <Route path={path.FEESHIP_LIST} component={Feeship} />
            <Route exact path={path.ORDER_LIST} component={Order} />
            <Route path={path.ORDER_DETAIL + ":code"} component={OrderDetail} />
            <Route path={path.SLIDER_LIST} component={Slider} />
            <Route path={path.SLIDER_NEW} component={SliderNew} />
            <Route path={path.VISITOR} component={Visitor} />
            <Route path={path.POST_LIST} component={Post} />
            <Route path={path.POST_EDIT + ":id"} component={PostEdit} />
            <Route path={path.POST_NEW} component={PostNew} />
            <Route path={path.PRODUCT_LIST} component={Product} />
            <Route path={path.PRODUCT_NEW} component={ProductNew} />
            <Route path={path.GALLERY_DETAIL + ":id"} component={Gallery} />
            <Route path={path.STATISTIC} component={Statistic} />

            {/* 
            <Route
              path={`${process.env.PUBLIC_URL}/products/physical/category`}
              component={Category}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/products/physical/sub-category`}
              component={Sub_category}
            /> */}
            <Route
              path={`${process.env.PUBLIC_URL}/products/physical/product-list`}
              component={Product_list}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/products/physical/product-detail`}
              component={Product_detail}
            />
            {/* <Route
              path={`${process.env.PUBLIC_URL}/products/physical/add-product`}
              component={Add_product}
            /> */}

            {/*            
            <Route
              path={`${process.env.PUBLIC_URL}/products/digital/digital-product-list`}
              component={Digital_pro_list}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/products/digital/digital-add-product`}
              component={Digital_add_pro}
            /> */}

            <Route
              path={`${process.env.PUBLIC_URL}/sales/orders`}
              component={Orders}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/sales/transactions`}
              component={Transactions_sales}
            />

            <Route
              path={`${process.env.PUBLIC_URL}/coupons/list-coupons`}
              component={ListCoupons}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/coupons/create-coupons`}
              component={Create_coupons}
            />

            <Route
              path={`${process.env.PUBLIC_URL}/pages/list-page`}
              component={ListPages}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/pages/create-page`}
              component={Create_page}
            />

            <Route path={`${process.env.PUBLIC_URL}/media`} component={Media} />

            <Route
              path={`${process.env.PUBLIC_URL}/menus/list-menu`}
              component={List_menu}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/menus/create-menu`}
              component={Create_menu}
            />

            <Route
              path={`${process.env.PUBLIC_URL}/vendors/list_vendors`}
              component={List_vendors}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/vendors/create-vendors`}
              component={Create_vendors}
            />

            <Route
              path={`${process.env.PUBLIC_URL}/localization/transactions`}
              component={Translations}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/localization/currency-rates`}
              component={Rates}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/localization/taxes`}
              component={Taxes}
            />

            <Route
              path={`${process.env.PUBLIC_URL}/reports/report`}
              component={Reports}
            />

            <Route
              path={`${process.env.PUBLIC_URL}/settings/profile`}
              component={Profile}
            />

            <Route
              path={`${process.env.PUBLIC_URL}/invoice`}
              component={Invoice}
            />

            <Route
              path={`${process.env.PUBLIC_URL}/data-table`}
              component={Datatable}
            />
          </App>
        </Switch>
      </ScrollContext>
    </Router>
  );
}

export default Routes;
