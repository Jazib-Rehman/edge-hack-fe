import React from 'react';
import { Space, Table, Tag } from 'antd';
import moment from 'moment';

const CandidatesTable = () => {
    const columns = [
        {
            title: 'First name',
            dataIndex: 'first_name ',
            key: 'first_name ',
        },
        {
            title: 'Last name',
            dataIndex: 'last_name ',
            key: 'last_name ',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone ',
            key: 'phone ',
        },
        {
            title: 'Education',
            dataIndex: 'education ',
            key: 'education ',
        },
        {
            title: 'Experience',
            dataIndex: 'experience ',
            key: 'experience ',
        },
        {
            title: 'LinkedIn',
            dataIndex: 'linkedin',
            key: 'linkedin',
            render: (text) => <a>View Profile</a>,
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

export default CandidatesTable;