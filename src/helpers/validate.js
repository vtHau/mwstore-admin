import * as Yup from "yup";

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
