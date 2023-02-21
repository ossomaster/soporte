import React from "react"
import { Card, Space } from "antd"
import CustomBreadcrumb from "../../components/CustomBreadcrumb"
import { Link } from "react-router-dom"
import Job from "./Job"

const PageJobs = () => {
	return (
		<>
			<CustomBreadcrumb />
			<Card title="Trabajos" extra={<Link to="agregar">Nuevo trabajo</Link>}>
				<Space direction="vertical" size="large">
					{Array(10)
						.fill()
						.map((_, idx) => (
							<Job key={idx} />
						))}
				</Space>
			</Card>
		</>
	)
}

export default PageJobs
