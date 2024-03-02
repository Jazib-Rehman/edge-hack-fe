import { Button, Card, Divider, Row, Typography } from "antd";
import JobsTable from "../components/JobsTable";
import { useEffect, useState } from "react";
import { getAllJobs } from "../services/api";
import JobsModal from "../components/Modals/ApplyJobModal";

const Home = () => {
    const [jobsList, setJobsList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id, setId] = useState(false);

    const getJobsList = async () => {
        try {
            const { data, status } = await getAllJobs()
            setJobsList(data?.results)
        } catch (error) {
            console.log({ error })
        }
    }

    useEffect(() => {
        getJobsList()
    }, [])

    const getJobdetail = (job) => {
        setId(job)
        setIsModalOpen(true)
    }

    return <div className="w-full">
        <Card className="w-full" >
            <Row justify={"space-between"} className="w-full py-2">
                <Typography.Text className="text-2xl font-semibold">
                    Jobs
                </Typography.Text>
            </Row>
            <Divider style={{ margin: 0 }} />
            <JobsTable jobsList={jobsList} modalOpen={getJobdetail} isActive={false} />
            <JobsModal isModalOpen={isModalOpen} id={id} setIsModalOpen={setIsModalOpen} />
        </Card>
    </div>
}

export default Home;