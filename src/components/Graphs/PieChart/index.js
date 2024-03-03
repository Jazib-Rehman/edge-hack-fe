// import React from 'react';
// import { Pie } from '@ant-design/plots';

// const PieChart = ({ allScore }) => {

//     const array = Object.entries(allScore).map(([key, value]) => ({
//         type: parseInt(key),
//         value: parseInt(value),
//     }));

//     const config = {
//         data: array,
//         width: 300,
//         height: 300,
//         angleField: 'value',
//         colorField: 'type',
//         label: {
//             text: 'value',
//             style: {
//                 fontWeight: 'bold',
//             },
//         },
//         legend: {
//             color: {
//                 title: false,
//                 position: 'top',
//                 rowPadding: 5,
//             },
//         },
//     };
//     return <Pie {...config} />;
// };
// export default PieChart;


import React from 'react';
import { Pie } from '@ant-design/plots';

const DonutGraph = ({ allScore }) => {

    const array = Object.entries(allScore).map(([key, value]) => ({
        type: parseInt(key),
        value: parseInt(value),
    }));

    const config = {
        data: array,
        width: 300,
        height: 300,
        angleField: 'value',
        colorField: 'type',
        // paddingRight: 100,
        innerRadius: 0.6,
        label: {
            formatter: (value, item) => {
                return `${item.value}`;
            },
            style: {
                fontWeight: 'bold',
            },
        },
        legend: {
            color: {
                title: false,
                position: 'top',
                rowPadding: 5,
            },
        },
        tooltip: {
            formatter: (datum) => {
                return { name: datum.type, value: datum.value };
            },
        },
        annotations: [
            {
                type: 'text',
                style: {
                    text: 'Talent Score',
                    x: '50%',
                    y: '50%',
                    textAlign: 'center',
                    fontSize: 16,
                    fontStyle: 'bold',
                },
            },
        ],
    };
    return <Pie {...config} />;
};
export default DonutGraph;