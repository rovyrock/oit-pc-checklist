import React from 'react';
import { Row, Col } from 'tea-component/lib';

const App = React.forwardRef((props, ref) => {
  const { column, className, left, right } = props;
  return (
    <div ref={ref}>
      <Row
        gap={0}
        showSplitLine
        className={`oit-layout--2column${className ? ` ${className}` : ''}`}
      >
        <Col className="tea-grid__item--left">{left}</Col>
        <Col>{right}</Col>
      </Row>
    </div>
  );
});
export default App;
