import * as yup from "yup";

export const schema = yup.object({
  username: yup.string().required("Tên đăng nhập không bỏ trống"),
  password: yup.string().required("Mật khẩu không bỏ trống"),
  remember: yup.boolean()
});
