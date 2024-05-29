import React from 'react';
import WalletIcon from '../assets/icons/WalletIcon.svg?react';
import CaretRight from '../assets/icons/CaretRight.svg?react';
import Warning from '../assets/icons/Warning.svg?react'

export const Wallet = () => {
    return <div style={{ padding: '5px', marginTop: '25%' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <WalletIcon width={60} height={50} />
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginLeft: '15px'}}>
                <h3 className='header' style={{ margin: 0 }}>65,400 SAR</h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: '5px' }}>
                    <p className='link-sm'>
                        Account Balance
                    </p>
                    <CaretRight height={15} width={15} />
                </div>
            </div>
        </div>
        <div style={{ display: 'flex', margin: '30px 0px', justifyContent: 'center' }}>
            <button className={'button'} style={{ marginRight: '10px', flex: 1 }}>
                Deposit
            </button>
            <button className={'button-secondary'} style={{ flex: 1 }}>
                Withdrawl
            </button>
        </div>
        <div style={{ display: 'flex' }}>
            <Warning height={50} width={50} />
            <p style={{ color: 'grey', marginLeft: '10px' }}> To withdraw more than <b>10,000 SAR</b> you need to verify your account</p>
        </div>
    </div>
}