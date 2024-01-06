import * as Yup from 'yup';

export const supportValidation = Yup.object({
    phone: Yup.string()
        .required("Required!"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Required!"),
    name: Yup.string()
        .required("Required!"),
    interested_products: Yup.string()
        .required("Required!"),
    message: Yup.string()
        .required("Required!")
})