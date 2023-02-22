import React from "react";
import { Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Content, Sider } = Layout;
const items = [
    {
        key: "inicio",
        label: <Link to="/">Inicio</Link>,
    },
    {
        key: "incidencias",
        label: <Link to="/incidencias">Incidencias</Link>,
    },
    {
        key: "estudiantes",
        label: <Link to="/estudiantes">Estudiantes</Link>,
    },
    {
        key: "usuarios",
        label: <Link to="/usuarios">Usuarios</Link>,
    },
    {
        key: "trabajos",
        label: <Link to="/trabajos">Trabajos</Link>,
    },
    {
        key: "empresas",
        label: <Link to="/empresas">Empresas</Link>,
    },
    {
        key: "reportes",
        label: "Reportes",
        children: [
            {
                key: "reportes.jobs-per-dates",
                label: (
                    <Link to="/reportes/trabajos-por-fechas">
                        Trabajos por fechas
                    </Link>
                ),
            },
            {
                key: "reportes.students-per-job",
                label: (
                    <Link to="/reportes/estudiantes-por-trabajo">
                        Estudiantes por trabajo
                    </Link>
                ),
            },
        ],
    },
];

const MainLayout = () => {
    // const {
    // 	token: { colorBgContainer },
    // } = theme.useToken()
    return (
        <Layout hasSider>
            <Sider
                style={{
                    overflow: "auto",
                    height: "100vh",
                    position: "fixed",
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
                width={250}
            >
                <img
                    style={{
                        maxWidth: "100%",
                        width: "auto",
                        display: "block",
                        margin: "auto",
                        padding: "0 24px",
                        height: 40,
                    }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/2560px-Facebook_New_Logo_%282015%29.svg.png"
                    alt="Urusayhua"
                />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["osso", "twitter"]}
                    items={items}
                />
            </Sider>
            <Layout
                className="site-layout"
                style={{
                    marginLeft: 250,
                }}
            >
                <Content className="container" style={{ minHeight: "100vh" }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
