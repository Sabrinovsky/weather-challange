import React, { useState } from 'react';
import './index.css';

const Week = ({ data } ) =>

<div className='inline-block' key={data.day}>
        <div className='bg-day pd-default'>
            {data.day}
        </div>
        <div className='pd-default border-bot high'>
            {data.max}º C
        </div>
        <div className='pd-default border-bot low'>
            {data.min}º C
        </div>
        <div className='pd-default border-bot'>
            {data.umi}%
        </div>
    </div>


export default Week;