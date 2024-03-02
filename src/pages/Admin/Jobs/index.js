import { Button, Card, Divider, Row, Typography } from "antd";
import JobsTable from "../../../components/JobsTable";
import { useEffect, useState } from "react";
import { getAllJobs } from "../../../services/api";
import JobsModal from "../../../components/Modals/JobsModal";

const Jobs = () => {
    const [jobsList, setJobsList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getJobsList = async () => {
        try {
            const { data, status } = await getAllJobs()
            console.log({ data })
        } catch (error) {
            console.log({ error })
        }
    }

    useEffect(() => {
        getJobsList()
    }, [])

    return <div className="w-full">
        <Card className="w-full" >
            <Row justify={"space-between"} className="py-2 w-full">
                <Typography.Text className="text-2xl font-semibold">
                    Jobs
                </Typography.Text>
                <Button onClick={() => setIsModalOpen(true)}>Create New +</Button>
            </Row>
            <Divider style={{ margin: 0 }} />
            <JobsTable />
            <JobsModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </Card>
    </div>
}

export default Jobs;