import React, { useEffect, useState } from "react";
import { Button, Card, Col, Input, Row, Select, Space } from "antd";
import { Link } from "react-router-dom";

import CustomBreadcrumb from "../../components/CustomBreadcrumb";
import httpClient from "../../libs/axios";
import { TIPOS_SOPORTE } from "../../constants";

const PageIncidenciasAdd = () => {
    const [tipoSoporte, setTipoSoporte] = useState(null);
    const [container, setContainer] = useState({
        tiposSoporte: [],
        especialistas: [],
        nombreoficina: []
       
        
      
    });

    const fetchData = async () => {
        try {
            const response = await httpClient.get("/incidencias/agregar");
            setContainer({
                tiposSoporte: response.data.content.tiposAtencion,
                especialistas: response.data.content.especialistas,
                nombreoficina: response.data.content.nombreoficina,
                
                
            });
        } catch (error) {}
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <CustomBreadcrumb>
                <Link to="..">Incidencias</Link>
            </CustomBreadcrumb>
            <Card title="Incidencias - Agregar">
                <form action="">
                    <Row gutter={15}>
                        <Col span={8}>
                            <div className="form-item">
                                <label className="form-label">
                                    Tipo de atención
                                </label>
                                <Select
                                    defaultValue="0"
                                    style={{
                                        display: "block",
                                    }}
                                    // onChange={handleChange}
                                    options={[
                                        {
                                            value: "0",
                                            label: "Bien Patrimonial",
                                        },
                                        {
                                            value: "1",
                                            label: "Bien Personal",
                                        },
                                        {
                                            value: "2",
                                            label: "Otros",
                                        },
                                    ]}
                                />
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="form-item">
                                <label className="form-label">
                                    Tipo de soporte
                                </label>
                                <Space
                                    size="small"
                                    direction="vertical"
                                    style={{ width: "100%" }}
                                >
                                    <Select
                                        onChange={setTipoSoporte}
                                        style={{
                                            display: "block",
                                        }}
                                        showSearch
                                        optionFilterProp="label"
                                        options={container.tiposSoporte.map(
                                            (item) => ({
                                                value: item.idtipo_atencion,
                                                label: item.tipo_atencion,
                                            })
                                        )}
                                    />

                                    {tipoSoporte == TIPOS_SOPORTE.OTROS && (
                                        <Input placeholder="Otro tipo..." />
                                    )}
                                </Space>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="form-item">
                                <label className="form-label">
                                    Informe de referencia
                                </label>
                                <Input placeholder="" />
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="form-item">
                                <label className="form-label">
                                    Nombre del solicitante
                                </label>
                                <Input />
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="form-item">
                                <label className="form-label">Celular</label>
                                <Input />
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="form-item">
                                <label className="form-label">Oficina</label>
                                <Select
                            style={{
                                display: "block",
                            }}
                            showSearch
                            optionFilterProp="label"
                            options={container.nombreoficina.map((item) => ({
                                value: item.id,
                                label: item.dependeincia_oficina,
                            }))}
                        />
                            </div>
                        </Col>
                    </Row>

                    <div className="form-item">
                        <label className="form-label">Responsable</label>
                        <Select
                            style={{
                                display: "block",
                            }}
                            showSearch
                            optionFilterProp="label"
                            options={container.especialistas.map((item) => ({
                                value: item.id,
                                label: item.nombreCompleto,
                            }))}
                        />
                    </div>

                    <div className="form-item">
                        <label className="form-label">Solicita</label>
                        <Input.TextArea />
                    </div>

                    <Button type="primary">Guardar</Button>
                </form>
            </Card>
        </>
    );
};

export default PageIncidenciasAdd;
