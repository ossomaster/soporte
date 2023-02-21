import { Button, Card, Input } from "antd"
import React, { useState } from "react"
import { Link } from "react-router-dom"

import CustomBreadcrumb from "../../components/CustomBreadcrumb"
import EditorHtml from "../../components/EditorHtml"

const PageCompaniesAdd = () => {
	const [description, setDescription] = useState("")
	return (
		<>
			<CustomBreadcrumb>
				<Link to="..">Empresas</Link>
			</CustomBreadcrumb>
			<Card size="small" title="Empresas - Agregar">
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
						<label className="form-label">Descripción</label>
						<EditorHtml defaultValue={description} onChange={setDescription} />
					</div>
					<Button type="primary">Guardar</Button>
				</form>
			</Card>
		</>
	)
}

export default PageCompaniesAdd
