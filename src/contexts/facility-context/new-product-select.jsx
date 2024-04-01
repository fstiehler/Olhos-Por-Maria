import React, { useState, useEffect } from "react";
import {
  Button,
  message,
  Steps,
  theme,
  Form,
  Input,
  InputNumber,
  Select,
  Col,
  Row,
  DatePicker,
  Descriptions,
  Divider,
} from "antd";
import "../../pages/principal/facility-section.css";
import formData from "../../static/json/dataset.json";

export function CreateCake() {
  const [formRequestData, setRequestFormData] = useState({
    cakeTypes: [
      {
        name: "",
        sizes: [
          {
            size: "",
            description: "",
            serving: "",
            weight: "",
            price: 0.0,
          },
        ],
        cakeFlavors: [
          {
            flavor: "",
            fillings: [
              {
                flavor: "",
                description: "",
                additionalPrice: 0.0,
              },
            ],
          },
        ],
        decorations: [
          {
            type: "",
            description: "",
            additionalPrice: 0.0,
          },
        ],
        date: "",
        pagament: "",
        additional: [
          {
            type: "",
            additionalPrice: 0.0,
          },
        ],
      },
    ],
  });

  const handleSubmit = async () => {
    try {
      console.log(formRequestData);
    } catch (error) {
      console.error(error);
    }
  };

  const [selectedCakeType, setSelectedCakeType] = useState("");
  const [selectedCakeSize, setSelectedCakeSize] = useState("");
  const [selectedCakeFlavor, setSelectedCakeFlavor] = useState("");
  const [selectedCakeFilling, setSelectedCakeFilling] = useState("");
  const [selectedCakeDecoration, setSelectedCakeDecoration] = useState("");

  const handleCakeTypeChange = (value) => {
    setSelectedCakeType(value);
    setSelectedCakeSize("");
    setSelectedCakeFlavor("");
    setSelectedCakeFilling("");
    setSelectedCakeDecoration("");
  };

  const handleCakeSizeChange = (value) => {
    setSelectedCakeSize(value);
  };

  const handleCakeFlavorChange = (value) => {
    setSelectedCakeFlavor(value);
    setSelectedCakeFilling("");
  };

  const handleCakeFillingChange = (value) => {
    setSelectedCakeFilling(value);
  };

  const handleCakeDecorationChange = (value) => {
    setSelectedCakeDecoration(value);
  };

  const [isMobile, setIsMobile] = useState(false);

  const FormStep1 = () => {
    return (
      <Form
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 12 }}
        layout="horizontal"
        style={{
          marginTop: 8,
        }}
      >
        <Row gutter={12}>
          <Col span={16}>
            <Form.Item
              name="tipo"
              label="Tipo do Bolo"
              rules={[{ required: true, message: "Preencha o campo certo" }]}
            >
              <Select
                placeholder="Selecione o tipo do bolo"
                onChange={handleCakeTypeChange}
                value={selectedCakeType}
              >
                {formData.cakeTypes.map((cakeType) => (
                  <Select.Option key={cakeType.name} value={cakeType.name}>
                    {cakeType.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            {selectedCakeType && (
              <Form.Item label="Tamanho do Bolo">
                <Select
                  placeholder="Selecione o tamanho do bolo"
                  onChange={handleCakeSizeChange}
                  value={selectedCakeSize}
                >
                  {formData.cakeTypes
                    .find((cakeType) => cakeType.name === selectedCakeType)
                    .sizes.map((size) => (
                      <Select.Option key={size.size} value={size.size}>
                        {size.description}
                      </Select.Option>
                    ))}
                </Select>
              </Form.Item>
            )}
          </Col>
          {isMobile ? (
            <>
              <Divider type="horizontal" />
              <Col span={24}>
                {selectedCakeType && selectedCakeSize && (
                  <Descriptions
                    title="Informaçõoes"
                    layout="horizontal"
                    style={{ textAlign: "center" }}
                  >
                    {formData.cakeTypes
                      .find((cakeType) => cakeType.name === selectedCakeType)
                      .sizes.filter((size) => size.size === selectedCakeSize)
                      .map((size) => (
                        <>
                          <Descriptions.Item label="Preço">
                            {size.price.toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </Descriptions.Item>
                          <Descriptions.Item label="Rendimento">
                            {size.serving}
                          </Descriptions.Item>
                        </>
                      ))}
                  </Descriptions>
                )}
              </Col>
            </>
          ) : (
            <>
              <Divider type="horizontal" />
              <Col span={15} style={{ marginLeft: "20%" }}>
                {selectedCakeType && selectedCakeSize && (
                  <Descriptions
                    title="Informaçõoes"
                    layout="horizontal"
                    style={{ textAlign: "center" }}
                  >
                    {formData.cakeTypes
                      .find((cakeType) => cakeType.name === selectedCakeType)
                      .sizes.filter((size) => size.size === selectedCakeSize)
                      .map((size) => (
                        <>
                          <Descriptions.Item label="Preço">
                            {size.price.toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </Descriptions.Item>
                          <Descriptions.Item label="Rendimento">
                            {size.serving}
                          </Descriptions.Item>
                        </>
                      ))}
                  </Descriptions>
                )}
              </Col>
            </>
          )}
        </Row>
      </Form>
    );
  };

  const FormStep2 = () => {
    return (
      <Form
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 12 }}
        layout="horizontal"
        style={{
          marginTop: 55,
        }}
      >
        <Row gutter={12}>
          <Col span={16}>
            {selectedCakeType && (
              <Form.Item label="Massa do Bolo">
                <Select
                  placeholder="Selecione a massa"
                  onChange={handleCakeFlavorChange}
                  value={selectedCakeFlavor}
                >
                  {formData.cakeTypes
                    .find((cakeType) => cakeType.name === selectedCakeType)
                    .cakeFlavors.map((flavor) => (
                      <Select.Option key={flavor.flavor} value={flavor.flavor}>
                        {flavor.flavor}
                      </Select.Option>
                    ))}
                </Select>
              </Form.Item>
            )}
            {selectedCakeSize && selectedCakeFlavor && (
              <>
                <Form.Item label="Recheio do Bolo">
                  <Select
                    placeholder="Selecione o recheio"
                    onChange={handleCakeFillingChange}
                    value={selectedCakeFilling}
                  >
                    {formData.cakeTypes
                      .find((cakeType) => cakeType.name === selectedCakeType)
                      .cakeFlavors.find(
                        (flavor) => flavor.flavor === selectedCakeFlavor
                      )
                      .fillings.map((filling) => (
                        <Select.Option
                          key={filling.flavor}
                          value={filling.flavor}
                        >
                          {filling.flavor}
                        </Select.Option>
                      ))}
                  </Select>
                </Form.Item>
                <Form.Item label="Quantidades de Bolos">
                  <InputNumber min={1} max={10} defaultValue={1} />
                </Form.Item>
              </>
            )}
          </Col>
        </Row>
      </Form>
    );
  };

  const FormStep3 = () => {
    return (
      <Form
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 12 }}
        layout="horizontal"
        style={{
          marginTop: 55,
        }}
      >
        <Row gutter={12}>
          <Col span={16}>
            {selectedCakeType && (
              <Form.Item label="Decoração do Bolo">
                <Select
                  placeholder="Selecione a decoração"
                  onChange={handleCakeDecorationChange}
                  value={selectedCakeDecoration}
                >
                  {formData.cakeTypes
                    .find((cakeType) => cakeType.name === selectedCakeType)
                    .decorations.map((decoration) => (
                      <Select.Option
                        key={decoration.description}
                        value={decoration.description}
                      >
                        {decoration.description}
                      </Select.Option>
                    ))}
                </Select>
              </Form.Item>
            )}
            <Form.Item label="Detalhes da decoração">
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  };

  const FormStep4 = () => {
    return (
      <Form
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 12 }}
        layout="horizontal"
        style={{
          marginTop: 10,
        }}
      >
        <Row gutter={12}>
          <Col span={16}>
            <Form.Item label="Nome">
              <Input value={formData.name} placeholder="Digite seu nome" />
            </Form.Item>
            <Form.Item label="Telefone">
              <Input value={formData.phone} placeholder="Digite seu telefone" />
            </Form.Item>
            <Form.Item label="Forma de Pagamento">
              <Select
                placeholder="Selecione uma opção"
                value={formData.is_home_office}
                onChange={(value) =>
                  setRequestFormData((prevFormData) => ({
                    ...prevFormData,
                    is_home_office: value,
                  }))
                }
              >
                <Select.Option value={"Credito"}>Crédito</Select.Option>
                <Select.Option value={"Debito"}>Débito</Select.Option>
                <Select.Option value={"Pix"}>Pix</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Data de Entega">
              <DatePicker
                bordered={true}
                placeholder="Selecione a data de entrega ou retirada"
                onChange={(dateString) => {
                  setRequestFormData((prevFormData) => ({
                    ...prevFormData,
                    date: dateString,
                  }));
                }}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  };

  const steps = [
    {
      title: "Escolher o tipo do bolo",
      content: FormStep1(),
    },
    {
      title: "Selecione o recheio",
      content: FormStep2(),
    },
    {
      title: "Selecione a decoração",
      content: FormStep3(),
    },
    {
      title: "Agende a data de entrega",
      content: FormStep4(),
    },
  ];

  const Step = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    const next = () => {
      setCurrent(current + 1);
    };

    const prev = () => {
      setCurrent(current - 1);
    };

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    const contentStyle = {
      textAlign: "center",
      color: token.colorTextTertiary,
      backgroundColor: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
      border: `1px dashed ${token.colorBorder}`,
      marginTop: 30,
      marginBottom: 30,
    };

    return (
      <>
        {isMobile ? (
          <>
            <h1 style={{ textAlign: "center", fontFamily: "Inter" }}>
              Monte seu bolo
            </h1>
            <div style={contentStyle}>{steps[current].content}</div>
            <div style={{ marginTop: 10 }}>
              {current < steps.length - 1 && (
                <Button
                  onClick={() => next()}
                  style={{
                    backgroundColor: "#C47D7A",
                    color: "#ffffff",
                    borderColor: "#C47D7A",
                  }}
                >
                  Próximo
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  htmlType="submit"
                  style={{
                    backgroundColor: "#C47D7A",
                    color: "#ffffff",
                    borderColor: "#C47D7A",
                  }}
                  onClick={() => [
                    message.success("Processo finalizado com sucesso!"),
                    handleSubmit(),
                  ]}
                >
                  Enviar
                </Button>
              )}
              {current > 0 && (
                <Button
                  style={{
                    margin: "0 8px",
                    backgroundColor: "#ffffff",
                    color: "#C47D7A",
                    borderColor: "#C47D7A",
                  }}
                  onClick={() => prev()}
                >
                  Anterior
                </Button>
              )}
            </div>
          </>
        ) : (
          <>
            <Steps current={current} items={items} />
            <div style={contentStyle}>{steps[current].content}</div>
            <div style={{ marginTop: 10 }}>
              {current < steps.length - 1 && (
                <Button
                  onClick={() => next()}
                  style={{
                    backgroundColor: "#C47D7A",
                    color: "#ffffff",
                    borderColor: "#C47D7A",
                  }}
                >
                  Próximo
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  style={{
                    backgroundColor: "#C47D7A",
                    color: "#ffffff",
                    borderColor: "#C47D7A",
                  }}
                  onClick={() => [
                    message.success("Processo finalizado com sucesso!"),
                    handleSubmit(),
                  ]}
                >
                  Enviar
                </Button>
              )}
              {current > 0 && (
                <Button
                  style={{
                    margin: "0 8px",
                    backgroundColor: "#ffffff",
                    color: "#C47D7A",
                    borderColor: "#C47D7A",
                  }}
                  onClick={() => prev()}
                >
                  Anterior
                </Button>
              )}
            </div>
          </>
        )}
      </>
    );
  };

  return Step();
}
