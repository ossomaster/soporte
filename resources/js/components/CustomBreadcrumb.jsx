import React from "react"
import { Breadcrumb } from "antd"
import { Link } from "react-router-dom"
import { HomeOutlined } from "@ant-design/icons"

const CustomBreadcrumb = ({ children }) => {
	return (
		<Breadcrumb style={{ marginBottom: 15 }}>
			<Breadcrumb.Item>
				<Link to="/">
					<HomeOutlined /> Inicio
				</Link>
			</Breadcrumb.Item>

			{React.Children.map(children, (child) => {
				return (
					<Breadcrumb.Item>
						{React.cloneElement(child, {
							...child.props,
						})}
					</Breadcrumb.Item>
				)
			})}
		</Breadcrumb>
	)
}

export default CustomBreadcrumb
