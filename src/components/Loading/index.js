import React from 'react';
import { StatusTip } from 'tea-component/lib';

export default function App(props) {
  const { column, className, left, right, text } = props;
  return (
    <div className="oit-layout--loading">
      <div className="oit-layout--loading-wrap">
        <StatusTip status="loading" loadingText={text} />
      </div>
    </div>
  );
}
