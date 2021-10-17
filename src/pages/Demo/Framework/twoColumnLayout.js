import React from 'react';

import { Layout, Card } from 'tea-component/lib';
import ColumnLayout from '@/components/columnLayout';
// import "./index.scss"
const { Body, Content } = Layout;
function LeftCard() {
  return (
    <Card>
      <Card.Body title="文档目录">
        <ul className="document-list">
          <li className="document-item">
            <span className="document-item-title">本地化服务</span>
            <div className="markdown-navigation markdown-toc">
              <div className="title-anchor title-level2 ">一、服务内容</div>
              <div className="title-anchor title-level3 ">
                1、定制化一站式解决方案
              </div>
              <div className="title-anchor title-level3 ">
                2、内容制作（翻译、校对、润色）
              </div>
              <div className="title-anchor title-level3 ">3、本地化测试</div>
              <div className="title-anchor title-level3 active">
                4、整合全球Top供应商资源
              </div>
              <div className="title-anchor title-level3 ">5、国际化规范</div>
              <div className="title-anchor title-level3 ">
                6、本地化质量报告
              </div>
              <div className="title-anchor title-level2 ">二、主要功能</div>
              <div className="title-anchor title-level2 ">三、接入步骤</div>
            </div>
          </li>
          <li className="document-item">
            <span className="document-item-title">本地化服务</span>
            <div className="markdown-navigation markdown-toc">
              <div className="title-anchor title-level2 ">一、服务内容</div>
              <div className="title-anchor title-level2 ">二、主要功能</div>
              <div className="title-anchor title-level2 ">三、接入步骤</div>
            </div>
          </li>
          <li className="document-item">
            <span className="document-item-title">本地化服务</span>
            <div className="markdown-navigation markdown-toc">
              <div className="title-anchor title-level2 ">一、服务内容</div>
              <div className="title-anchor title-level2 ">二、主要功能</div>
              <div className="title-anchor title-level2 ">三、接入步骤</div>
            </div>
          </li>
          <li className="document-item">
            <span className="document-item-title">本地化服务</span>
            <div className="markdown-navigation markdown-toc">
              <div className="title-anchor title-level2 ">一、服务内容</div>
              <div className="title-anchor title-level2 ">二、主要功能</div>
              <div className="title-anchor title-level2 ">三、接入步骤</div>
            </div>
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
}
function RightCard() {
  return (
    <>
      <Card>
        <Card.Body title="文档标题（动态获取）">
          <div className="markdown" id="markdown">
            <h1 id="">本地化服务</h1>
            <p>
              为游戏开发者提供本地化策略、多语种翻译、校对、润色、质量评估、语言测试等一站式定制服务，助力产品成功打开全球市场。解决游戏多语言版本制作周期长、质量难把控、成本高的难题，保障游戏品质和口碑。
            </p>
            <h2 id="-1" data-id="heading-0">
              一、服务内容
            </h2>
            <p>
              本地化是游戏发行全球的必备条件，用玩家看得懂的语言做游戏，才能触达并留住更多玩家，保障玩家获得最佳的游戏体验。由于版本迭代快、语种数量多、文本量大等因素，使本地化存在较高难度。本地化服务致力帮助解决游戏多语言版本制作周期长，质量难把控，成本高等难题。通过整包服务，打通开发、内容生产（翻译、校对、润色等）、LQA、发行全链条协作，监控项目动态，及时纠偏，帮助游戏开发者、发行商实现不同规模量级产品在全球市场快速上线，达到高品质上线、内容持续稳定迭代等关键目标。
            </p>
            <p>本地化服务的核心能力包括：</p>
            <h3 id="1" data-id="heading-1">
              1、定制化一站式解决方案
            </h3>
            <p>
              已为全球超过20款全球发行游戏提供本地化整包服务。包括：规划项目目标，定制本地化方案，从发行语种选择、内容制作、资源配置、本地化流程完善，到本地化工具选取等一站式服务。同时提供游戏项目健康度监测，实时监控时间、质量和成本，及时纠偏，保障目标实现。
            </p>
            <h3 id="2" data-id="heading-2">
              2、内容制作（翻译、校对、润色）
            </h3>
            <p>
              根据目标市场和产品定位，匹配相应等级的翻译（包含创译）、校对和润色服务。
            </p>
            <h3 id="3" data-id="heading-3">
              3、本地化测试
            </h3>
            <p>
              测试并解决多语言内容合入游戏后出现的问题，包括语义、超框的检查等等。
            </p>
            <h3 id="4top" data-id="heading-4">
              4、整合全球Top供应商资源
            </h3>
            <p>
              整合超过100家全球范围知名本地化供应商资源，游戏领域资源丰富，包括一些当地的小众游戏本地化服务工作室。深入了解、定期管理并刷新供应商能力，包括翻译质量、擅长的语种、品类、服务类型等。根据项目特性，匹配最合适的资源。
            </p>
            <h3 id="5" data-id="heading-5">
              5、国际化规范
            </h3>
            <p>
              已建立国际化规范体系，解决游戏设计无法适应多国语种的难题，有效减少bug数量。
            </p>
            <h3 id="6" data-id="heading-6">
              6、本地化质量报告
            </h3>
            <p>
              对指定产品出具本地化质量报告，从多维度（语言质量、UI、文化等方面）分析质量问题。提前了解玩家对游戏本地化质量的直观感受，预防上线后口碑崩塌。预先了解和比较同品类产品的本地化质量，有利于确定本地化策略和质量目标。
            </p>
            <h2 id="-2" data-id="heading-7">
              二、主要功能
            </h2>
            <p>
              All-in-One定制一站式解决方案，提供整包服务和各类专项服务（文本翻译与校对、文本润色、本地化测试、文化风险分析、本地化质量评估等）。
            </p>
            <h2 id="-3" data-id="heading-8">
              三、接入步骤
            </h2>
            <p>联系jinjinxu(徐津津)咨询详情，获得免费报价。</p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
export default function App() {
  return (
    <Layout>
      <Body>
        <Content className="oit-layout--fixheader">
          <Content.Header title="右栏内容两栏布局" />
          <Content.Body full>
            <ColumnLayout left={<LeftCard />} right={<RightCard />} />

            {/* 再嵌套 */}
            {/* <ColumnLayout
                            left={
                                <LeftCard />
                            }
                            right={
                                <ColumnLayout
                                    left={<LeftCard />}
                                    right={<RightCard />}
                                />
                            } /> */}
          </Content.Body>
        </Content>
      </Body>
    </Layout>
  );
}
