export const formatPrice = (value) => Number(value).toLocaleString("en") + " đ";
export const formatPhone = (str) => "..." + str.substring(str.length - 3);
export const formatString = (str, length = 30) =>
  str.substring(0, length) + "...";
