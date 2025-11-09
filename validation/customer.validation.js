import * as yup from "yup";

const customerSchema = yup.object().shape({
  firstName: yup.string().required("نام الزامی است.").max(50),
  lastName: yup.string().required("نام خانوادگی الزامی است.").max(50),
  phone: yup
    .string()
    .required("شماره همراه الزامی است.")
    .matches(/^09\d{9}$/, "شماره تلفن معتبر نیست."),
  email: yup.string().email("آدرس ایمیل معتبر نیست."),
  // password: yup
  //   .string()
  //   .required("Password is required")
  //   .min(6, "Password must be at least 6 characters"),
  birthdate: yup.date(),
});

export default customerSchema;
