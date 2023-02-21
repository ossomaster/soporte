import React from "react"
import { Button, Card, Col, Input, Row, Select } from "antd"
import { Link } from "react-router-dom"

import CustomBreadcrumb from "../../components/CustomBreadcrumb"

const PageIncidenciasAdd = () => {
	return (
		<>
			<CustomBreadcrumb>
				<Link to="..">Incidencias</Link>
			</CustomBreadcrumb>
			<Card title="Incidencias - Agregar">
				<form action="">
					<Row gutter={15}>
						<Col span={8}>
							<div className="form-item">
								<label className="form-label">Tipo de atención</label>
								<Select
									defaultValue="0"
									style={{
										display: "block",
									}}
									// onChange={handleChange}
									options={[
										{
											value: "0",
											label: "Bien Patrimonial",
										},
										{
											value: "1",
											label: "Bien Personal",
										},
										{
											value: "2",
											label: "Otros",
										},
									]}
								/>
							</div>
						</Col>
						<Col span={8}>
							<div className="form-item">
								<label className="form-label">Tipo de soporte</label>
								<Select
									defaultValue="0"
									style={{
										display: "block",
									}}
									options={[
										{
											value: "0",
											label: "Soporte Contadora",
										},
										{
											value: "1",
											label: "Soporte Redes",
										},
										{
											value: "2",
											label: "Instalación de SIADEG",
										},
									]}
								/>
							</div>
						</Col>
						<Col span={8}>
							<div className="form-item">
								<label className="form-label">Informe de referencia</label>
								<Input placeholder="" />
							</div>
						</Col>
						<Col span={8}>
							<div className="form-item">
								<label className="form-label">Nombre del solicitante</label>
								<Input />
							</div>
						</Col>
						<Col span={8}>
							<div className="form-item">
								<label className="form-label">Celular</label>
								<Input />
							</div>
						</Col>
						<Col span={8}>
							<div className="form-item">
								<label className="form-label">Oficina</label>
								<Select
									defaultValue="0"
									style={{
										display: "block",
									}}
									options={[
										{
											value: "0",
											label: "Oficina TIC",
										},
										{
											value: "1",
											label: "Oficina OPMI",
										},
										{
											value: "2",
											label: "Alcaldía",
										},
									]}
								/>
							</div>
						</Col>
					</Row>

					<div className="form-item">
						<label className="form-label">Responsable</label>
						<Select
							defaultValue="0"
							style={{
								display: "block",
							}}
							options={[
								{
									value: "0",
									label: "Greis",
								},
								{
									value: "1",
									label: "Diego",
								},
								{
									value: "2",
									label: "osso",
								},
							]}
						/>
					</div>

					<div className="form-item">
						<label className="form-label">Solicita</label>
						<Input.TextArea />
					</div>

					<Button type="primary">Guardar</Button>
				</form>
			</Card>
		</>
	)
}

export default PageIncidenciasAdd
