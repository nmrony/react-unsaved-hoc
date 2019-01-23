import { Formik } from 'formik';
import React from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import * as Yup from 'yup';
import SimpleEmailForm from './ContactFormComponent';
import NavigationAlertPrompt from './NavigationAlertPrompt';
function showAlert(onConfirm = () => {}, onCancel = () => {}) {
  Swal.fire({
    title: 'Are you sure?',
    text: 'All your unsaved data will be gone forever.',
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Ok',
    cancelButtonText: 'Cancel'
  }).then(({ value }) => (value ? onConfirm() : onCancel()));
}

const FormikFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('email is required')
});
const Contact = () => (
  <div className="section">
    <Formik
      initialValues={{ email: '' }}
      validationSchema={FormikFormValidationSchema}
      onSubmit={(values, { resetForm, /*setErrors,*/ setSubmitting }) => {
        setSubmitting(false);
        resetForm();
        console.log('submitted value', values);
      }}
    >
      {props => (
        <>
          {/* <EmailFormWithWarning {...props} warningMessage="This message is showing from props and i18n friendly" /> */}
          <NavigationAlertPrompt when={props.dirty}>
            {(isOpen, onConfirm, onCancel) => {
              if (isOpen) {
                showAlert(onConfirm, onCancel);
              }
              return <SimpleEmailForm {...props} />;
            }}
          </NavigationAlertPrompt>
          <br />
          <h3>
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
