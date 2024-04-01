import { Form, Input, Select, Col, Row, DatePicker } from "antd";

const FormStep4 = ({
  formData,
  setRequestFormData,
  handleDateChange,
  handlePaymentChange,
}) => {
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
            <Input
              value={formData.name}
              placeholder="Digite seu nome"
              onChange={(e) =>
                setRequestFormData((prevFormData) => ({
                  ...prevFormData,
                  name: e.target.value,
                }))
              }
            />
          </Form.Item>
          <Form.Item label="Telefone">
            <Input
              value={formData.phone}
              placeholder="Digite seu telefone"
              onChange={(e) =>
                setRequestFormData((prevFormData) => ({
                  ...prevFormData,
                  phone: e.target.value,
                }))
              }
            />
          </Form.Item>
          <Form.Item label="Forma de Pagamento">
            <Select
              placeholder="Selecione uma opção"
              value={formData.pagament}
              onChange={(value) =>
                setRequestFormData((prevFormData) => ({
                  ...prevFormData,
                  pagament: value,
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
              onChange={(date, dateString) => handleDateChange(dateString)}
              style={{ width: "100%" }}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default FormStep4;
