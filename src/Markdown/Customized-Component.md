Customized Component 自定义组件（全新）

```js

import React from 'react';
import { Card } from 'tea-component';
const { Body, Content } = Layout;

function Example() {

    return (
        <Card className="screenshot">
            <Card.Body title="Screenshots">
                <div className="screenshot-viewer">
                </div>
                <div className="screenshot-thumbs">
                    <div className="screenshot-thumb"></div>
                </div>
            </Card.Body>
        </Card>
    )
}
export default Example;

```