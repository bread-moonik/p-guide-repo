import React from "react";
import MainTitle from '../components/MainTitle';
import SubTitle from '../components/SubTitle';
import '../common_jane.scss';


const WebAccess = () => {
  
  return (
    <div className="inner">
      <MainTitle title="웹 접근성(WCAG) 카테고리 별 가이드 라인" />
      <div className="box">

        <div className="head_title">
          <p>☝ Perceivable (인식 / 쉽게 인지할 수 있는지)</p>
        </div>

        <div className="middle_title_box">
          <p>1-1. 대체 텍스트 : 텍스트가 아닌 콘텐츠는 의미나 용도를 이해할 수 있도록 대체 텍스트를 제공해야 한다.</p>
        </div>

        <div className="output_box">
          <SubTitle subTitle={"Output Screen"} />
          <div className="code_box output_screen">
            <img src="/static_page/img/img_webaccess_01.png" alt="" />
          </div>
        </div>
        
        <div className="mark_up_box">
          <SubTitle subTitle={"MarkUp Example"} />
          <div className="code_box code_html overflow_hidden">
            <iframe src="/public/static_page/inc_webaccess.html"></iframe>
          </div>
        </div>

        <div className="mark_up_desc">
          <p>👉 img 태그를 사용하는 경우, alt 속성을 이용하여 짧은 대체 텍스트를 제공한다.</p>
        </div>

        <div className="mark_up_box">
          <SubTitle subTitle={"MarkUp Example"} />
          <div className="code_box code_html overflow_hidden">
            <iframe src="/public/static_page/inc_webaccess.html"></iframe>
          </div>
        </div>

        <div className="mark_up_desc">
          <p>👉 img 태그를 사용하는 경우, alt 속성을 이용하여 짧은 대체 텍스트를 제공한다.</p>
        </div>

      </div>

    </div>
  )
}
export default WebAccess;