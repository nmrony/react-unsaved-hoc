import { Field, Form } from 'formik';
import React from 'react';
import warnAboutUnsavedState from './warnAboutUnsavedState';

const SampleEmailForm = ({ touched, errors, isSubmitting }) => (
  <Form>
    <div className="field">
      <div className="control">
        <label className="label">Email</label>
        <Field className="input" type="email" name="email" placeholder="email" />
        {touched.email && errors.email && <p className="help is-danger">{errors.email}</p>}
      </div>
    </div>
    <div className="control">
      <br />
      <button type="submit" className="button is-primary" disabled={!!Object.keys(errors).length || isSubmitting}>
        Submit
      </button>
    </div>
  </Form>
);

export default warnAboutUnsavedState(SampleEmailForm);
