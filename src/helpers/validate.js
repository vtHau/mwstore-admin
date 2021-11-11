import * as Yup from "yup";
export function checkIfFilesAreTooBig(files) {
  let valid = true;
  if (files) {
    files.map((file) => {
      const size = file.size / 1024 / 1024;
      if (size > 10) {
        valid = false;
      }
    });
  }
  return valid;
}

export function checkIfFilesAreCorrectType(files) {
  let valid = true;
  if (files) {
    files.map((file) => {
      if (!["application/pdf", "image/jpeg", "image/png"].includes(file.type)) {
        valid = false;
      }
    });
  }
  return valid;
}

export const brandValid = Yup.object().shape({
  name: Yup.string()
    .min(2, "Brand name short")
    .max(50, "Brand name long")
    .required("Please input brand name"),
  description: Yup.string()
    .min(2, "Brand description short")
    .max(50, "Brand description long")
    .required("Please input brand description"),
});

export const adminUpdateValid = Yup.object().shape({
  name: Yup.string()
    .min(2, "Brand name short")
    .max(50, "Brand name long")
    .required("Please input brand name"),
  description: Yup.string()
    .min(2, "Brand description short")
    .max(50, "Brand description long")
    .required("Please input brand description"),
});

export const adminNormalUpdateValid = Yup.object().shape({
  name: Yup.string()
    .min(2, "Product name short")
    .max(50, "Product name long")
    .required("Please input Product name"),
  email: Yup.string()
    .min(3, "Địa chỉ email quá ngắn")
    .max(50, "Địa chỉ email quá dài")
    .email("Địa chỉ email không hợp lệ")
    .required("Vui lòng nhập địa chỉ email"),
  password: Yup.string()
    .min(8, "Mật khẩu quá ngắn")
    .max(50, "Mật khẩu quá dài"),
  roles: Yup.array().min(1, "Min one role").required("Please choose role"),
  description: Yup.string()
    .min(2, "Product description short")
    .max(500, "Product description long")
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
    .min(2, "Product name short")
    .max(50, "Product name long")
    .required("Please input Product name"),
  email: Yup.string()
    .min(3, "Địa chỉ email quá ngắn")
    .max(50, "Địa chỉ email quá dài")
    .email("Địa chỉ email không hợp lệ")
    .required("Vui lòng nhập địa chỉ email"),
  password: Yup.string()
    .min(8, "Mật khẩu quá ngắn")
    .max(50, "Mật khẩu quá dài")
    .required("Vui lòng nhập mật khẩu"),
  roles: Yup.array().min(1, "Min one role").required("Please choose role"),
  description: Yup.string()
    .min(2, "Product description short")
    .max(500, "Product description long")
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

export const postUpdateValid = Yup.object().shape({
  product_id: Yup.string().required("Please choose product"),
  title: Yup.string()
    .min(2, "Post title short")
    .required("Please input post title"),
  content: Yup.string()
    .min(2, "Post content short")
    .required("Please input post content"),
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
    .min(2, "Brand name short")
    .max(50, "Brand name long")
    .required("Please input brand name"),
  product_id: Yup.string().required("Please choose product"),
  show_hide: Yup.string().required("Please chooe display"),
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
    .min(2, "Brand name short")
    .max(50, "Brand name long")
    .required("Please input brand name"),
  product_id: Yup.string().required("Please choose product"),
  show_hide: Yup.string().required("Please chooe display"),
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
    .min(2, "Product name short")
    .max(50, "Product name long")
    .required("Please input Product name"),
  price: Yup.number()
    .min(100, "Product price from 1000")
    .max(100000000, "Product price to 100000000")
    .required("Please input Product price"),
  brand_id: Yup.string().required("Please choose brand"),
  feather: Yup.string().required("Please chooe feather"),
  description: Yup.string()
    .min(2, "Product description short")
    .max(500, "Product description long")
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

export const productUpdateValid = Yup.object().shape({
  name: Yup.string()
    .min(2, "Product name short")
    .max(50, "Product name long")
    .required("Please input Product name"),
  price: Yup.number()
    .min(100, "Product price from 1000")
    .max(100000000, "Product price to 100000000")
    .required("Please input Product price"),
  brand_id: Yup.string().required("Please choose brand"),
  feather: Yup.string().required("Please chooe feather"),
  description: Yup.string()
    .min(2, "Product description short")
    .max(500, "Product description long")
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

export const couponNewValid = Yup.object().shape({
  name: Yup.string()
    .min(2, "Coupon name short")
    .max(50, "Coupon name long")
    .required("Please input coupon name"),
  code: Yup.string()
    .min(2, "Coupon code short")
    .max(50, "Coupon code long")
    .required("Please input coupon code"),
  quantity: Yup.number()
    .min(1, "Coupon quantity from 1")
    .max(100, "Coupon quantity to 100")
    .required("Please input coupon quantity"),
  percent: Yup.number()
    .min(1, "Coupon percent from 1")
    .max(100, "Coupon percent to 100")
    .required("Please input coupon percent"),
  start_coupon: Yup.date()
    .min(new Date(), "Time bat dau khong nho hon ngay hien tai")
    .required("Please input coupon percent"),
  end_coupon: Yup.date()
    .min(Yup.ref("start_coupon"), "Time ket thuc khong nho hon ngay bat dau")
    .required("Please input coupon percent"),
});

export const couponValid = Yup.object().shape({
  name: Yup.string()
    .min(2, "Coupon name short")
    .max(50, "Coupon name long")
    .required("Please input coupon name"),
  code: Yup.string()
    .min(2, "Coupon code short")
    .max(50, "Coupon code long")
    .required("Please input coupon code"),
  quantity: Yup.number()
    .min(1, "Coupon quantity from 1")
    .max(100, "Coupon quantity to 100")
    .required("Please input coupon quantity"),
  percent: Yup.number()
    .min(1, "Coupon percent from 1")
    .max(100, "Coupon percent to 100")
    .required("Please input coupon percent"),
  start_coupon: Yup.date()
    // .min(new Date(), "Time bat dau khong nho hon ngay hien tai")
    .required("Please input coupon percent"),
  end_coupon: Yup.date()
    // .min(Yup.ref("start_coupon"), "Time ket thuc khong nho hon ngay bat dau")
    .required("Please input coupon percent"),
});

export const signInValid = Yup.object().shape({
  email: Yup.string()
    .min(3, "Địa chỉ email quá ngắn")
    .max(50, "Địa chỉ email quá dài")
    .email("Địa chỉ email không hợp lệ")
    .required("Vui lòng nhập địa chỉ email"),
  password: Yup.string()
    .min(8, "Mật khẩu quá ngắn")
    .max(50, "Mật khẩu quá dài")
    .required("Vui lòng nhập mật khẩu"),
});

export const signUpValid = Yup.object().shape({
  name: Yup.string()
    .min(2, "Tên quá ngắn")
    .max(20, "Tên quá dài")
    .required("Vui lòng nhập tên"),
  email: Yup.string()
    .min(3, "Địa chỉ email quá ngắn")
    .max(50, "Địa chỉ email quá dài")
    .email("Địa chỉ email không hợp lệ")
    .required("Vui lòng nhập địa chỉ email"),
  password: Yup.string()
    .min(8, "Mật khẩu quá ngắn")
    .max(50, "Mật khẩu quá dài")
    .required("Vui lòng nhập mật khẩu"),
  pre_password: Yup.string()
    .oneOf([Yup.ref("password")], "Mật khẩu không khớp")
    .min(8, "Mật khẩu quá ngắn")
    .max(50, "Mật khẩu quá dài")
    .required("Vui lòng nhập lại mật khẩu"),
});

export const checkoutValid = Yup.object().shape({
  name: Yup.string()
    .min(2, "Tên người nhận quá ngắn")
    .max(20, "Tên người nhận quá dài")
    .required("Vui lòng nhập tên người nhận"),
  phone: Yup.string()
    .matches(/((09|03|07|08|05)+([0-9]{8})\b)/g, "Số điện thoại không hợp lệ")
    .required("Nhập số điện thoại của bạn"),
  note: Yup.string().min(2, "Ghi chú quá ngắn").max(50, "Ghi chú quá dài"),
});

export const profileValid = Yup.object().shape({
  name: Yup.string()
    .min(2, "Tên người nhận quá ngắn")
    .max(20, "Tên người nhận quá dài")
    .required("Vui lòng nhập tên người nhận"),
  email: Yup.string()
    .min(3, "Địa chỉ email quá ngắn")
    .max(50, "Địa chỉ email quá dài")
    .email("Địa chỉ email không hợp lệ")
    .required("Vui lòng nhập địa chỉ email"),
  phone: Yup.string().matches(
    /((09|03|07|08|05)+([0-9]{8})\b)/g,
    "Số điện thoại không hợp lệ"
  ),
  status: Yup.string()
    .min(2, "Trạng thái quá ngắn")
    .max(50, "Trạng thái quá dài"),
  address: Yup.string().min(2, "Địa chỉ quá ngắn").max(50, "Địa chỉ quá dài"),
});

export const passwordValid = Yup.object().shape({
  old_password: Yup.string()
    .min(8, "Mật khẩu quá ngắn")
    .max(50, "Mật khẩu quá dài")
    .required("Vui lòng nhập mật khẩu"),
  new_password: Yup.string()
    .min(8, "Mật khẩu quá ngắn")
    .max(50, "Mật khẩu quá dài")
    .required("Vui lòng nhập mật khẩu"),
  pre_password: Yup.string()
    .oneOf([Yup.ref("new_password")], "Mật khẩu không khớp")
    .min(8, "Mật khẩu quá ngắn")
    .max(50, "Mật khẩu quá dài")
    .required("Vui lòng nhập lại mật khẩu"),
});
