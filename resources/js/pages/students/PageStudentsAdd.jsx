import { Button, Card, Col, Input, Row, Select, Typography } from "antd"
import React from "react"
import { Link } from "react-router-dom"
import CustomBreadcrumb from "../../components/CustomBreadcrumb"

const PageStudentsAdd = () => {
	return (
		<>
			<CustomBreadcrumb>
				<Link to="..">Estudiantes</Link>
			</CustomBreadcrumb>
			<Row gutter={15}>
				<Col span={8}>
					<Card size="small" title="Estudiantes - Agregar">
						<form action="">
							<div className="form-item">
								<label className="form-label">Nombre</label>
								<Input placeholder="" />
							</div>
							<div className="form-item">
								<label className="form-label">Usuario</label>
								<Input placeholder="Usuario" />
							</div>
							<div className="form-item">
								<label className="form-label">Contraseña</label>
								<Input placeholder="Contraseña" />
							</div>
							<div className="form-item">
								<label className="form-label">Confirmar contraseña</label>
								<Input placeholder="Confirmar contraseña" />
							</div>
							<div className="form-item">
								<label className="form-label">Rol</label>
								<Select
									defaultValue="DOCENTE"
									style={{
										display: "block",
									}}
									// onChange={handleChange}
									options={[
										{
											value: "ESTUDIANTE",
											label: "Estudiante",
										},
										{
											value: "DOCENTE",
											label: "Docente",
										},
										{
											value: "ADMINISTRADOR",
											label: "Administrador",
										},
									]}
								/>
							</div>
							<Button type="primary">Guardar</Button>
						</form>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default PageStudentsAdd
