import { Card, Col, Row, Typography } from "antd";
import CandidatesTable from "../../../components/CandidatesTable";
import PieChart from "../../../components/Graphs/PieChart";
import ColumnChart from "../../../components/Graphs/Column";
import { useEffect, useState } from "react";
import { getAllCandidates, getAllScore } from "../../../services/api";


const Candidates = () => {

    const [candidates, setCandidates] = useState([])
    const [candidatescore, setCandidatesScore] = useState([])
    const getJobsList = async () => {
        try {
            const { data } = await getAllCandidates()
            const { data: candScore } = await getAllScore()
            setCandidates(data?.results)
            setCandidatesScore(candScore)
        } catch (error) {
            console.log({ error })
        }
    }

    useEffect(() => {
        getJobsList()
    }, [])


    return <div className="w-full">
        <Row justify={"start"}>
            <Typography.Text className="text-2xl font-semibold">
                Candidates
            </Typography.Text>
        </Row>
        <Card className="w-full">
            <Row gutter={8}>
                <Col span={12}>
                    <PieChart allScore={candidatescore} />
                </Col>
                {/* <Col span={12}>
                    <ColumnChart candidatescore={candidatescore} />
                </Col> */}
            </Row>
            <CandidatesTable candidates={candidates} />
        </Card>
    </div>
}


export default Candidates;