import React, { useEffect, useState } from "react";
import { Button, Card, Col, Divider, Input, message, Row } from "antd";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import CustomBreadcrumb from "../../components/CustomBreadcrumb";
import httpClient from "../../libs/axios";
import FormInput from "../../components/FormInput";
import FormSelect from "../../components/FormSelect";

const schema = yup.object({
    tipoPropiedad_id: yup.number().positive().integer().required(),
    tipoSoporte_id: yup.number().positive().integer().required(),
    informe: yup.string().required(),
    solicitante: yup.string().required(),
    celular: yup.string().required(),
    oficina_id: yup.number().positive().integer().required(),
    especialista_id: yup.number().positive().integer().required(),
    descripcion: yup.string().required(),
});

const PageIncidenciasAdd = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            tipoPropiedad_id: 1,
            tipoSoporte_id: 1,
            informe: "informe",
            solicitante: "greis",
            celular: "123123",
            oficina_id: 1,
            especialista_id: 5,
            descripcion: "descripción",
        },
    });

    const [container, setContainer] = useState({
        tiposPropiedad: [],
        tiposSoporte: [],
        especialistas: [],
        oficinas: [],
    });

    const watchValues = watch();
    console.log("🐻 | PageIncidenciasAdd | watchValues:", watchValues);
    const { tiposPropiedad, tiposSoporte, especialistas, oficinas } = container;

    const fetchData = async () => {
        try {
            const response = await httpClient.get("/incidencias/agregar");
            setContainer(response.data.content);
        } catch (error) {}
    };

    const onValid = async (data) => {
        try {
            await httpClient.post("/incidencias", data);
            message.success("Registro guardado");
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
                <form onSubmit={handleSubmit(onValid)}>
                    <Row gutter={15}>
                        <Col span={8}>
                            <div className="form-item">
                                <label className="form-label">
                                    Tipo de Propiedad
                                </label>
                                <FormSelect
                                    name="tipoPropiedad_id"
                                    control={control}
                                    dropdownRender={(menu) => (
                                        <>
                                            {menu}
                                            <Divider
                                                style={{ margin: "8px 0" }}
                                            />
                                            <Input
                                                placeholder="Otro tipo de propiedad"
                                                // ref={inputRef}
                                                value={""}
                                                onChange={() => {}}
                                            />
                                        </>
                                    )}
                                    options={tiposPropiedad.map((item) => ({
                                        value: item.id,
                                        label: item.nombre,
                                    }))}
                                />
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="form-item">
                                <label className="form-label">
                                    Tipo de soporte
                                </label>
                                <FormSelect
                                    name="tipoSoporte_id"
                                    control={control}
                                    showSearch
                                    optionFilterProp="label"
                                    options={tiposSoporte.map((item) => ({
                                        value: item.id,
                                        label: item.nombre,
                                    }))}
                                    dropdownRender={(menu) => (
                                        <>
                                            {menu}
                                            <Divider
                                                style={{ margin: "8px 0" }}
                                            />
                                            <Input
                                                placeholder="Otro tipo de soporte"
                                                // ref={inputRef}
                                                value={""}
                                                onChange={() => {}}
                                            />
                                        </>
                                    )}
                                />
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="form-item">
                                <label className="form-label">
                                    Informe de referencia
                                </label>
                                <FormInput name="informe" control={control} />
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="form-item">
                                <label className="form-label">
                                    Nombre del solicitante
                                </label>
                                <FormInput
                                    name="solicitante"
                                    control={control}
                                />
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="form-item">
                                <label className="form-label">Celular</label>
                                <FormInput name="celular" control={control} />
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="form-item">
                                <label className="form-label">Oficina</label>
                                <FormSelect
                                    name="oficina_id"
                                    control={control}
                                    showSearch
                                    optionFilterProp="label"
                                    options={oficinas.map((item) => ({
                                        value: item.id,
                                        label: item.nombre,
                                    }))}
                                />
                            </div>
                        </Col>
                    </Row>

                    <div className="form-item">
                        <label className="form-label">Responsable</label>
                        <FormSelect
                            name="especialista_id"
                            control={control}
                            showSearch
                            optionFilterProp="label"
                            options={especialistas.map((item) => ({
                                value: item.id,
                                label: item.nombreCompleto,
                            }))}
                        />
                    </div>

                    <div className="form-item">
                        <label className="form-label">Solicita</label>
                        <FormInput name="descripcion" control={control} />
                    </div>

                    <Button type="primary" htmlType="submit">
                        Guardar
                    </Button>
                </form>
            </Card>
        </>
    );
};

export default PageIncidenciasAdd;
