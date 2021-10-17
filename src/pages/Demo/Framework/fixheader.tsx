import React from 'react';
import { Layout, Card } from 'tea-component';
// import Form from "../Form/single";
// import Content02 from "../Tab/TabPanel02";

const { Body, Sider, Content } = Layout;

function LayoutExample() {
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
    <Layout>
      <Body>
        <Content className="oit-layout--fixheader">
          <Content.Header title="右栏标题置顶 (oit-layout--fixheader)" />
          <Content.Body full>
            {Object.entries([1, 2, 3, 4, 5, 6, 7]).map((item, index) => (
              <Card key={index}>
                <Card.Body title="卡片标题">{text}</Card.Body>
              </Card>
            ))}
            <Card>
              <Card.Body title="卡片标题">{/* <Form/> */}</Card.Body>
            </Card>
            <Card>
              <Card.Body title="卡片标题">{/* <Form/> */}</Card.Body>
            </Card>
          </Content.Body>
        </Content>
      </Body>
    </Layout>
  );
}

export default function Demo() {
  return (
    <Content>
      <LayoutExample />
    </Content>
  );
}
