import axios from "axios";
import toast from "react-hot-toast";



const emailTemplate = (data) => `
  <html>
    <body>
      <h2>New Inquiry Received</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Interested Products:</strong> ${data.interested_products}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    </body>
  </html>
`;

export const handleSendEmail = async (values, redirect, formik = false) => {
  const user_email = values.email
  const psbr_email = "thirunavukarasu.muthuvenkatesan@capillarytech.com"
  try {
    const apiUrl = 'https://psbr-exports.onrender.com/send-email';
    const payload = {
      to: user_email,
      subject: 'Thank you for reaching out.',
      message: 'We will get back to you as soon as possible.',
    };
    const promise = axios.post(apiUrl, payload);
    const psbr_payload = {
      to: psbr_email,
      subject: `User Enquiry`,
      message: emailTemplate(values),
    };
    const psbr_promise = await axios.post(apiUrl, psbr_payload);
    if (psbr_promise.status === 200) {
      toast.success('Email sent successfull!')
      if (redirect) {
        setTimeout(() => {
          window.location.href = '/';
        }, 2000)
      } else {
        formik.resetForm()
      }
    } else {
      toast.error('Try again after sometime.')
    }
  } catch (error) {
    console.error('Error sending email:', error);
  }
};