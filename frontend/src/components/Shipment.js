import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'

const Shipment = () => {
  const navigate = useNavigate();
  const shipmentSchema = Yup.object().shape({
    senderName: Yup.string().required('Sender Name is required'),
    senderStreet: Yup.string().required('Sender street Address is required'),
    senderCity: Yup.string().required('Sender cith is required'),
    senderState: Yup.string().required('Sender state is required'),
    senderZip: Yup.string().required('Sender zip code is required'),
    senderCountry: Yup.string().required('Sender country is required'),
    senderEmail: Yup.string().required('Sender email is required'),
    senderPhone: Yup.string().required('Sender Phone number is required'),
    reciverName: Yup.string().required('Reciver Name is required'),
    reciverStreet: Yup.string().required('Reciver Street Address is required'),
    reciverCity: Yup.string().required('Reciver City is required'),
    reciverState: Yup.string().required('Reciver State is required'),
    reciverZip: Yup.string().required('Reciver Zip Code is required').matches(/^[0-9]{5}$/, 'Postal Code must be 5 digits'),
    reciverCountry: Yup.string().required('Reciver Country is required'),
    parcelLength: Yup.number().required('Length is required').positive('Length must be positive'),
    parcelWidth: Yup.number().required('Width is required').positive('Width must be positive'),
    parcelHeight: Yup.number().required('Height is required').positive('Height must be positive'),
    parcelWeight: Yup.number().required('Weight is required').positive('Weight must be positive'),
  });
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/shipment`, values);
      if (response.data.status) {
        resetForm();
        setSubmitting(false);
        toast.success( response.data.message, {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        navigate(`/label/${response.data.data}`)
      } else {
        toast.error(response.data.message)
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
          senderName:'',
          senderStreet:'',
          senderCity:'',
          senderState:'',
          senderZip:'',
          senderCountry:'',
          senderEmail:'',
          senderPhone:'',
          reciverName:'',
          reciverStreet: '',
          reciverCity: '',
          reciverState: '',
          reciverZip: '',
          reciverCountry: '',
          parcelLength: '',
          parcelWidth: '',
          parcelHeight: '',
          parcelWeight:''
        }}
        validationSchema={shipmentSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='shipment-container'>
            <h1>Shipment Form</h1>
            <div className='input-container'>
              <div className='form-fields'>
                <label htmlFor="senderName" className='label'>Sender Name</label>
                <Field type="text" name="senderName" className='field'/>
                <ErrorMessage name="senderName" component="small" className='error' />
              </div>
              <div className='form-fields'>
                <label htmlFor="senderStreet" className='label'>Sender Street Address</label>
                <Field type="text" name="senderStreet" className='field'/>
                <ErrorMessage name="senderStreet" component="small" className='error' />
              </div>
              <div className='form-fields'>
                <label htmlFor="senderCity" className='label'>Sender City</label>
                <Field type="text" name="senderCity" className='field'/>
                <ErrorMessage name="senderCity" component="small" className='error' />
              </div>
              <div className='form-fields'>
                <label htmlFor="senderState" className='label'>Sender State</label>
                <Field type="text" name="senderState" className='field'/>
                <ErrorMessage name="senderState" component="small" className='error' />
              </div>
              <div className='form-fields'>
                <label htmlFor="senderZip" className='label'>Sender Zip Code</label>
                <Field type="text" name="senderZip" className='field'/>
                <ErrorMessage name="senderZip" component="small" className='error' />
              </div>
              <div className='form-fields'>
                <label htmlFor="senderCountry" className='label'>Sender Country</label>
                <Field type="text" name="senderCountry" className='field'/>
                <ErrorMessage name="senderCountry" component="small" className='error' />
              </div>
              <div className='form-fields'>
                <label htmlFor="senderEmail" className='label'>Sender Email</label>
                <Field type="text" name="senderEmail" className='field'/>
                <ErrorMessage name="senderEmail" component="small" className='error' />
              </div>
              <div className='form-fields'>
                <label htmlFor="senderPhone" className='label'>Sender Phone</label>
                <Field type="text" name="senderPhone" className='field'/>
                <ErrorMessage name="senderPhone" component="small" className='error' />
              </div>
              <div className='form-fields'>
                <label htmlFor="reciverName" className='label'>Reciver Name</label>
                <Field type="text" name="reciverName" className='field'/>
                <ErrorMessage name="reciverName" component="small" className='error' />
              </div>

              <div className='form-fields'>
                <label htmlFor="reciverStreet" className='label'>Reciver Street Address</label>
                <Field type="text" name="reciverStreet" className='field'/>
                <ErrorMessage name="reciverStreet" component="small" className='error' />
              </div>

              <div className='form-fields'>
                <label htmlFor="reciverCity" className='label'>Reciver City</label>
                <Field type="text" name="reciverCity" className='field'/>
                <ErrorMessage name="reciverCity" component="small" className='error' />
              </div>

              <div className='form-fields'>
                <label htmlFor="reciverState" className='label'>Reciver State</label>
                <Field type="text" name="reciverState" className='field'/>
                <ErrorMessage name="reciverState" component="small" className='error' />
              </div>

              <div className='form-fields'>
                <label htmlFor="reciverZip" className='label'>Reciver Zip Code</label>
                <Field type="text" name="reciverZip" className='field'/>
                <ErrorMessage name="reciverZip" component="small" className='error' />
              </div>

              <div className='form-fields'>
                <label htmlFor="reciverCountry" className='label'>Reciver Country</label>
                <Field type="text" name="reciverCountry" className='field'/>
                <ErrorMessage name="reciverCountry" component="small" className='error' />
              </div>

              <div className='form-fields'>
                <label htmlFor="parcelLength" className='label'>Parcel Length (IN)</label>
                <Field type="number" name="parcelLength" className='field'/>
                <ErrorMessage name="parcelLength" component="small" className='error' />
              </div>

              <div className='form-fields'>
                <label htmlFor="parcelWidth" className='label'>Parcel Width (IN)</label>
                <Field type="number" name="parcelWidth" className='field'/>
                <ErrorMessage name="parcelWidth" component="small" className='error' />
              </div>

              <div className='form-fields'>
                <label htmlFor="parcelHeight" className='label'>Parcel Height (IN)</label>
                <Field type="number" name="parcelHeight" className='field'/>
                <ErrorMessage name="parcelHeight" component="small" className='error' />
              </div>

              <div className='form-fields'>
                <label htmlFor="parcelWeight" className='label'>Parcel Weight (kg)</label>
                <Field type="number" name="parcelWeight" className='field'/>
                <ErrorMessage name="parcelWeight" component="small" className='error' />
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
