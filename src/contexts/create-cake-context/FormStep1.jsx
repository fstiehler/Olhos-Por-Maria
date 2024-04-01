import React, { useState, useEffect } from "react";
import { Form, Select, Row, Col, Descriptions, Divider } from "antd";
import formData from "../../static/json/dataset.json";
import getCakeTypeByName from "./utils/cakeTypes";

const FormStep1 = ({
  selectedCakeType,
  handleCakeTypeChange,
  handleCakeSizeChange,
  selectedCakeSize,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  const cakeType = getCakeTypeByName(selectedCakeType);
  const cakeSize = cakeType?.sizes.find(
    (size) => size.size === selectedCakeSize
  );

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

  const renderDescriptions = () => {
    if (!cakeSize) return null;

    return (
      <Descriptions
        title="Informações"
        layout="horizontal"
        style={{ textAlign: "center" }}
      >
        <Descriptions.Item label="Preço">
          {cakeSize.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </Descriptions.Item>
        <Descriptions.Item label="Rendimento">
          {cakeSize.serving}
        </Descriptions.Item>
      </Descriptions>
    );
  };

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
                {cakeType?.sizes.map((size) => (
                  <Select.Option key={size.size} value={size.size}>
                    {size.description}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          )}
        </Col>
        {/* Render Descriptions */}
        {isMobile ? (
          <>
            <Divider type="horizontal" />
            <Col span={24}>{renderDescriptions()}</Col>
          </>
        ) : (
          <>
            <Divider type="horizontal" />
            <Col span={15} style={{ marginLeft: "20%" }}>
              {renderDescriptions()}
            </Col>
          </>
        )}
      </Row>
    </Form>
  );
};

export default FormStep1;
