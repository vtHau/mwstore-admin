export const BASE_URL = process.env.REACT_APP_BASE_URL_SERVER;
export const BASE_URL_NODE = process.env.REACT_APP_BASE_URL_NODE;
export const BASE_URL_API = "api/admin/";
export const BASE_URL_CSRF = "sanctum/csrf-cookie";
export const BASE_URL_IMAGE = BASE_URL + "admins/uploads/";

//image
export const AVATAR_IMAGE = BASE_URL_IMAGE + "avatars/";
export const ADMIN_AVATAR_IMAGE = BASE_URL_IMAGE + "admins/avatars/";
export const SLIDER_IMAGE = BASE_URL_IMAGE + "sliders/";
export const PRODUCT_IMAGE = BASE_URL_IMAGE + "products/";
export const GALLERY_IMAGE = BASE_URL_IMAGE + "gallerys/";

// authentication
export const AUTH_TOKEN = BASE_URL_API + "auth-token";
export const ALL_ADMIN = BASE_URL_API + "all-admin";
export const NEW_ADMIN = BASE_URL_API + "new-admin";
export const UPDATE_ADMIN = BASE_URL_API + "update-admin";
export const UPDATE_PROFILE = BASE_URL_API + "update-profile";
export const UPDATE_PASSWORD = BASE_URL_API + "update-password";
export const DELETE_ADMIN = BASE_URL_API + "delete-admin";
export const SIGN_IN = BASE_URL_API + "signin";
export const SIGN_UP = BASE_URL_API + "signup";
export const SIGN_OUT = BASE_URL_API + "signout";

//role
export const ALL_ROLE = BASE_URL_API + "role/all-role";
export const GET_ROLE = BASE_URL_API + "role/get-role";
export const NEW_ROLE = BASE_URL_API + "role/new-role";
export const UPDATE_ROLE = BASE_URL_API + "role/update-role";
export const DELETE_ROLE = BASE_URL_API + "role/delete-role";

//permission
export const ALL_PERMISSION = BASE_URL_API + "permission/all-permission";

// brand
export const ALL_BRAND = BASE_URL_API + "brand/all-brand";
export const UPDATE_BRAND = BASE_URL_API + "brand/update-brand";
export const DELETE_BRAND = BASE_URL_API + "brand/delete-brand";

// coupon
export const ALL_COUPON = BASE_URL_API + "coupon/all-coupon";
export const NEW_COUPON = BASE_URL_API + "coupon/new-coupon";
export const SEND_COUPON = BASE_URL_API + "coupon/send-coupon";
export const UPDATE_COUPON = BASE_URL_API + "coupon/update-coupon";
export const DELETE_COUPON = BASE_URL_API + "coupon/delete-coupon";

//comment
export const ALL_COMMENT = BASE_URL_API + "comment/all-comment";
export const NOT_CONFIRM_COMMENT = BASE_URL_API + "comment/notconfirm-comment";
export const UPDATE_COMMENT = BASE_URL_API + "comment/update-comment";
export const DELETE_COMMENT = BASE_URL_API + "comment/delete-comment";

//user
export const ALL_USER = BASE_URL_API + "user/all-user";
export const DELETE_USER = BASE_URL_API + "user/delete-user";

//feeship
export const ALL_FEESHIP = BASE_URL_API + "feeship/all-feeship";
export const NEW_FEESHIP = BASE_URL_API + "feeship/new-feeship";
export const DELETE_FEESHIP = BASE_URL_API + "feeship/delete-feeship";

//address
export const ALL_ADDRESS = BASE_URL_API + "address/all-address";

//order
export const ALL_ORDER = BASE_URL_API + "order/all-order";
export const CONFIRM_ORDER = BASE_URL_API + "order/confirm-order";
export const UPDATE_STATUS = BASE_URL_API + "order/update-status";
export const DETAIL_ORDER = BASE_URL_API + "order/detail-order";
export const DELETE_ORDER = BASE_URL_API + "order/delete-order";

//slider
export const ALL_SLIDER = BASE_URL_API + "slider/all-slider";
export const NEW_SLIDER = BASE_URL_API + "slider/new-slider";
export const UPDATE_SLIDER = BASE_URL_API + "slider/update-slider";
export const DELETE_SLIDER = BASE_URL_API + "slider/delete-slider";

//product
export const ALL_PRODUCT = BASE_URL_API + "product/all-product";
export const PRODUCT_CRAWL = BASE_URL_API + "product/product-crawl";
export const ADD_PRODUCT_CRAWL = BASE_URL_API + "product/add-product-crawl";
export const TOP_PRODUCT = BASE_URL_API + "product/top-product";
export const NEW_PRODUCT = BASE_URL_API + "product/new-product";
export const UPDATE_PRODUCT = BASE_URL_API + "product/update-product";
export const DELETE_PRODUCT = BASE_URL_API + "product/delete-product";
export const PRODUCT_NOT_POST = BASE_URL_API + "product/not-post";

//visitor
export const ALL_VISITOR = BASE_URL_API + "visitor/all-visitor";
export const COUNT_VISITOR = BASE_URL_API + "visitor/count-visitor";
export const DEVICE_VISITOR = BASE_URL_API + "visitor/device-visitor";

//gallery
export const GALLERY_PRODUCT = BASE_URL_API + "gallery/gallery-product";
export const NEW_GALLERY = BASE_URL_API + "gallery/new-gallery";
export const DELETE_GALLERY = BASE_URL_API + "gallery/delete-gallery";

//post
export const ALL_POST = BASE_URL_API + "post/all-post";
export const GET_POST = BASE_URL_API + "post/get-post";
export const UPDATE_POST = BASE_URL_API + "post/update-post";
export const DELETE_POST = BASE_URL_API + "post/delete-post";

//activity
export const GET_ACTIVITY = BASE_URL_API + "activity/get-activity";
export const ALL_ACTIVITY = BASE_URL_API + "activity/all-activity";

//statistic
export const GET_STATISTIC = BASE_URL_API + "statistic/get-statistic";
export const FILTER_DATE = BASE_URL_API + "statistic/filter-date";
export const FILTER_OTHER = BASE_URL_API + "statistic/filter-other";
export const COUNT_GENERAL = BASE_URL_API + "statistic/count-general";

//message
export const ALL_MESSAGE = BASE_URL_API + "message/get-message";
export const NEW_MESSAGE = BASE_URL_API + "message/new-message";

//notification
export const NEW_NOTIFICATION = BASE_URL_API + "notification/send";

//export
export const EXPORT_EXCEL_BRAND = BASE_URL_API + "export/brand";
export const EXPORT_EXCEL_USER = BASE_URL_API + "export/user";
export const EXPORT_EXCEL_COUPON = BASE_URL_API + "export/coupon";
export const EXPORT_EXCEL_VISITOR = BASE_URL_API + "export/visitor";
export const EXPORT_PDF_ORDER = BASE_URL_API + "export/order/";

//import
export const IMPORT_EXCEL_BRAND = BASE_URL_API + "import/brand";
export const IMPORT_EXCEL_COUPON = BASE_URL_API + "import/coupon";
