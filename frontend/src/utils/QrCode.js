import {QRCodeSVG} from 'qrcode.react';
const QrCode = ({trackingId, senderInformation, recipentInformation}) => {
    const qrData = JSON.stringify({
        trackingId: trackingId,
        senderInformation: senderInformation,
        recipentInformation:recipentInformation 
      });
    return(
        <QRCodeSVG 
        value={qrData} 
        size={100}
        bgColor="#ffffff"
        fgColor="#000000"
        level="H"
        />
    );
}

export default QrCode; 