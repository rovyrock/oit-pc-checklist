import React, { useState } from 'react';

import {
  Form,
  Button,
  Modal,
  CheckboxGroup,
  Checkbox,
} from 'tea-component/lib';

export default function ModalDemoExample(props: any) {
  const [visible, setVisible] = useState(false);

  const open = () => setVisible(true);
  const close = () => setVisible(false);

  return (
    <>
      <Button type="primary" onClick={open} style={{ marginLeft: 20 }}>
        自定义字段设置
      </Button>
      <Modal
        visible={visible}
        caption="自定义字段设置"
        onClose={close}
        className="modal-form"
      >
        <Modal.Body>
          <Form hideLabel>
            <Form.Item label="字段">
              <CheckboxGroup className="checkbox--2row">
                <Checkbox name="field_name" value disabled>
                  字段名称
                </Checkbox>
                <Checkbox name="field_sensive_level" value disabled>
                  敏感等级
                </Checkbox>
                <Checkbox name="field_id">字段ID</Checkbox>
                <Checkbox name="field_modified_time">修改时间</Checkbox>
                <Checkbox name="field_type" value>
                  字段类型
                </Checkbox>
                <Checkbox name="field_private_level">隐私等级</Checkbox>
                <Checkbox name="field_size" value>
                  字段大小
                </Checkbox>
                <Checkbox name="field_private_cate">隐私分类</Checkbox>
                <Checkbox name="field_creator">创建人</Checkbox>
                <Checkbox name="field_operation">处理方式</Checkbox>
                <Checkbox name="field_create_time">创建时间</Checkbox>
                <Checkbox name="field_memo">备注</Checkbox>
                <Checkbox name="field_content_cate">内容分类</Checkbox>
              </CheckboxGroup>
            </Form.Item>
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
