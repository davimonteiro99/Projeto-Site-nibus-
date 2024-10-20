import React, { useState } from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  TreeSelect,
  Segmented,
} from 'antd';

const { RangePicker } = DatePicker;
const { Option } = Select;  // Pega o Option do Select

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 20 }, 
  },
  wrapperCol: {
    xs: { span: 40 },
    sm: { span: 50 },
  },
};

const App = () => {
  const [componentVariant, setComponentVariant] = useState('filled');
  const [selectedOption, setSelectedOption] = useState(null); // Estado para controlar o Select

  const onFormVariantChange = ({ variant }) => {
    setComponentVariant(variant);
  };

  // Lida com a mudança no Select
  const handleSelectChange = (value) => {
    setSelectedOption(value);  // Armazena o valor selecionado
    console.log("Opção selecionada:", value);  // Para testes
  };

  return (
    <Form
      {...formItemLayout}
      onValuesChange={onFormVariantChange}
      variant={componentVariant}
      style={{
        maxWidth: '900px',
        margin: '0 auto',
      }}
    >
      <div style={{ width: '600px', display: 'grid', justifyItems: 'start', padding: '10px' }}>
        <h3>Ida e volta</h3>
        <Form.Item style={{ textAlign: 'start' }} name="variant">
          <Segmented options={['outlined']} />
        </Form.Item>
      </div>

      <div style={{ display: 'flex', gap: '30px', padding: '10px', height:'100px' }}>

        <Form.Item
              label="Origem"
              name="origem"  // Nome único para este Select
              style={{ flex: 7}}
              rules={[{ required: true, message: 'Por favor, selecione a origem!' }]} // Mensagem customizada
            >
              <Select onChange={(value) => console.log('Origem selecionada:', value)}>
                <Option value="araiose">Araioses</Option>
                <Option value="parnaiba">Parnaíba</Option>
                <Option value="barreirinhas">Barreirinhas</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Destino"
              name="destino"  // Nome único para este Select
              style={{ flex: 7 }}
              rules={[{ required: true, message: 'Por favor, selecione o destino!' }]} // Mensagem customizada
            >
              <Select onChange={(value) => console.log('Destino selecionado:', value)}>
                <Option value="araiose">Araioses</Option>
                <Option value="parnaiba">Parnaíba</Option>
                <Option value="barreirinhas">Barreirinhas</Option>
              </Select>
            </Form.Item>

        <Form.Item
          label="Data Ida"
          name="DatePicker"
          style={{ width:'120px' }}
          rules={[{ required: true, message: 'Preencha o campo' }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Data Volta"
          name="Data Ida"
          style={{ width:'120px' , height:'50px'}}
          rules={[{ required: true, message: 'Preencha o campo' }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 1,
            span: 19,
          }}
        >
          <Button style={{ position: 'relative', bottom: '-30px', backgroundColor:'#C6223F' }} type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default App;
