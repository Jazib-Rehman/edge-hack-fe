import { Card, Col, Row, Typography } from "antd";
import CandidatesTable from "../../../components/CandidatesTable";
import PieChart from "../../../components/Graphs/PieChart";
import ColumnChart from "../../../components/Graphs/Column";

const Candidates = () => {
    return <div className="w-full">
        <Row justify={"start"}>
            <Typography.Text className="text-2xl font-semibold">
                Candidates
            </Typography.Text>
        </Row>
        <Card className="w-full">
            <Row gutter={8}>
                <Col span={12}>
                    <PieChart />
                </Col>
                <Col span={12}>
                    <ColumnChart />
                </Col>
            </Row>
            <CandidatesTable />
        </Card>
    </div>
}


export default Candidates;