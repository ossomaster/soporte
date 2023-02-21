import React from "react"
import { Button, Card, Popconfirm, Space, Table, Typography } from "antd"
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import CustomBreadcrumb from "../../components/CustomBreadcrumb"
import { Link } from "react-router-dom"
import ColumnSearchProps from "../../components/ColumnSearchProps"

const PageStudents = () => {
	const dataSource = [
		{
			key: "1",
			name: "Mike",
			rol: 32,
			username: "10 Downing Street",
		},
		{
			key: "2",
			name: "John",
			rol: 42,
			username: "10 Downing Street",
		},
	]

	const columns = [
		{
			title: "Nombre",
			dataIndex: "name",
			key: "name",
			...ColumnSearchProps("name"),
		},
		{
			title: "Usuario",
			dataIndex: "username",
			key: "username",
		},
		{
			title: "Rol",
			dataIndex: "rol",
			key: "rol",
		},
		{
			title: "Estado",
			dataIndex: "status",
			key: "status",
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
						<Popconfirm
							title="Eliminar registro"
							description="¿Seguro que quiere eliminar este registro?"
							onConfirm={() => {
								console.log("yes")
							}}
							onCancel={() => {
								console.log("no")
							}}
							okText="Eliminar"
							cancelText="Cancelar"
						>
							<Button danger size="small" icon={<DeleteOutlined />} />
						</Popconfirm>
					</Space>
				)
			},
		},
	]

	return (
		<>
			<CustomBreadcrumb />
			<Card size="small" title="Estudiantes" extra={<Link to="agregar">Nuevo estudiante</Link>}>
				<Table size="small" dataSource={dataSource} columns={columns} />
			</Card>
		</>
	)
}

export default PageStudents
