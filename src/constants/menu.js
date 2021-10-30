import {
  Home,
  Box,
  DollarSign,
  Tag,
  Clipboard,
  Camera,
  AlignLeft,
  UserPlus,
  Users,
  Chrome,
  BarChart,
  Settings,
  Archive,
  LogIn,
} from "react-feather";
import { path } from "./path";

export const MENUITEMS = [
  {
    path: path.HOME,
    title: "Home",
    icon: Home,
    type: "link",
    badgeType: "primary",
    active: false,
  },
  {
    title: "Brand",
    icon: Chrome,
    type: "sub",
    active: false,
    children: [
      {
        path: path.BRAND_LIST,
        title: "Brand List",
        type: "link",
      },
      {
        path: path.BRAND_NEW,
        title: "New Brand",
        type: "link",
      },
    ],
  },
  {
    title: "Coupon",
    icon: DollarSign,
    type: "sub",
    active: false,
    children: [
      { path: path.COUPON_LIST, title: "Coupon List", type: "link" },
      { path: path.COUPON_NEW, title: "New Coupon", type: "link" },
    ],
  },
  {
    title: "Comment",
    icon: DollarSign,
    type: "sub",
    active: false,
    children: [
      { path: path.COMMENT_LIST, title: "Comment List", type: "link" },
      { path: path.COMMENT_NOT_CONFIRM, title: "Not Confirm", type: "link" },
    ],
  },
  {
    title: "Feeship",
    icon: DollarSign,
    type: "sub",
    active: false,
    children: [
      { path: path.FEESHIP_LIST, title: "Feeship List", type: "link" },
    ],
  },
  {
    title: "User",
    icon: Users,
    type: "sub",
    active: false,
    children: [{ path: path.USER_LIST, title: "User List", type: "link" }],
  },
  {
    title: "Order",
    icon: Users,
    type: "sub",
    active: false,
    children: [{ path: path.ORDER_LIST, title: "Order List", type: "link" }],
  },
  {
    title: "Slider",
    icon: Users,
    type: "sub",
    active: false,
    children: [
      { path: path.SLIDER_LIST, title: "Slider List", type: "link" },
      { path: path.SLIDER_NEW, title: "Slider New", type: "link" },
    ],
  },
  // {
  //   title: "User",
  //   icon: UserPlus,
  //   type: "sub",
  //   active: false,
  //   children: [
  //     { path: "/users/list-user", title: "Danh sách người dùng", type: "link" },
  //     { path: "/users/create-user", title: "Create User", type: "link" },
  //   ],
  // },
  {
    title: "Products",
    icon: Box,
    type: "sub",
    active: false,
    children: [
      {
        title: "Physical",
        type: "sub",
        active: false,
        children: [
          {
            path: "/products/physical/category",
            title: "Category",
            type: "link",
          },
          {
            path: "/products/physical/sub-category",
            title: "Sub Category",
            type: "link",
          },
          {
            path: "/products/physical/product-list",
            title: "Product List",
            type: "link",
          },
          {
            path: "/products/physical/product-detail",
            title: "Product Detail",
            type: "link",
          },
          {
            path: "/products/physical/add-product",
            title: "Add Product",
            type: "link",
          },
        ],
      },
      {
        title: "digital",
        type: "sub",
        active: false,
        children: [
          {
            path: "/products/digital/digital-category",
            title: "Category",
            type: "link",
          },
          {
            path: "/products/digital/digital-sub-category",
            title: "Sub Category",
            type: "link",
          },
          {
            path: "/products/digital/digital-product-list",
            title: "Product List",
            type: "link",
          },
          {
            path: "/products/digital/digital-add-product",
            title: "Add Product",
            type: "link",
          },
        ],
      },
    ],
  },

  {
    title: "Coupons",
    icon: Tag,
    type: "sub",
    active: false,
    children: [
      { path: "/coupons/list-coupons", title: "List Coupons", type: "link" },
      {
        path: "/coupons/create-coupons",
        title: "Create Coupons",
        type: "link",
      },
    ],
  },
  {
    title: "Pages",
    icon: Clipboard,
    type: "sub",
    active: false,
    children: [
      { path: "/pages/list-page", title: "List Page", type: "link" },
      { path: "/pages/create-page", title: "Create Page", type: "link" },
    ],
  },
  {
    title: "Media",
    path: "/media",
    icon: Camera,
    type: "link",
    active: false,
  },
  {
    title: "Menus",
    icon: AlignLeft,
    type: "sub",
    active: false,
    children: [
      { path: "/menus/list-menu", title: "List Menu", type: "link" },
      { path: "/menus/create-menu", title: "Create Menu", type: "link" },
    ],
  },

  {
    title: "Vendors",
    icon: Users,
    type: "sub",
    active: false,
    children: [
      { path: "/vendors/list_vendors", title: "Vendor List", type: "link" },
      { path: "/vendors/create-vendors", title: "Create Vendor", type: "link" },
    ],
  },
  {
    title: "Localization",
    icon: Chrome,
    type: "sub",
    children: [
      {
        path: "/localization/transactions",
        title: "Translations",
        type: "link",
      },
      {
        path: "/localization/currency-rates",
        title: "Currency Rates",
        type: "link",
      },
      { path: "/localization/taxes", title: "Taxes", type: "link" },
    ],
  },
  {
    title: "Reports",
    path: "/reports/report",
    icon: BarChart,
    type: "link",
    active: false,
  },
  {
    title: "Settings",
    icon: Settings,
    type: "sub",
    children: [{ path: "/settings/profile", title: "Profile", type: "link" }],
  },
  {
    title: "Invoice",
    path: "/invoice",
    icon: Archive,
    type: "link",
    active: false,
  },
  {
    title: "Login",
    path: "/auth/login",
    icon: LogIn,
    type: "link",
    active: false,
  },
];
