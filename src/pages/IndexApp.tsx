import { Link } from "react-router-dom";
import MainTitle from '../components/MainTitle';

const IndexApp = () => {
  return (
    <div className="inner">
      <MainTitle title={'퍼블리싱 가이드'} />
      <ul className='link_list'>
        <li>
          <Link to='TestApp' className="btn_link">가이드 목록</Link>
        </li>
      </ul>
    </div>
  )
}

export default IndexApp;