import { ChartData } from 'chart.js';
import React, { FC } from 'react';
import { Bar } from 'react-chartjs-2';

type InvestedChartProps = {
    data: ChartData<"bar", any, unknown>
}

export const InvestedChart: FC<InvestedChartProps> = ({data}) => {
    return (
        <Bar 
            options={{
                responsive: true,
                scales: {
                    y: {
                        ticks: {
                        callback: function(value) {
                            if ( typeof value ==='string' )
                                return value;
                            if (value === 0) {
                            return '0 SAR';
                            } else {
                            return (value / 1000) + 'K SAR';
                            }
                        }
                        },
                    },
                }
            }}
            data={data} />
    );
}