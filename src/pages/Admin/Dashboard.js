import { Card, Row, Typography } from "antd";
import DashboardCard from "../../components/DashboardCard";
import React, { useEffect, useState } from "react";
import CustomMap from './../../components/Map/Map'
import PieChart from "../../components/Graphs/PieChart";
import DonutGraph from "../../components/Graphs/DonutGraph";
import JobsTable from "../../components/JobsTable";
import { getAllJobs, getAllScore } from "../../services/api";

const { Text } = Typography;

const Dashboard = () => {

    const [jobsList, setJobsList] = useState([]);
    const [filteredJobsList, setFilteredJobsList] = useState([]);
    const [allScore, getAllScored] = useState([]);

    const getJobsList = async () => {
        try {
            const { data, status } = await getAllJobs()
            const { data: score } = await getAllScore()
            setJobsList(data?.results)
            getAllScored(score)
            setFilteredJobsList(data?.results.filter(item => item.isActive === true))
        } catch (error) {
            console.log({ error })
        }
    }

    useEffect(() => {
        getJobsList()
    }, [])


    return <Card>

        <div className="flex flex-wrap w-full">
            <div className="flex flex-wrap w-full">
                <div className="w-1/2 p-3">
                    {/* <DashboardCard /> */}
                    <DonutGraph active={jobsList.filter(item => item.isActive === true).length} inActive={jobsList.filter(item => item.isActive === false).length} />
                    {/* <PieChart jobsList={jobsList} /> */}
                </div>
                <div className="w-1/2 p-3">
                    {/* <DashboardCard /> */}
                    <PieChart allScore={allScore} />
                </div>
                <div className="w-full p-3">
                    {/* <DashboardCard /> */}
                    <Row className="flex items-center justify-between space-x-2">
                        <Typography.Text className="text-2xl font-semibold">
                            Active Jobs
                        </Typography.Text>
                    </Row>
                    <div className="mt-5">
                        <JobsTable jobsList={filteredJobsList} isActive={false} />
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