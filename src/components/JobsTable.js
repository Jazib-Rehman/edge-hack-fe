import React from 'react';
import { Space, Table, Tag } from 'antd';
import moment from 'moment';

const JobsTable = () => {
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
        },
        {
            title: 'Open date',
            dataIndex: 'open_date',
            key: 'open_date',
            render: (text) => <a>{moment(text).format("DD/MM/YYYY")}</a>,
        },
        {
            title: 'Location',
            dataIndex: 'location ',
            key: 'location ',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Dead line ',
            dataIndex: 'dead_line',
            key: 'dead_line',
            render: (text) => <a>{moment(text).format("DD/MM/YYYY")}</a>,
        },
        // {
        //     title: 'Tags',
        //     key: 'tags',
        //     dataIndex: 'tags',
        //     render: (_, { tags }) => (
        //         <>
        //             {tags.map((tag) => {
        //                 let color = tag.length > 5 ? 'geekblue' : 'green';
        //                 if (tag === 'loser') {
        //                     color = 'volcano';
        //                 }
        //                 return (
        //                     <Tag color={color} key={tag}>
        //                         {tag.toUpperCase()}
        //                     </Tag>
        //                 );
        //             })}
        //         </>
        //     ),
        // },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    {/* <a>Invite {record.name}</a> */}
                    <a>View</a>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    return <Table columns={columns} dataSource={data} />;
}

export default JobsTable;