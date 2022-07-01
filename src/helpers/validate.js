import * as Yup from "yup";

export const brandValid = Yup.object().shape({
  name: Yup.string()
    .min(2, "Brand name too short")
    .max(50, "Brand name too long")
    .required("Please enter brand name"),
  description: Yup.string()
    .min(2, "Brand description too short")
    .max(50, "Brand description too long")
    .required("Please enter brand description"),
});

export const roleValid = Yup.object().shape({
  name: Yup.string()
    .min(2, "Role name too short")
    .max(50, "Role name too long")
    .required("Please enter role name"),
  description: Yup.string()
    .min(2, "Role description too short")
    .max(50, "Role description too long")
    .required("Please enter role description"),
});

export const adminUpdateValid = Yup.object().shape({
  name: Yup.string()
    .min(2, "Brand name too short")
    .max(50, "Brand name too long")
    .required("Please enter brand name"),
  description: Yup.string()
    .min(2, "Brand description short")
    .max(50, "Brand description long")
    .required("Please enter brand description"),
});

export const adminNormalUpdateValid = Yup.object().shape({
  name: Yup.string()
    .min(2, "Product name too short")
    .max(50, "Product name too long")
    .required("Please enter product name"),
  email: Yup.string()
    .min(3, "Email address is too short")
    .max(50, "Email address is too long")
    .email("Email address is not valid")
    .required("Please enter email address"),
  password: Yup.string()
    .min(8, "The password is too short")
    .max(50, "The password is too long"),
  roles: Yup.array().min(1, "Min one role").required("Please choose role"),
  description: Yup.string()
    .min(2, "Product description too short")
    .max(500, "Product description too long")
    .required("Please input product description"),
  image: Yup.mixed()
    .test(
      "fileSize",
      "File Size is too large",
      (value) => value === null || (value && value.size <= 2000000)
    )
    .test(
      "fileType",
      "Unsupported File Format",
      (value) =>
        value === null ||
        (value && ["image/jpeg", "image/jpg", "image/png"].includes(value.type))
    ),
});

export const adminNormalValid = Yup.object().shape({
  name: Yup.string()
    .min(2, "Product name too short")
    .max(50, "Product name too long")
    .required("Please enter product name"),
  email: Yup.string()
    .min(3, "Email address is too short")
    .max(50, "Email address is too long")
    .email("Email address is not valid")
    .required("Please enter email address"),
  password: Yup.string()
    .min(8, "The password is too short")
    .max(50, "The password is too long")
    .required("please enter a password"),
  roles: Yup.array()
    .min(1, "At least one role")
    .required("Please choose a role"),
  description: Yup.string()
    .min(2, "Product description too short")
    .max(500, "Product description too long")
    .required("Please enter product description"),
  image: Yup.mixed()
    .test(
      "fileSize",
      "File Size is too large",
      (value) => value === null || (value && value.size <= 2000000)
    )
    .test(
      "fileType",
      "Unsupported File Format",
      (value) =>
        value === null ||
        (value && ["image/jpeg", "image/jpg", "image/png"].includes(value.type))
    ),
});

export const postUpdateValid = Yup.object().shape({
  product_id: Yup.string().required("Please choose a product"),
  title: Yup.string()
    .min(2, "Post title is too short")
    .required("Please enter post title"),
  content: Yup.string()
    .min(2, "The content is too short")
    .required("Please enter post content"),
});

export const galleryValid = Yup.object().shape({
  image: Yup.mixed()
    .required("Please input file")
    .test("fileSize", "File Size  is too large", (files) => {
      let valid = true;
      for (const file of files) {
        valid = file === null || (file && file.size <= 1000000);
      }
      return valid;
    })
    .test("fileType", "Unsupported File Format", (files) => {
      let valid = true;
      for (const file of files) {
        valid =
          file === null ||
          (file &&
            ["image/jpeg", "image/jpg", "image/png"].includes(file.type));
      }
      return valid;
    }),
});

export const sliderValid = Yup.object().shape({
  name: Yup.string()
    .min(2, "Brand name too short")
    .max(50, "Brand name too long")
    .required("Please enter brand name"),
  product_id: Yup.string().required("Please choose a product"),
  show_hide: Yup.string().required("Please choose display"),
  image: Yup.mixed()
    .required("Please input file")
    .test(
      "fileSize",
      "File Size is too large",
      (value) => value === null || (value && value.size <= 2000000)
    )
    .test(
      "fileType",
      "Unsupported File Format",
      (value) =>
        value === null ||
        (value && ["image/jpeg", "image/jpg", "image/png"].includes(value.type))
    ),
});

export const sliderUpdateValid = Yup.object().shape({
  name: Yup.string()
    .min(2, "Brand name too short")
    .max(50, "Brand name too long")
    .required("Please enter brand name"),
  product_id: Yup.string().required("Please choose a product"),
  show_hide: Yup.string().required("Please choose display"),
  image: Yup.mixed()
    .required("Please input file")
    .test(
      "fileSize",
      "File Size is too large",
      (value) => value === null || (value && value.size <= 2000000)
    )
    .test(
      "fileType",
      "Unsupported File Format",
      (value) =>
        value === null ||
        (value && ["image/jpeg", "image/jpg", "image/png"].includes(value.type))
    ),
});

export const productValid = Yup.object().shape({
  name: Yup.string()
    .min(2, "Product name too short")
    .max(50, "Product name too long")
    .required("Please enter product name"),
  price: Yup.number()
    .min(100, "Product price from 1000")
    .max(100000000, "Product price to 100000000")
    .required("Please enter product price"),
  brand_id: Yup.string().required("Please choose brand"),
  feather: Yup.string().required("Please select featured product"),
  description: Yup.string()
    .min(2, "Product description is too short")
    .max(500, "Product description is too long")
    .required("Please enter product description"),
  image: Yup.mixed()
    .test(
      "fileSize",
      "File Size is too large",
      (value) => value === null || (value && value.size <= 2000000)
    )
    .test(
      "fileType",
      "Unsupported File Format",
      (value) =>
        value === null ||
        (value && ["image/jpeg", "image/jpg", "image/png"].includes(value.type))
    ),
});

export const productUpdateValid = Yup.object().shape({
  name: Yup.string()
    .min(2, "Product name is too short")
    .max(50, "Product name is too long")
    .required("Please enter product name"),
  price: Yup.number()
    .min(100, "Product price from 1000")
    .max(100000000, "Product price to 100000000")
    .required("Please enter product price"),
  brand_id: Yup.string().required("Please choose brand"),
  feather: Yup.string().required("Please select featured product"),
  description: Yup.string()
    .min(2, "Product description is too short")
    .max(500, "Product description is too long")
    .required("Please enter product description"),
  image: Yup.mixed()
    .test(
      "fileSize",
      "File Size is too large",
      (value) => value === null || (value && value.size <= 2000000)
    )
    .test(
      "fileType",
      "Unsupported File Format",
      (value) =>
        value === null ||
        (value && ["image/jpeg", "image/jpg", "image/png"].includes(value.type))
    ),
});

export const couponNewValid = Yup.object().shape({
  name: Yup.string()
    .min(2, "Coupon name is too short")
    .max(50, "Coupon name is too long")
    .required("Please enter coupon name"),
  code: Yup.string()
    .min(2, "Coupon code is too short")
    .max(50, "Coupon code is too long")
    .required("Please enter coupon code"),
  quantity: Yup.number()
    .min(1, "Coupon quantity from 1")
    .max(100, "Coupon quantity to 100")
    .required("Please enter coupon quantity"),
  percent: Yup.number()
    .min(1, "Coupon percent from 1")
    .max(100, "Coupon percent to 100")
    .required("Please enter coupon percent"),
  start_coupon: Yup.date()
    .min(new Date(), "Time bat dau khong nho hon ngay hien tai")
    .required("Please enter coupon percent"),
  end_coupon: Yup.date()
    .min(Yup.ref("start_coupon"), "Time ket thuc khong nho hon ngay bat dau")
    .required("Please enter coupon percent"),
});

export const couponValid = Yup.object().shape({
  name: Yup.string()
    .min(2, "Coupon name is too short")
    .max(50, "Coupon name is too long")
    .required("Please enter coupon name"),
  code: Yup.string()
    .min(2, "Coupon code is too short")
    .max(50, "Coupon code is too long")
    .required("Please enter coupon code"),
  quantity: Yup.number()
    .min(1, "Coupon quantity from 1")
    .max(100, "Coupon quantity to 100")
    .required("Please enter coupon quantity"),
  percent: Yup.number()
    .min(1, "Coupon percent from 1")
    .max(100, "Coupon percent to 100")
    .required("Please enter coupon percent"),
  start_coupon: Yup.date().required("Please enter coupon percent"),
  end_coupon: Yup.date().required("Please enter coupon percent"),
});

export const signInValid = Yup.object().shape({
  email: Yup.string()
    .min(3, "Email address is too short")
    .max(50, "Email address is too long")
    .email("You must enter your email")
    .required("Please enter email address"),
  password: Yup.string()
    .min(8, "The Password is too short")
    .max(50, "The password is too long")
    .required("Please enter a password"),
});

export const passwordValid = Yup.object().shape({
  old_password: Yup.string()
    .min(8, "The Password is too short")
    .max(50, "The Password is too long")
    .required("Please enter a password"),
  new_password: Yup.string()
    .min(8, "The Password is too short")
    .max(50, "The Password is too long")
    .required("Please enter a password"),
  pre_password: Yup.string()
    .oneOf([Yup.ref("new_password")], "password doesn't match")
    .min(8, "The Password is too short")
    .max(50, "The Password is too long")
    .required("Please re-enter a password"),
});

export const feeshipValid = Yup.object().shape({
  feeship: Yup.number()
    .min(1000, "Feeship price from 1000")
    .max(1000000, "Feeship price to 1000000")
    .required("Please enter feeship price"),
});

export const notiValid = Yup.object().shape({
  title: Yup.string()
    .min(2, "Title too short")
    .max(20, "Title too long")
    .required("Please enter title"),
  body: Yup.string()
    .min(2, "Body too short")
    .max(20, "Body too long")
    .required("Please enter body"),
  image: Yup.string().url(),
});
