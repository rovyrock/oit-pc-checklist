import React, { useState } from 'react';

import {
  Form,
  Button,
  Modal,
  CheckboxGroup,
  Checkbox,
  Row,
  Col,
} from 'tea-component/lib';

export default function ModalDemoExample(props: any) {
  const [visible, setVisible] = useState(false);

  const open = () => setVisible(true);
  const close = () => setVisible(false);

  return (
    <>
      <Button type="primary" onClick={open} style={{ marginLeft: 20 }}>
        编辑标注
      </Button>
      <Modal
        visible={visible}
        caption="编辑标注"
        onClose={close}
        className="modal-form"
      >
        <Modal.Body>
          <Form layout="vertical">
            <Row>
              <Col span={8}>
                <Form.Item label="数据采集">
                  <CheckboxGroup>
                    <Checkbox name="data1">数据采集小类1</Checkbox>
                    <Checkbox name="data2">数据采集小类2</Checkbox>
                  </CheckboxGroup>
                </Form.Item>
                <Form.Item label="数据传输">
                  <CheckboxGroup>
                    <Checkbox name="data1">数据采集小类1</Checkbox>
                    <Checkbox name="data2">数据采集小类2</Checkbox>
                  </CheckboxGroup>
                </Form.Item>
                <Form.Item label="数据存储">
                  <CheckboxGroup>
                    <Checkbox name="data1">数据采集小类1</Checkbox>
                    <Checkbox name="data2">数据采集小类2</Checkbox>
                  </CheckboxGroup>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="数据计算">
                  <CheckboxGroup>
                    <Checkbox name="data1">数据采集小类1</Checkbox>
                    <Checkbox name="data2">数据采集小类2</Checkbox>
                  </CheckboxGroup>
                </Form.Item>
                <Form.Item label="数据传输">
                  <CheckboxGroup>
                    <Checkbox name="data1">数据采集小类1</Checkbox>
                    <Checkbox name="data2">数据采集小类2</Checkbox>
                    <Checkbox name="data3">数据采集小类3</Checkbox>
                  </CheckboxGroup>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="调度">
                  <CheckboxGroup>
                    <Checkbox name="data1">数据采集小类1</Checkbox>
                    <Checkbox name="data2">数据采集小类2</Checkbox>
                  </CheckboxGroup>
                </Form.Item>
                <Form.Item label="原始日志检测">
                  <CheckboxGroup>
                    <Checkbox name="data1">数据采集小类1</Checkbox>
                    <Checkbox name="data2">数据采集小类2</Checkbox>
                    <Checkbox name="data3">数据采集小类3</Checkbox>
                  </CheckboxGroup>
                </Form.Item>
                <Form.Item label="使用数据">
                  <CheckboxGroup>
                    <Checkbox name="data1">数据采集小类1</Checkbox>
                    <Checkbox name="data2">数据采集小类2</Checkbox>
                    <Checkbox name="data3">数据采集小类3</Checkbox>
                  </CheckboxGroup>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="primary" onClick={close}>
            确定
          </Button>
          <Button type="weak" onClick={close}>
            取消
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
