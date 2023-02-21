import { Button, Col, Input, Row, Typography } from "antd"
import React from "react"
import { useNavigate } from "react-router-dom"

const PageLogin = () => {
	const navigate = useNavigate()
	const handleSubmit = (e) => {
		e.preventDefault()
		navigate("/")
	}

	return (
		<div className="container">
			<Row justify="center">
				<Col span={6}>
					<form action="" style={{ padding: "60px 0" }} onSubmit={handleSubmit}>
						<Typography.Title style={{ textAlign: "center" }} level={4}>
							Iniciar Sesión
						</Typography.Title>
						<div className="form-item">
							<label htmlFor="" className="form-label">
								Usuario
							</label>
							<Input />
						</div>
						<div className="form-item">
							<label htmlFor="" className="form-label">
								Contraseña
							</label>
							<Input type="password" />
						</div>
						<Button htmlType="submit" type="primary" block>
							Ingresar
						</Button>
					</form>
				</Col>
			</Row>
		</div>
	)
}

export default PageLogin
