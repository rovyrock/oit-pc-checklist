import React, { useState } from 'react';
import { Card, Status, StatusTip } from 'tea-component/lib';

export default function App(props) {
  const { column, className, left, right } = props;
  return (
    <div className="oit-layout--loading">
      <div className="oit-layout--loading-wrap">
        <StatusTip status="loading" />
      </div>
    </div>
  );
}
