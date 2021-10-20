Customized Component 自定义组件（全新）

```js

import React from 'react';
import { Card } from 'tea-component';
const { Body, Content } = Layout;

function Example() {

    return (
        <Card className="screenshot">
            <Card bordered>
                <Card.Body title="Screenshots">
                    <div className="screenshot-viewer">
                        图片img/视频video
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <div className="screenshot-thumbs">
                    {dataScreenshots.map((item, index) => (
                        <div className="screenshot-thumb" key={index}>
                            缩略图
                        </div>
                    ))}
                </div>
            </Card>
        </Card>
    )
}
export default Example;

```


```js

import React from 'react';
import { Card } from 'tea-component';
const { Body, Content } = Layout;

function Example() {

    return (
        <Card className="screenshot">
            <Card bordered>
				<Card.Body title="Screenshots">
					<div className="screenshot-viewer">
						{curType === 'image' ? (
							<img
								className=""
								src={require(`@/assets/images/gamedetail/screenshots/${cur}.png`)}
							/>
						) : (
							<Player
								autoPlay
								ref={playerEl}
								videoId="video-1"
								src={
									'https://wegame.gtimg.com/g.2001643-r.b4e13/adm/16221963223882.mp4'
								}
							>
								<ControlBar
									autoHide={false}
									className="my-class"
								/>
							</Player>
						)}
					</div>
				</Card.Body>
			</Card>
			<Card>
				<div className="screenshot-thumbs">
					{dataScreenshots.map((item, index) => (
						<div
							key={index}
							className={`screenshot-thumb${
								item.id === cur
									? ` screenshot-thumb--active`
									: ``
							}`}
							onClick={() => {
								setCur(item.id);
								setCurType(item.type);
								if (item.type === 'video') {
									console.log('playerEl', playerEl);
								}
							}}
						>
							<img src={item.thumb} alt={item.label} />
							{item.type === 'video' ? (
								<div className="screenshot-thumb-play"></div>
							) : (
								''
							)}
						</div>
					))}
				</div>
			</Card>
        </Card>
    )
}
export default Example;

            
```