import React from "react"
import { Alert, Avatar, Button, Card, Col, Divider, Popconfirm, Row, Space, Tag, Typography } from "antd"
import { Link } from "react-router-dom"
import { RightOutlined } from "@ant-design/icons"
import Job from "./Job"
import CustomBreadcrumb from "../../components/CustomBreadcrumb"

const PageJobsApply = () => {
	return (
		<>
			<CustomBreadcrumb>
				<Link to="..">Trabajos</Link>
			</CustomBreadcrumb>
			<Card
				title={
					<Space>
						<Avatar
							size={40}
							shape="square"
							src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/360E18CC49CEA00B464C19802C5BA34D6F748F853E1EBDF97F1EE2F39CBB39FE/scale?width=1200&aspectRatio=1.78&format=jpeg"
						/>
						<div>
							<Typography.Title style={{ marginBottom: 0, lineHeight: 1 }} level={5}>
								Desarrolladow Web Full-Stack
							</Typography.Title>
							<Typography.Text type="secondary">Inka Devs SAC</Typography.Text>
						</div>
					</Space>
				}
			>
				<Row gutter={15}>
					<Col span={18}>
						<Typography.Paragraph>
							<Space wrap>
								<Tag>Informática</Tag>
								<Tag>Enfermería</Tag>
								<Tag>Administración</Tag>
								<Tag>Contabilidad</Tag>
							</Space>
						</Typography.Paragraph>
						<Typography.Paragraph>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, reprehenderit. Illo
							porro praesentium voluptatem dolorum quae harum expedita omnis inventore debitis?
							Officiis aliquam quisquam fugiat aut in obcaecati officia architecto.
						</Typography.Paragraph>
						<Alert
							message="Observación"
							description="Aliquip amet ut labore est consectetur. Pariatur aliqua duis magna et eu sint. Cupidatat qui aliquip ea cupidatat elit tempor esse ipsum irure incididunt irure laboris."
							type="warning"
							showIcon
							closable
						/>
					</Col>
					<Col span={6}>
						<div className="text-center">
							<Typography.Paragraph>
								<span className="block">Experiencia:</span>
								<span className="block">
									<strong>+2 Años</strong>
								</span>
							</Typography.Paragraph>
							<Typography.Paragraph>
								<span className="block">Vacantes:</span>
								<span className="block">
									<strong>50</strong>
								</span>
							</Typography.Paragraph>
							<Typography.Paragraph>
								<span className="block">Remuneración:</span>
								<span className="block">
									<strong>S/ 2500.00</strong>
								</span>
							</Typography.Paragraph>
							<Typography.Paragraph>
								<span className="block">Ubicación:</span>
								<span className="block">
									<strong>Cusco / Quillabamba</strong>
								</span>
							</Typography.Paragraph>
							<Typography.Paragraph>
								<span className="block">Fecha inicio:</span>
								<span className="block">
									<strong>19 Febrero 2023</strong>
								</span>
							</Typography.Paragraph>
							<Typography.Paragraph>
								<span className="block">Fecha fin:</span>
								<span className="block">
									<strong>05 Marzo 2023</strong>
								</span>
							</Typography.Paragraph>
							<Popconfirm
								title="Postulación"
								description="¿Está seguro de realizar esta acción?"
								okText="Postularme"
								cancelText="Cancelar"
								onConfirm={() => alert("postulando...")}
							>
								<Button type="primary">Postularme</Button>
							</Popconfirm>
						</div>
					</Col>
				</Row>
			</Card>
			<Divider />
			<Card title="Otros trabajos">
				<Space direction="vertical" size="large">
					{Array(5)
						.fill()
						.map((_, idx) => (
							<Job key={idx} />
						))}
				</Space>
			</Card>
		</>
	)
}

export default PageJobsApply
