import React from "react";
import { Form, Select, Row, Col, Input } from "antd";
import formData from "../../static/json/dataset.json";

const FormStep3 = ({
  selectedCakeType,
  selectedCakeDecoration,
  handleCakeDecorationChange,
}) => {
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

export default FormStep3;
