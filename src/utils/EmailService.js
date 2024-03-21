import emailjs from 'emailjs-com';
import toast from "react-hot-toast";



const emailTemplate = (data) => `
  Name : ${data.name}
  Email : ${data.email}
  Phone : ${data.phone}
  Interested Products: ${data.interested_products}
  Message : ${data.message}
`;

export const handleSendEmail = async (values, redirect, formik = false) => {  
      emailjs.send("service_puz2r3k","template_dw93vk7",{
        name: values.name,
        email: values.email,
        message: emailTemplate(values),
        },'3p9sqrNbko9ZqRROp').then(
          () => {
            toast.success('Email sent successfull!')
            if (redirect) {
              setTimeout(() => {
                window.location.href = '/';
              }, 1000)
            } else {
              formik.resetForm()
            }
          },
          (error) => {
            toast.error('Please reach out through mobile.')
            setTimeout(() => {
              window.location.href = '/';
            }, 1000)
          },
        );
};