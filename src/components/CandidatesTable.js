import React from 'react';
import { Space, Table, Tag } from 'antd';
import moment from 'moment';

const CandidatesTable = ({ candidates }) => {
    const columns = [
        {
            title: 'Full Name',
            dataIndex: 'first_name',
            key: 'first_name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Experience',
            dataIndex: 'experience',
            key: 'experience',
        },
        {
            title: 'Relevancy Score',
            dataIndex: 'score',
            key: 'score',
            render: (text) => <p>{Math.ceil(text)}</p>,
        },
    ];
    return <Table columns={columns} dataSource={candidates} />;
}

export default CandidatesTable;