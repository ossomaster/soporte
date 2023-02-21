import React from "react"
import { Avatar, Button, Card, Space, Tag, Typography } from "antd"
import { RightOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"

const Job = () => {
	return (
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
			extra={
				<Link to="/trabajos/1/aplicar">
					<Button type="primary" >
						Aplicar <RightOutlined />
					</Button>
				</Link>
			}
		>
			<Typography.Paragraph>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, reprehenderit. Illo porro
				praesentium voluptatem dolorum quae harum expedita omnis inventore debitis? Officiis aliquam
				quisquam fugiat aut in obcaecati officia architecto.
			</Typography.Paragraph>
			<Typography.Paragraph>
				<Space wrap>
					<Tag>Informática</Tag>
					<Tag>Enfermería</Tag>
					<Tag>Administración</Tag>
					<Tag>Contabilidad</Tag>
				</Space>
			</Typography.Paragraph>
			<Typography.Paragraph className="fs-12" style={{ marginBottom: 0 }}>
				Del <strong>19 Febrero 2023</strong> al <strong>05 Marzo 2023</strong>
			</Typography.Paragraph>
		</Card>
	)
}

export default Job
