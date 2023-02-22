import React, { useEffect, useState } from "react";
import { Button, Card, Space, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import CustomBreadcrumb from "../../components/CustomBreadcrumb";
import httpClient from "../../libs/axios";

const PageIncidencias = () => {
    const [container, setContainer] = useState({
        incidencias: [],
    });
    const { incidencias } = container;

    const columns = [
        {
            title: "Informe",
            dataIndex: "informe",
            key: "informe",
        },
        {
            title: "Solicitante",
            dataIndex: "solicitante",
            key: "solicitante",
        },
        {
            title: "Celular",
            dataIndex: "celular",
            key: "celular",
        },
        {
            title: "Descripción",
            dataIndex: "descripcion",
            key: "descripcion",
        },
        {
            title: "Oficina",
            dataIndex: ["oficina", "nombre"],
            key: "oficina_id",
        },
        {
            title: "Acciones",
            dataIndex: "actions",
            key: "actions",
            render: () => {
                return (
                    <Space>
                        <Link to="1/editar">
                            <Button
                                type="primary"
                                size="small"
                                icon={<EditOutlined />}
                            />
                        </Link>
                        <Button danger size="small" icon={<DeleteOutlined />} />
                    </Space>
                );
            },
        },
    ];

    const fetchData = async () => {
        try {
            const response = await httpClient.get("/incidencias");
            setContainer(response.data.content);
        } catch (error) {}
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <CustomBreadcrumb />
            <Card
                title="Incidencias"
                extra={<Link to="agregar">Nueva incidencia</Link>}
            >
                <Table
                    size="small"
                    rowKey="id"
                    dataSource={incidencias}
                    columns={columns}
                />
            </Card>
        </>
    );
};

export default PageIncidencias;
