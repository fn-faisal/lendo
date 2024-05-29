import React from 'react';
import { Card } from '../containers/Card';
import { Collapseable } from './Collapseable';
import { Chart as ChartJS, registerables } from 'chart.js';
import { InvestedChart } from './InvestedChart';
import Switch from './Switch';
import styles from '../styles/Dashboard.module.scss';
import { RiskChart } from './RiskChart';

ChartJS.register(...registerables);

const InvestedData = [
    {
        id: 1,
        month: 'Jan',
        invested: 5000,
    },
    {
        id: 2,
        month: 'Feb',
        invested: 28000,
    },
    {
        id: 3,
        month: 'March',
        invested: 18000,
    },
    {
        id: 4,
        month: 'April',
        invested: 13000,
    },
    {
        id: 5,
        month: 'May',
        invested: 29000,
    },
    {
        id: 6,
        month: 'June',
        invested: 30000,
    },
]

const investedChartData = {
    labels: InvestedData.map(o => o.month),
    datasets: [
        {
            label: 'Spent',
            backgroundColor: '#2D91FE',
            borderColor: 'rgb(255, 255, 255, 0)',
            borderWidth: 1,
            data: InvestedData.map(o => o.invested)
        },
        {
            label: 'Expected',
            backgroundColor: '#4BDFFF',
            borderColor: 'rgb(255, 255, 255, 0)',
            borderWidth: 1,
            data: InvestedData.map(o => o.invested)
        }
    ]
}

const riskChartData = {
    labels: ['A', 'B', 'C', 'D'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [45.7, 51.5, 23.2, 51.5],
        backgroundColor: ['#2D91FE', '#4BDFFF', '#FFC359', '#FF6769'],
        hoverOffset: 4,
      },
    ],
  };

export const Dashboard = () => {

    return <div className={styles.container}>
        <div className={styles.title}>
            <h2 className='header'>Auto Investment</h2>
            <Switch />
        </div>
        <div className={styles.content}>
            <Card>
                <div style={{ margin: '40px', display: 'flex' }}>
                    <div style={{ marginRight: '30px', padding: '40px', backgroundColor: '#2D91FE', borderRadius: '15px', color: 'white', boxShadow: '2px 4px 4px 1px rgba(0, 0, 0, 0.2)'}}>
                        <h3 className='header'>Conservative</h3>
                        <h2>10-14%</h2>
                        <p >Intereset Rate</p>
                    </div>
                    <div style={{ paddingLeft: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '100%' }}>
                        <div style={{ display: 'flex'}}>
                            <div style={{ marginRight: '5rem' }}>
                                <h3 className='header green'>Active</h3>
                                <p className='link-sm'>status</p>
                            </div>
                            <div style={{ marginRight: '5rem' }}>
                                <h3 className='header'>1500 SAR</h3>
                                <p className='link-sm'>Max Investment</p>
                            </div>
                            <div style={{ marginRight: '5rem' }}>
                                <h3 className='header'>26</h3>
                                <p className='link-sm'>Loans Funded</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div className='link-sm'>
                                * Strategy started at 20th March 2021
                            </div>
                            <div>
                                <button className={'button'} style={{ marginRight: '10px', backgroundColor: '#FF6769' }}>
                                    Stop
                                </button>
                                <button className={'button-secondary'}>
                                    Change Settings
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
            <div style={{ margin: '20px 0px', display: 'flex', width: '100%' }}>
                <div className='card' style={{ flex: 1, padding: '30px', justifyContent: 'center' }}>
                    <h4 className='header' style={{ marginBottom: '20px' }}>Invested</h4>
                    <InvestedChart
                        data={investedChartData}
                    />
                    
                </div>
                <div className='card' style={{ flex: 1, padding: '30px', justifyContent: 'center', marginLeft: '20px' }}>
                    <h4 className='header' >Risk Score Distribution</h4>
                    <div style={{ maxHeight: '250px', width: '100%', display: 'flex', alignItems: 'center' }}>
                        <RiskChart data={riskChartData} />
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '40px' }}>
                <h2 className='header'>You Might want to know!</h2>
                <Collapseable 
                    title='Why should I trust this tool'
                    content='Lorem ipsum....'
                />
                <hr className={styles.seperator} />
                <Collapseable 
                    title='Why should I trust this tool'
                    content='Lorem ipsum....'
                />
                <hr className={styles.seperator} />
                <Collapseable 
                    title='Why should I trust this tool'
                    content='Lorem ipsum....'
                />
            </div>
        </div>
    </div>
}