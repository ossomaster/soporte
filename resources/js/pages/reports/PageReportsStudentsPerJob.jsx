import { Button, Card, DatePicker, Space } from "antd"
import React from "react"
import CustomBreadcrumb from "../../components/CustomBreadcrumb"

const PageReportsPerDates = () => {
	return (
		<>
			<CustomBreadcrumb />
			<Space>
				<div className="form-item">
					{/* <label htmlFor="" className="form-label">
							Fecha Inicio
						</label> */}
					<DatePicker placeholder="Fecha inicio" style={{ display: "block" }} onChange={() => {}} />
				</div>
				<div className="form-item">
					{/* <label htmlFor="" className="form-label">
							Fecha Fin
						</label> */}
					<DatePicker placeholder="Fecha fin" style={{ display: "block" }} onChange={() => {}} />
				</div>
				<div className="form-item">
					<Button type="primary">Consultar</Button>
				</div>
			</Space>
			<Card size="small" title="Estudiantes por trabajo"></Card>
		</>
	)
}

export default PageReportsPerDates
