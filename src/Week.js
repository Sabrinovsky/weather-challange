import React from 'react';
import './index.css';

const bars = (umi) =>
    {
        return(
            <>
                <div className={'umi-bar ' + ((umi/20) > 0 ? 'active' : '') } />
                <div className={'umi-bar ' + (Math.floor(umi/20) >= 1 ? 'active' : '') } />
                <div className={'umi-bar ' + (Math.floor(umi/20) >= 3 ? 'active' : '') } />
                <div className={'umi-bar ' + (Math.floor(umi/20) >= 4 ? 'active' : '') } />
                <div className={'umi-bar ' + (Math.floor(umi/20) >= 5 ? 'active' : '') } />
            </>
        )
    }

const Week = ({ data } ) =>

<div className='inline-block' key={data.day}>
        <div className='bg-day pd-default'>
            {data.day}
        </div>
        <div className='pd-default border-bot high'>
            <i className="fa fa-caret-up"/>
            {data.max}º C
        </div>
        <div className='pd-default border-bot low'>
            <i className="fa fa-caret-down"/>
            {data.min}º C
        </div>
        <div className='pd-default border-bot'>
            {bars(data.umi)}
            {data.umi}%
        </div>
    </div>


export default Week;