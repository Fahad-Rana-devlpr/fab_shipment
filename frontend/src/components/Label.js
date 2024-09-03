import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify'

const Label = () => {
    const [shippingData, setShippingData] = useState('');
    const { id } = useParams();
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/shipment/${id}`);
            if (response.data.status) {
                setShippingData(response.data.data)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            toast.error('Internal server error')
        }
    }

    return (
        <>
            {
                shippingData ?
                    <iframe
                        src={shippingData?.labelUrl}
                        className='shipping-label'
                        title="Shipping Label"
                    ></iframe>
                    :
                    <div className='loading'>
                        Loading...
                    </div>
            }
        </>
    );
}

export default Label;
