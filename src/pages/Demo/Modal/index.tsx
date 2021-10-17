import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Form,
  Input,
  Text,
  Icon,
  Button,
  Radio,
  Layout,
  Card,
  Modal,
  Table,
  Justify,
  MediaObject,
  Collapse,
} from 'tea-component/lib';
import CustomizeField from './customizeField';
import EditLabel from './editLabel';
import FieldLabel from './fieldLabel';
const { Body, Content } = Layout;
const { pageable, autotip, scrollable } = Table.addons;

const options = [
  { value: 'strawberry', text: '草莓', tooltip: '甜甜甜' },
  { value: 'apple', text: '苹果', tooltip: '每日一苹果，医生远离我' },
  { value: 'orange', text: '橙子', tooltip: '丰富 VC 含量' },
  { value: 'durian', text: '榴莲', disabled: true, tooltip: '榴莲已售罄' },
];

export const ModalBasicDemo = (props: {
  visible: any;
  close: any;
  confirm: any;
  cancel: any;
}) => {
  const { visible, close, confirm, cancel } = props;
  return (
    <>
      <Modal visible={visible} caption="对话框标题" onClose={close}>
        <Modal.Body>我是对话框内容</Modal.Body>
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
};
//
function ModalPreviewDemo() {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState('');
  const close = () => {
    setVisible(false);
  };
  const open = () => setVisible(true);
  const text = `
      高高山上一老僧，身穿衲头几千层。
      若问老僧年高迈？曾记得黄河九澄清。
      五百年前，清一澄，总共是四千五百冬。
      老僧收了八个徒弟，八个弟子都有法名。
      大徒弟名字就叫青头愣，二徒弟名叫愣头青。
      三徒弟名字就叫僧三点，四徒弟名字就叫做点三僧。
      五徒弟名叫蹦葫芦把儿，六徒弟名叫把儿葫芦蹦。
      七徒弟名字就叫随风倒，八徒弟名字就叫做倒随风。
      老师傅教给他们八宗艺，八仙过海，各显其能：
      青头愣会打磬，愣头青会撞钟。
      僧三点会吹管，点三僧会捧笙。
      蹦葫芦把儿会打鼓，把儿葫芦蹦会念经。
      随风倒他会扫地，这个倒随风他会点灯。
    `;
  return (
    <>
      <Modal
        className="oit-modal--preview"
        size="l"
        visible={visible}
        caption="标题名称"
        onClose={close}
      >
        <Modal.Body>
          {/* {text} */}
          <iframe
            src="//praneshravi.in/react-diff-viewer/"
            frameBorder="none"
            width="100%"
            height="500"
          ></iframe>
        </Modal.Body>
      </Modal>
      <Button
        style={{ marginRight: 20 }}
        type="primary"
        onClick={() => {
          open();
        }}
      >
        打开
      </Button>
    </>
  );
}

function ModalApproveDemo() {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState('');
  const close = () => {
    setVisible(false);
  };
  const open = () => setVisible(true);
  return (
    <>
      <Modal
        size="m"
        visible={visible}
        caption="商户关联申请结果"
        onClose={close}
      >
        <Modal.Body>
          {type === 'approved'}
          <MediaObject
            className="tea-media--dialog"
            media={<Icon type={type === 'approved' ? 'success' : 'error'} />}
          >
            <>
              <p>
                您的商户 腾讯科技 关联申请
                {type === 'approved' ? (
                  <Text theme="success">已通过</Text>
                ) : (
                  <Text theme="danger">不通过</Text>
                )}
                。
              </p>
              <p>审批意见：{type === 'approved' ? '通过' : '不通过'}。</p>
            </>
          </MediaObject>
        </Modal.Body>
        <Modal.Footer>
          <Button type="primary" onClick={close}>
            我知道了
          </Button>
        </Modal.Footer>
      </Modal>
      <Button
        style={{ marginRight: 20 }}
        type="primary"
        onClick={() => {
          setType('approved');
          open();
        }}
      >
        审批结果（通过）
      </Button>
      <Button
        type="primary"
        onClick={() => {
          setType('disapproved');
          open();
        }}
      >
        审批结果（不通过）
      </Button>
    </>
  );
}

function ModalAddAdminDemo() {
  const [visible, setVisible] = useState(false);
  const close = () => {
    setVisible(false);
  };
  const open = () => setVisible(true);
  // 管理员类型
  const [managerType, setManagerType] = useState<any>(null);
  return (
    <>
      <Modal
        size="s"
        visible={visible}
        caption="新增管理员"
        onClose={close}
        className="modal-form"
      >
        <form>
          <Modal.Body>
            <Form>
              <Form.Item required={true} label="用户名">
                <Input
                  size="m"
                  maxLength={40}
                  placeholder="请输入用户名"
                  autoComplete="off"
                />
              </Form.Item>
              <Form.Item required={true} label="账号ID">
                <Input
                  size="m"
                  maxLength={40}
                  placeholder="请输入账号ID"
                  autoComplete="off"
                />
              </Form.Item>
              <Form.Item label="管理员类型">
                <Radio.Group
                  layout="column"
                  value={managerType}
                  onChange={(value) => {
                    console.log('Radio', value, managerType);
                    setManagerType(value);
                  }}
                >
                  <Radio name="male">
                    <Text>超级商户管理员</Text>
                    <br />
                    <Text theme="weak">
                      可新增、删除、修改商户管理员和审批管理员的权限，也具有审批商户内所有角色权限的能力
                    </Text>
                  </Radio>
                  <Radio name="female">
                    <Text>普通审批管理员</Text>
                    <br />
                    <Text theme="weak">可审批商户内所有角色权限</Text>
                  </Radio>
                </Radio.Group>
              </Form.Item>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button type="primary" htmlType="submit" onClick={close}>
              确认
            </Button>
            <Button htmlType="button" onClick={close}>
              取消
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      <Button
        type="primary"
        onClick={() => {
          open();
        }}
      >
        新增管理员
      </Button>
    </>
  );
}

function ModalFormDemo() {
  const [visible, setVisible] = useState(false);
  const close = () => {
    setVisible(false);
  };
  const open = () => setVisible(true);

  return (
    <>
      <Modal
        size="s"
        visible={visible}
        caption="表单弹框"
        onClose={close}
        className="modal-form"
      >
        <form>
          <Modal.Body>
            <Form>
              <Form.Item required={true} label="用户名">
                <Input
                  size="m"
                  maxLength={40}
                  placeholder="请输入用户名"
                  autoComplete="off"
                />
              </Form.Item>
              <Form.Item required={true} label="账号ID">
                <Input
                  size="m"
                  maxLength={40}
                  placeholder="请输入账号ID"
                  autoComplete="off"
                />
              </Form.Item>
              <Form.Item label="审批意见">
                <Input
                  style={{ width: '100%' }}
                  multiline
                  placeholder="请填写描述，200字符内"
                />
              </Form.Item>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button type="primary" htmlType="submit" onClick={close}>
              确认
            </Button>
            <Button htmlType="button" onClick={close}>
              取消
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
      <Button
        type="primary"
        onClick={() => {
          open();
        }}
      >
        表单弹框
      </Button>
    </>
  );
}
// 批量审批
function ModalAllApprove() {
  const [visible, setVisible] = useState(false);
  const [action, setAction] = useState('');
  const close = () => {
    setVisible(false);
  };
  const open = () => setVisible(true);

  // 批量审批弹框
  const dataSource = [
    {
      id: 1,
      merchant: '商户1111',
      dev_name: '腾讯',
      apply_time: '2020-12-12 12:21:12',
    },
    {
      id: 2,
      merchant: '商户2222',
      dev_name: '开发商A',
      apply_time: '2020-12-12 12:21:12',
    },
    {
      id: 3,
      merchant: '商户3333',
      dev_name: '开发商B',
      apply_time: '2020-12-12 12:21:12',
    },
    {
      id: 4,
      merchant: '商户4444',
      dev_name: '开发商C',
      apply_time: '2020-12-12 12:21:12',
    },
    {
      id: 5,
      merchant: '商户5555',
      dev_name: '开发商D',
      apply_time: '2020-12-12 12:21:12',
    },
    {
      id: 6,
      merchant: '商户6666',
      dev_name: '开发商E',
      apply_time: '2020-12-12 12:21:12',
    },
  ];

  return (
    <>
      <Modal
        size="s"
        visible={visible}
        caption="角色绑定审批"
        onClose={close}
        className="modal-form"
      >
        <form>
          <Modal.Body>
            <Form>
              <div style={{ marginBottom: 20 }}>
                <Table
                  bordered
                  records={dataSource}
                  recordKey="id"
                  columns={[
                    {
                      key: 'merchant',
                      header: '商户名称',
                    },
                    {
                      key: 'dev_name',
                      header: '开发商名称',
                    },
                    {
                      key: 'apply_time',
                      header: '申请时间',
                    },
                  ]}
                  addons={[
                    scrollable({
                      virtualizedOptions: {
                        height: 200,
                        itemHeight: 50,
                        onScrollBottom: () => console.log('Bottom'),
                      },
                    }),
                  ]}
                />
              </div>
              <Form.Item label="审批结果">
                <Form.Text>
                  {action === '2' ? (
                    <Text theme="danger">不通过</Text>
                  ) : action === '3' ? (
                    <Text theme="success">通过</Text>
                  ) : (
                    <Text theme="warning">审批中</Text>
                  )}
                </Form.Text>
              </Form.Item>
              <Form.Item label="审批意见" style={{ marginBottom: 0 }}>
                <Input
                  style={{ width: '100%' }}
                  multiline
                  placeholder="请填写描述，200字符内"
                />
              </Form.Item>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button type="primary" htmlType="submit" onClick={close}>
              确认
            </Button>
            <Button htmlType="button" onClick={close}>
              取消
            </Button>
          </Modal.Footer>
        </form>
      </Modal>

      <Button
        type="primary"
        onClick={() => {
          setAction('3');
          open();
          // MerchantAuthAllModal(dataSource, "3");
        }}
      >
        批量审批（通过）
      </Button>
      <Button
        type="pay"
        onClick={() => {
          setAction('2');
          open();
          // MerchantAuthAllModal(dataSource, "2");
        }}
        style={{ marginLeft: 20 }}
      >
        批量审批（拒绝）
      </Button>
    </>
  );
}

function AllErrors() {
  const [visible, setVisible] = useState<any>(false);
  const records = [
    {
      id: '1',
      receiver: '美国日志存储',
      address: '位置',
      reason: '这是原因',
      fild: '/USA/DMCS/14689656568.zip',
      passedword: '',
      status: 1,
    },
    {
      id: '2',
      receiver: '美国日志存储',
      address: '位置',
      reason: '这是原因',
      fild: '/USA/DMCS/14689656568.zip',
      passedword: '',
      status: 2,
    },
    {
      id: '3',
      receiver: '美国日志存储',
      address: '位置',
      reason: '这是原因',
      fild: '/USA/DMCS/14689656568.zip',
      passedword: '',
      status: 3,
    },
    {
      id: '4',
      receiver: '美国日志存储',
      address: '位置',
      reason: '这是原因',
      fild: '/USA/DMCS/14689656568.zip',
      passedword: '',
      status: 3,
    },
    {
      id: '5',
      receiver: '美国日志存储',
      address: '位置',
      reason: '这是原因',
      fild: '/USA/DMCS/14689656568.zip',
      passedword: '',
      status: 3,
    },
    {
      id: '6',
      receiver: '美国日志存储',
      address: '位置',
      reason: '这是原因',
      fild: '/USA/DMCS/14689656568.zip',
      passedword: '',
      status: 3,
    },
    {
      id: '7',
      receiver: '美国日志存储',
      address: '位置',
      reason: '这是原因',
      fild: '/USA/DMCS/14689656568.zip',
      passedword: '',
      status: 3,
    },
    {
      id: '8',
      receiver: '美国日志存储',
      address: '位置',
      reason: '这是原因',
      fild: '/USA/DMCS/14689656568.zip',
      passedword: '',
      status: 3,
    },
    {
      id: '9',
      receiver: '美国日志存储',
      address: '位置',
      reason: '这是原因',
      fild: '/USA/DMCS/14689656568.zip',
      passedword: '',
      status: 3,
    },
    {
      id: '10',
      receiver: '美国日志存储',
      address: '位置',
      reason: '这是原因',
      fild: '/USA/DMCS/14689656568.zip',
      passedword: '',
      status: 3,
    },
  ];
  const toggleVisible = () => {
    setVisible(!visible);
    console.log('hello', visible);
  };
  return (
    <>
      <div>
        这里是失败原因共<Text theme="danger">20</Text>条，
        <Button
          type="link"
          onClick={() => {
            toggleVisible();
          }}
        >
          查看详情<Icon type={visible ? 'arrowup' : 'arrowdown'}></Icon>
        </Button>
      </div>
      <Table
        style={{ display: visible ? 'block' : 'none', marginTop: 20 }}
        records={records}
        recordKey="id"
        bordered
        columns={[
          {
            key: 'address',
            header: '失败位置',
          },
          {
            key: 'reason',
            header: '失败原因',
          },
        ]}
        addons={[
          scrollable({
            maxHeight: 400,
          }),
        ]}
      />
    </>
  );
}

// 批量错误提示
function ModalAllErrors() {
  const alertModal = () =>
    Modal.error({
      message: '接收器文件复制失败',
      description: <AllErrors />,
      buttons: [<Button type="primary">我知道了</Button>],
    });

  return (
    <Button style={{ marginLeft: 20 }} onClick={alertModal}>
      批量错误提示
    </Button>
  );
}

export default function ModalExample(props: { userType: number }) {
  return (
    <Layout>
      <Body>
        <Content className="oit-layout--fixheader">
          <Content.Header title="弹框" />
          <Content.Body full style={{ overflow: 'hidden', overflowY: 'auto' }}>
            <Card>
              <Card.Body title="业务弹框">
                <ModalAddAdminDemo />
              </Card.Body>
            </Card>
            <Card>
              <Card.Body title="表单弹框">
                <ModalFormDemo />
              </Card.Body>
            </Card>

            <Card>
              <Card.Body
                title="预览弹框"
                subtitle="一般用在邮件预览，网页预览等"
              >
                <ModalPreviewDemo />
              </Card.Body>
            </Card>

            <Card>
              <Card.Body title="业务涉及到的弹框">
                <ModalAllApprove />
                <CustomizeField />
                <EditLabel />
                <FieldLabel />
              </Card.Body>
            </Card>

            <Card>
              <Card.Body title="业务弹框（审批结果）">
                <ModalApproveDemo />
                <ModalAllErrors />
              </Card.Body>
            </Card>
          </Content.Body>
        </Content>
      </Body>
    </Layout>
  );
}
