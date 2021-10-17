import { useState, useEffect } from 'react';
import { Button, Form, Input, Modal, Text } from 'tea-component';
// https://react-hook-form.com/api/useform/register
import { useForm } from 'react-hook-form';

const { TextArea } = Input;

export default function EditWhiteList(props) {
  // console.log('EditWhiteList', props);
  const [editWthiteListVisible, setEditWthiteListVisible] = useState(false); // 添加区服的弹框状态

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      // 大区名称
      whitelist_name: props.whitelist_name,
      whitelist_list: props.whitelist_list,
      file: props.file,
    },
  });

  const editWhiteList = () => {
    setEditWthiteListVisible(true);
  };

  const onSubmit = (data) => {
    console.log('onSubmit data', data);
    // const { whitelist_name } = data;
    // console.log("onSubmit", props.gameid, whitelist_name, isValid)
    // 提交到数据接口
  };

  useEffect(() => {
    // 请求数据接口
  }, [props.gameid, props.whitelist_id]);

  return (
    <>
      <Button type="link" onClick={editWhiteList}>
        编辑
      </Button>
      <Modal
        visible={editWthiteListVisible}
        caption="白名单"
        onClose={() => setEditWthiteListVisible(false)}
      >
        <Modal.Body>
          <form
            style={{ display: 'flex', flexDirection: 'column' }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Form>
              <Form.Item
                label="白名单名称"
                message={errors.whitelist_name && '长度在 1 到 10 个字符'}
                status={errors.whitelist_name ? 'error' : ''}
              >
                <Input
                  size="full"
                  {...register('whitelist_name', {
                    required: true,
                    validate: (value) => value.length > 0 && value.length <= 20,
                  })}
                  value={watch('whitelist_name')}
                  onChange={(value) => {
                    setValue('whitelist_name', value, {
                      shouldValidate: true,
                    });
                  }}
                  placeholder="请填写白名单名称"
                />
              </Form.Item>
              <Form.Item
                label="白名单列表"
                // message={errors.whitelist_list && intl.formatMessage({ id: 'allowAreaNameLength' })}
                // status={errors.whitelist_list ? 'error' : ('' as any)}
              >
                <TextArea
                  size="full"
                  {...register('whitelist_list', {
                    // required: true,
                    // validate: (value) => value.length > 0 && value.length <= 20,
                  })}
                  value={watch('whitelist_list')}
                  onChange={(value) => {
                    setValue('whitelist_list', value, {
                      // shouldValidate: true,
                    });
                  }}
                  placeholder="请输入用户身份标识，多个用回车分开，最大支持200个白名单用户"
                />
                <Text
                  theme="weak"
                  reset
                  style={{ marginTop: 5, display: 'block' }}
                >
                  50个字符以内，支持汉字、英文、标点符号、数字，不含转义符
                </Text>
              </Form.Item>
            </Form>
            <Form.Action>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button
                htmlType="button"
                onClick={() => {
                  setEditWthiteListVisible(false);
                }}
              >
                取消
              </Button>
            </Form.Action>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
