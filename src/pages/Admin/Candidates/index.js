import { Card, Row, Typography } from "antd";
import CandidatesTable from "../../../components/CandidatesTable";

const Candidates = () => {
    return <div className="w-full">
        <Card className="w-full" title="Candidates">
            <CandidatesTable />
        </Card>
    </div>
}


export default Candidates;