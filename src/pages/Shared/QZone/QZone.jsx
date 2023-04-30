import React from 'react';
import qZoneImg1 from '../../../assets/qZone1.png';
import qZoneImg2 from '../../../assets/qZone2.png';
import qZoneImg3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <>
            <img className='img-fluid' src={qZoneImg1} alt="" />
            <img className='img-fluid' src={qZoneImg2} alt="" />
            <img className='img-fluid' src={qZoneImg3} alt="" />
        </>
    );
};

export default QZone;