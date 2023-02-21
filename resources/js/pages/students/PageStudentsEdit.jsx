import { Button, Card, Col, Input, Row, Select, Typography } from "antd"
import React from "react"
import { Link } from "react-router-dom"
import CustomBreadcrumb from "../../components/CustomBreadcrumb"

const PageStudentsEdit = () => {
	return (
		<>
			<CustomBreadcrumb>
				<Link to="..">Estudiantes</Link>
			</CustomBreadcrumb>
			<Row gutter={15}>
				<Col span={12}>
					<Card size="small" title="Estudiantes - Editar">
						<form action="">
							<div className="form-item">
								<label className="form-label">DNI</label>
								<Input placeholder="XXXXXXXX" readOnly />
							</div>
							<div className="form-item">
								<label className="form-label">Nombre</label>
								<Input placeholder="" />
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
				<Col span={12}>
					<Card size="small" title="Actualizar contraseña">
						<form action="">
							<div className="form-item">
								<label className="form-label">Nueva Contraseña</label>
								<Input type="password" placeholder="Contraseña" />
							</div>
							<div className="form-item">
								<label className="form-label">Confirmar contraseña</label>
								<Input type="password" placeholder="Confirmar contraseña" />
							</div>
							<Button type="primary">Guardar</Button>
						</form>
					</Card>
				</Col>
			</Row>
		</>
	)
}

export default PageStudentsEdit
