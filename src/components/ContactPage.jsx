import { Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import EmailFormWithWarning from './ContactFormComponent';

const WifiFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('email is required')
});
const Contact = () => (
  <div className="section">
    <Formik
      initialValues={{ email: '' }}
      validationSchema={WifiFormValidationSchema}
      onSubmit={(values, { resetForm, /*setErrors,*/ setSubmitting }) => {
        setSubmitting(false);
        resetForm();
        console.log('submitted value', values);
      }}
    >
      {props => (
        <>
          <EmailFormWithWarning {...props} warningMessage="This message is showing from props and i18n friendly" />
          <br />
          <h3>
            Debug
            <strong>Debug</strong>
          </h3>
          <pre>
            <strong>Form State: </strong>
            {JSON.stringify(props, null, 2)}
          </pre>
        </>
      )}
    </Formik>
  </div>
);

export default Contact;
