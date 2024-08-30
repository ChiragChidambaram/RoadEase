import * as Yup from 'yup';


export const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, 'First name must be at least 2 characters')
      .required('First name is required'),
    lastname: Yup.string()
      .min(2, 'Last name must be at least 2 characters')
      .required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    // vehicaltype: Yup.string().required('Vehicle type is required'),
    // RegistrationNo: Yup.string().required('Registration number is required'),
  });

  export const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
  });

  export const ReportSchema = Yup.object().shape({
    issue: Yup.string().required('Issue is required'),
    description: Yup.string().required('Description is required'),
  });
