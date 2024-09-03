import Barcode from 'react-barcode';
const BarCode = ({trackingId}) => {
    return(
        <>
        <Barcode value={trackingId} fontSize={10} />
        </>
    );
}

export default BarCode; 