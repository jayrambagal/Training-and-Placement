import React, { useState } from 'react';
import "./form.css";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import Onclick from "./onclick";    

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    
    <div className="all_input">
      <label htmlFor={props.id || props.name} className="form-label">
        {label}
      </label>
      <input
        className="inputtt form-control form-control-sm"
        required
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div className="all_checkbox">
      <label className="form-label">
        <input type="checkbox" {...field} {...props} required/>
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="all_select">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const Fillform = () => {
  const [flag, setflag] = useState(true);
  const [data, setdata] = useState();
  return (
    <div className='form_container'>
    <div className="main">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          cgpa: "",
          enrollmentNo: "",
          acceptedTerms: false, // added for our checkbox
          jobType: "", // added for our select
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          phoneNo: Yup.string()
            .max(10, "Must be 10 number only")
            .min(10, "phone no will be minimum 10 digit")
            .required("required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          cgpa: Yup.string().required("required"),
          enrollmentNo: Yup.string().required("required"),
          // jobType: Yup.string()
          //   .oneOf(
          //     ["designer", "development", "product", "other"],
          //     "Invalid Job Type"
          //   )
          //   .required("Required"),
          University: Yup.string().required("required"),
          qualification: Yup.string().required("required"),
          major: Yup.string().required("required"),
          grades: Yup.string().required("required"),
          yearofpassing: Yup.string().required("required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            // <Onclick />
            // console.log(values)

            setdata(values);
            setflag(!flag);
            setSubmitting(false);
          }, 400);
        }}
      >
        <div>
          {flag ? (
            <Form className="main_container">
              <div className="text-center bg-dark text-light p-2 mb-3">
                <h4>Personal Details</h4>
              </div>

              <div className="persnol__info">
                <div className="row_container">
                  <MyTextInput
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="Jane"
                  />

                  <MyTextInput
                    label="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
                <div className="row_container">
                  <MyTextInput
                    label="Phone No"
                    name="phoneNo"
                    type="tel"
                    placeholder="+910000000000"
                  />

                  <MyTextInput
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="jane@formik.com"
                  />
                </div>
                <div className="row_container">
                  <MySelect label="Current Year" name="current_year">
                    <option value="designer">First Year</option>
                    <option value="development">Second Year</option>
                    <option value="product">Third Year</option>
                    <option value="other">Fourth Year</option>
                  </MySelect>

                  <MySelect label="Department" name="Branch">
                    <option value="designer">Computer Science</option>
                    <option value="development">Information Technology</option>
                    <option value="product">Artifitial Intelligenge</option>
                    <option value="other">Data Science</option>
                  </MySelect>
                </div>
                <div className="row_container">
                  <MyTextInput
                    label="Current CGPA"
                    name="cgpa"
                    type="text"
                    placeholder=""
                  />
                  <MyTextInput
                    label="Enrollment No"
                    name="enrollmentNo"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="text-center bg-dark text-light p-2 mb-3">
                <h4>Educational Details</h4>
              </div>

              <div className="persnol__info">
                <div className="row_container">
                  <MyTextInput
                    label="University/Institute/Board"
                    name="University"
                    type="text"
                    placeholder="University name"
                  />

                  <MyTextInput
                    label="Qualification"
                    name="qualification"
                    type="text"
                    placeholder="Qualification"
                  />
                </div>
                <div className="row_container">
                  <MyTextInput
                    label="Major"
                    name="major"
                    type="text"
                    placeholder=""
                  />
                  <MyTextInput
                    label="Grades"
                    name="grades"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div className="row_container">
                  <MyTextInput
                    label="Year of passing"
                    name="yearofpassing"
                    type="text"
                    placeholder="eg. 2020"
                  />
                </div>
              </div>

              <div className="text-center bg-dark text-light p-2 mb-3">
                <h4>Project Details</h4>
              </div>
              <div className="persnol__info">
              <div className="row_container">
              <MyTextInput
                label="Name of the Project"
                name="nameofProject"
                type="text"
                placeholder=""
              />
              <MyTextInput
                label="Used Technology"
                name="technology"
                type="text"
                placeholder=""
              />
            </div>
            <div className="row_container">
              <MyTextInput
                label="Duration"
                name="duration"
                type="text"
                placeholder="06/2020 to 09/2020"
              />
              <MyTextInput
                label="Summary"
                name="summary"
                type="text"
                placeholder=""
              />
            </div>
            <div className="row_container"></div>
              </div>
              

              <MyCheckbox name="acceptedTerms">
                I accept the terms and conditions
              </MyCheckbox>

              <button type="submit" className='submit_btn btn-secondary btn-sm'>Submit</button>
            </Form>
          ) : (
            <Onclick value={data} />
          )}
        </div>
      </Formik>
    </div>
    </div>
    
  );
};
export default Fillform;

