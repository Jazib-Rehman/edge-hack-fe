import { Column } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const data = [
    { type: 'Active', value: 0.16 },
    { type: '4-10秒', value: 0.125 },
    { type: '11-30秒', value: 0.24 },
    { type: '31-60秒', value: 0.19 },
    { type: '1-3分', value: 0.22 },
    { type: '3-10分', value: 0.05 },
    { type: '10-30分', value: 0.01 },
    { type: '30+分', value: 0.015 },
];

const ColumnChart = ({ candidatescore }) => {
    const config = {
        data,
        xField: 'type',
        yField: 'value',
        style: {
            fill: ({ type }) => {
                if (type === '10-30分' || type === '30+分') {
                    return '#22CBCC';
                }
                return '#2989FF';
            },
        },
        // width: 400,
        height: 300,
        label: {
            text: (originData) => {
                const val = parseFloat(originData.value);
                if (val < 0.05) {
                    return (val * 100).toFixed(1) + '%';
                }
                return '';
            },
            offset: 10,
        },
        legend: false,
    };
    return <Column {...config} />;
};

export default ColumnChart;