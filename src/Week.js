import React, { useState } from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './index.css';
import BootstrapTable from 'react-bootstrap-table-next'

const Week = ( props ) =>
    <div className='div-father inline-block'>
        <div className='bg-day pd-default'>
            {props.day}
        </div>
        <div className='pd-default border-bot high'>
            21º C
        </div>
        <div className='pd-default border-bot low'>
            15º C
        </div>
        <div className='pd-default border-bot'>
            18%
        </div>
    </div>


export default Week;