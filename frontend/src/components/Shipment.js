import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {toast} from 'react-toastify'

const Shipment = () => {
  const shipmentSchema = Yup.object().shape({
    recipientName: Yup.string().required('Recipient Name is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    postalCode: Yup.string().required('Postal Code is required').matches(/^[0-9]{5}$/, 'Postal Code must be 5 digits'),
    country: Yup.string().required('Country is required'),
    weight: Yup.number().required('Weight is required').positive('Weight must be positive'),
    trackingNumber: Yup.string().required('Tracking Number is required')
  });
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/shipment`, values);
      if (response.status) {
        console.log('hyeeeeeeeeeeeeee')
        resetForm();
        setSubmitting(false);
        toast.success('Shipment created successfully!', {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      } else {
        toast.error('Shipment not created!')
        setSubmitting(false)
      }
    } catch (error) {
      toast.error('Internal server error')
      setSubmitting(false)
    }
  }
  return (
    <div className='shipment-div'>
      <Formik
        initialValues={{
          recipientName: '',
          address: '',
          city: '',
          state: '',
          postalCode: '',
          country: '',
          weight: '',
          trackingNumber: '',
        }}
        validationSchema={shipmentSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='shipment-container'>
            <h1>Shipment Form</h1>
            <div className='input-container'>
              <div className='form-fields'>
                <label htmlFor="recipientName" className='label'>Recipient Name</label>
                <Field type="text" name="recipientName" className='field'/>
                <ErrorMessage name="recipientName" component="small" className='error' />
              </div>

              <div className='form-fields'>
                <label htmlFor="address" className='label'>Address</label>
                <Field type="text" name="address" className='field'/>
                <ErrorMessage name="address" component="small" className='error' />
              </div>

              <div className='form-fields'>
                <label htmlFor="city" className='label'>City</label>
                <Field type="text" name="city" className='field'/>
                <ErrorMessage name="city" component="small" className='error' />
              </div>

              <div className='form-fields'>
                <label htmlFor="state" className='label'>State</label>
                <Field type="text" name="state" className='field'/>
                <ErrorMessage name="state" component="small" className='error' />
              </div>

              <div className='form-fields'>
                <label htmlFor="postalCode" className='label'>Postal Code</label>
                <Field type="text" name="postalCode" className='field'/>
                <ErrorMessage name="postalCode" component="small" className='error' />
              </div>

              <div className='form-fields'>
                <label htmlFor="country" className='label'>Country</label>
                <Field type="text" name="country" className='field'/>
                <ErrorMessage name="country" component="small" className='error' />
              </div>

              <div className='form-fields'>
                <label htmlFor="weight" className='label'>Weight (kg)</label>
                <Field type="number" name="weight" className='field'/>
                <ErrorMessage name="weight" component="small" className='error' />
              </div>

              <div className='form-fields'>
                <label htmlFor="trackingNumber" className='label'>Tracking Number</label>
                <Field type="text" name="trackingNumber" className='field'/>
                <ErrorMessage name="trackingNumber" component="small" className='error' />
              </div>
            </div>

            <button type="submit" disabled={isSubmitting} className='btn'>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Shipment;
