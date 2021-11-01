export const BASE_URL = "http://localhost:8000/";
export const BASE_URL_API = BASE_URL + "api/admin/";
export const BASE_URL_CSRF = BASE_URL + "sanctum/csrf-cookie";
export const BASE_URL_IMAGE = BASE_URL + "admins/uploads/";

//image
export const AVATAR_IMAGE = BASE_URL_IMAGE + "avatars/";
export const SLIDER_IMAGE = BASE_URL_IMAGE + "sliders/";
export const PRODUCT_IMAGE = BASE_URL_IMAGE + "products/";
export const GALLERY_IMAGE = BASE_URL_IMAGE + "gallerys/";

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

//feeship
export const ALL_FEESHIP = BASE_URL_API + "feeship/all-feeship";
export const NEW_FEESHIP = BASE_URL_API + "feeship/new-feeship";
export const DELETE_FEESHIP = BASE_URL_API + "feeship/delete-feeship";

//address
export const ALL_ADDRESS = BASE_URL_API + "address/all-address";

//order
export const ALL_ORDER = BASE_URL_API + "order/all-order";
export const CONFIRM_ORDER = BASE_URL_API + "order/confirm-order";
export const DETAIL_ORDER = BASE_URL_API + "order/detail-order";
export const DELETE_ORDER = BASE_URL_API + "order/delete-order";
export const PRINT_ORDER = BASE_URL + "print/order/";

//slider
export const ALL_SLIDER = BASE_URL_API + "slider/all-slider";
export const NEW_SLIDER = BASE_URL_API + "slider/new-slider";
export const UPDATE_SLIDER = BASE_URL_API + "slider/update-slider";
export const DELETE_SLIDER = BASE_URL_API + "slider/delete-slider";

// authentication
export const AUTH_TOKEN = BASE_URL_API + "auth-token";
export const SIGN_IN = BASE_URL_API + "signin";
export const SIGN_IN_SOCIAL = BASE_URL_API + "signin/redirect/";
export const SIGN_IN_SOCIAL_CB = BASE_URL_API + "signin/callback/";
export const SIGN_UP = BASE_URL_API + "signup";
export const SIGN_OUT = BASE_URL_API + "signout";

//product
export const ALL_PRODUCT = BASE_URL_API + "product/all-product";
export const NEW_PRODUCT = BASE_URL_API + "product/new-product";
export const UPDATE_PRODUCT = BASE_URL_API + "product/update-product";
export const DELETE_PRODUCT = BASE_URL_API + "product/delete-product";
export const PRODUCT_NOT_POST = BASE_URL_API + "product/not-post";

//visitor
export const ALL_VISITOR = BASE_URL_API + "visitor/all-visitor";

//gallery
export const GALLERY_PRODUCT = BASE_URL_API + "gallery/gallery-product";
export const NEW_GALLERY = BASE_URL_API + "gallery/new-gallery";
export const DELETE_GALLERY = BASE_URL_API + "gallery/delete-gallery";

//post
export const ALL_POST = BASE_URL_API + "post/all-post";
export const GET_POST = BASE_URL_API + "post/get-post";
export const UPDATE_POST = BASE_URL_API + "post/update-post";
export const DELETE_POST = BASE_URL_API + "post/delete-post";
