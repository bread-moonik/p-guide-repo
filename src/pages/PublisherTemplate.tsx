import React from "react";
import MainTitle from '../components/MainTitle';
import SubTitle from '../components/SubTitle';


const PublisherTemplate = () => {
  
  return (
    <div className="inner">
      <MainTitle title="템플릿 페이지" />
      <div className="box">
        <SubTitle subTitle={"MarkUp Example"} />
        <div className="code_box code_html">
          <iframe src="/public/static_page/inc_header.html"></iframe>
        </div>
        <SubTitle subTitle={"output Screen"} />
        <div className="code_box output_screen">
        
        </div>
      </div>
      <div className="box">
        <SubTitle subTitle={"CSS Example"} />
        <div className="code_box code_css">
          <iframe src="/public/static_page/inc_css.html"></iframe>
        </div>
      </div>
    </div>
  )
}
export default PublisherTemplate