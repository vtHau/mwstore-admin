export const formatPrice = (value) => Number(value).toLocaleString("en") + " đ";
export const formatPhone = (str) => "..." + str.substring(str.length - 3);
