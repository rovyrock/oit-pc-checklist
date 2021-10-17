import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import ContentLoading from '@/components/Loading';
// 模拟数据请求等待
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default () => {
  const [status, setStatus] = useState('loading');
  const enterApp = async () => {
    setStatus('loading');
    await sleep(3000).then(() => {
      setStatus('none');
    });
  };
  useEffect(() => {
    enterApp();
  }, []);
  return status === 'loading' ? (
    <ContentLoading text="正在进入 XXXX 系统" />
  ) : (
    <Redirect to="/Demo/Framework/fixheader" />
  );
};
