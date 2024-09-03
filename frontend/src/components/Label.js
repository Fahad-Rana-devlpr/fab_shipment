import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {toast} from 'react-toastify'
import QrCode from '../utils/QrCode';
import BarCode from '../utils/BarCode';

const Label = () => {
    const [shippingData, setShippingData] = useState('');
    const {id} = useParams();
    useEffect(() =>{
        fetchData();
    },[])

    const fetchData = async() => {
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
        <div className='shipping-label-container'>
            <div className='shipping-label'>
                <div className='reciver-sender-info'>
                    <div className='sender-info'>
                        <div>
                            <p>RETURNS DEPT.</p>
                            <p>{shippingData?.senderName}</p>
                            <p>{shippingData?.senderAddress}</p>
                        </div>
                        <div>
                            <strong>{shippingData?.weight} Kg</strong>
                        </div>
                    </div>
                    <div className='reciever-info'>
                        <h4>SHIP TO:</h4>
                        <p>{shippingData?.recipientName}</p>
                        <p>{shippingData?.address}, {shippingData?.postalCode}, {shippingData?.city}, {shippingData?.state}, {shippingData?.country}</p>
                    </div>
                </div>
                <div className='codes'>
                    <div className='qr-code'>
                        <QrCode 
                            trackingId={shippingData?.trackingNumber}
                            senderInformation={shippingData?.senderName}
                            recipentInformation={shippingData?.recipentName}
                        />
                    </div>
                    <div>
                        <BarCode trackingId={shippingData?.trackingNumber}/>
                    </div>
                </div>
            </div>
            <div className='btn-div'>
                <button className='btn' onClick={() => {
                    window.print();
                }}>Print</button>
            </div>
        </div>
        : 
        <div className='loading'>
            Loading...
        </div>
    }
    </>
  );
}

export default Label;
