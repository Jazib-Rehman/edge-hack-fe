import { Card, Row, Typography } from "antd";
import JobsTable from "../../../components/JobsTable";

const Jobs = () => {
    return <div className="w-full">
        <Card className="w-full" title="Jobs">
            <JobsTable />
        </Card>
    </div>
}

export default Jobs;