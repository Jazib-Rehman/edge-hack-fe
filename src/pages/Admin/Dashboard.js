import { Card, Row, Typography } from "antd";
import DashboardCard from "../../components/DashboardCard";
import React, { useEffect, useState } from "react";
import CustomMap from './../../components/Map/Map'
import PieChart from "../../components/Graphs/PieChart";
import DonutGraph from "../../components/Graphs/DonutGraph";
import JobsTable from "../../components/JobsTable";

const { Text } = Typography;

const Dashboard = () => {

    const [cluster, setCluster] = React.useState('');
    const [showData, setShowData] = React.useState(false);
    const [showBrands, setShowBrands] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showCluster, setShowCluster] = React.useState('All');
    const [selectedCountries, setSelectedCountries] = React.useState(['PK']);
    const [countries, setCountries] = React.useState('Pakistan,Afghanistan,Sri Lanka,Maldives,Myanmar,Iran,Saudi Arabia,Kuwait,Bahrain,Yemen,UAE,Oman,Qatar,Palestine,Jordan,Lebanon,Iraq,Syria');

    const [clusterCalculatedData, setClusterCalculatedData] = useState({});
    const [clusterIds, setClusterIds] = useState([]);
    const [vuseSelectedCountry, setVuseSelectedCountry] = React.useState('');

    const [showCharts, setShowCharts] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowCharts(true)
        }, 1000);
    }, [])
    const handleReset = () => {
        setSelectedCountries(['PK'])
        setVuseSelectedCountry('')
    }

    return <Card>

        <div className="flex flex-wrap w-full">
            <div className="w-full flex flex-wrap">
                <div className="w-1/2 p-3">
                    {/* <DashboardCard /> */}
                    <DonutGraph />
                </div>
                <div className="w-1/2 p-3">
                    {/* <DashboardCard /> */}
                    <PieChart />
                </div>
                <div className="w-full p-3">
                    {/* <DashboardCard /> */}
                    <Row justify={"start"}>
                        <Typography.Text className="text-2xl font-semibold">
                            Active Jobs
                        </Typography.Text>
                    </Row>
                    <div className="mt-5">
                        <JobsTable />
                    </div>
                </div>

                {/* <div className="w-1/2 p-3">
                <DashboardCard />
            </div>
            <div className="w-1/2 p-3">
                <DashboardCard />
            </div>
            <div className="w-full p-3">
                <CustomMap
                    viewBox="590 345 150 70"
                    showAllCountries={false}
                    fromVelo={true}
                    showRunrateIms={false}
                    cluster={cluster}
                    setCluster={setCluster}
                    reloadData={handleReset}
                    getBrands={() => console.log("brands called")}
                    showBrands={showBrands}
                    setShowBrands={setShowBrands}
                    showData={showData}
                    setShowData={setShowData}
                    isLoading={isLoading}
                    onCountryClick={() => console.log("country clicked")}
                    data={[]}
                    showCluster={showCluster}
                    selectedCountries={selectedCountries}
                    setSelectedCountries={setSelectedCountries}
                    vuseSelectedCountry={vuseSelectedCountry}
                    setVuseSelectedCountry={setVuseSelectedCountry}
                    setShowCluster={setShowCluster}
                    clusterIds={clusterIds}
                    setClusterIds={setClusterIds}
                    clusterCalculatedData={clusterCalculatedData}
                    setClusterCalculatedData={setClusterCalculatedData}
                />
            </div> */}
            </div>
            <div className="w-1/3 p-3">
                {/* <PieChart /> */}
            </div>
        </div>
    </Card>

}

export default Dashboard;