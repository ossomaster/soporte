import React from "react"
import { Button, Card, Space, Table, Typography } from "antd"
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import CustomBreadcrumb from "../../components/CustomBreadcrumb"
import { Link } from "react-router-dom"

const dataSource = [
	{
		key: "1",
		codigo: "123456",
		denominacion: "máquina de greis",
		marca: "lenovo",
		modelo: "caca",
		serie: "123",
		color: "pink",
		referenciaDeFalla: "por manco",
		accesorios: "xd",
	},
]

const columns = [
	{
		title: "Código",
		dataIndex: "codigo",
		key: "codigo",
	},
	{
		title: "Denominación",
		dataIndex: "denominacion",
		key: "denominacion",
	},
	{
		title: "Marca",
		dataIndex: "marca",
		key: "marca",
	},
	{
		title: "Modelo",
		dataIndex: "modelo",
		key: "modelo",
	},
	{
		title: "Serie",
		dataIndex: "serie",
		key: "serie",
	},
	{
		title: "Color",
		dataIndex: "color",
		key: "color",
	},
	{
		title: "Referencia de falla",
		dataIndex: "referenciaDeFalla",
		key: "referenciaDeFalla",
	},
	{
		title: "Accesorios",
		dataIndex: "accesorios",
		key: "accesorios",
	},
	{
		title: "Acciones",
		dataIndex: "actions",
		key: "actions",
		render: () => {
			return (
				<Space>
					<Link to="1/editar">
						<Button type="primary" size="small" icon={<EditOutlined />} />
					</Link>
					<Button danger size="small" icon={<DeleteOutlined />} />
				</Space>
			)
		},
	},
]

const PageIncidencias = () => {
	return (
		<>
			<CustomBreadcrumb />
			<Card title="Incidencias" extra={<Link to="agregar">Nueva incidencia</Link>}>
				<Table size="small" dataSource={dataSource} columns={columns} />
			</Card>
		</>
	)
}

export default PageIncidencias
