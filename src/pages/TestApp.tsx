import React from 'react';
import MainTitle from '../components/MainTitle';
import SubTitle from '../components/SubTitle';
import {Link} from "react-router-dom";

function TestApp() {
  
  return (
    <div className={"inner"}>
      <MainTitle title="가이드 목록" />
      <div className={"box"}>
        <SubTitle subTitle={"1. MarkUp"}/>
        <ul className="link_list">
          <li>a. HTML</li>
          <li>b. CSS</li>
          <li>c. Javascript</li>
        </ul>
      </div>
      <div className={"box"}>
        <SubTitle subTitle={"2. 웹표준"}/>
        <ul className="link_list">
          <li>a. 개요</li>
          <li>b. 가이드 문서</li>
        </ul>
      </div>
      <div className={"box"}>
        <SubTitle subTitle={"3. 웹 접근성"}/>
        <ul className="link_list">
          <li>a. 개요</li>
          <li>b. 가이드 문서</li>
        </ul>
      </div>
      <div className={"box"}>
        <SubTitle subTitle={"4. 네이밍 규칙"}/>
        <ul className="link_list">
          <li>a. 개요</li>
          <li>b. sample</li>
        </ul>
      </div>
      <div className={"box"}>
        <SubTitle subTitle={"5. 퍼블리싱 템플릿 문서"}/>
        <ul className="link_list">
          <li>a. 개요</li>
          <li>b. header</li>
          <li>c. footer</li>
          <li>d. container</li>
          <li>
            <Link to='template' className="btn_link">e. layerPopup</Link>
          </li>
          <li>
            f. component
          </li>
          <li>
            g. common.css
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TestApp;