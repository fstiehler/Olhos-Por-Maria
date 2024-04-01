import { Form, Select, Row, Col, InputNumber } from "antd";
import getCakeTypeByName from "./utils/cakeTypes";

const FormStep2 = ({
  selectedCakeType,
  selectedCakeFlavor,
  handleCakeFlavorChange,
  selectedCakeFilling,
  handleCakeFillingChange,
}) => {
  const cakeType = getCakeTypeByName(selectedCakeType);

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
                {cakeType?.cakeFlavors.map((flavor) => (
                  <Select.Option key={flavor.flavor} value={flavor.flavor}>
                    {flavor.flavor}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          )}
          {selectedCakeType && selectedCakeFlavor && (
            <>
              <Form.Item label="Recheio do Bolo">
                <Select
                  placeholder="Selecione o recheio"
                  onChange={handleCakeFillingChange}
                  value={selectedCakeFilling}
                >
                  {cakeType?.cakeFlavors
                    .find((flavor) => flavor.flavor === selectedCakeFlavor)
                    ?.fillings.map((filling) => (
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

export default FormStep2;
