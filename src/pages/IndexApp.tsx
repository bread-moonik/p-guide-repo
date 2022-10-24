import { Link } from "react-router-dom";
import '../assets/styles/index.scss'

function IndexApp() {
  return (
    <div>
      <h1 className="index_title">IndexPage</h1>
      <ul className='link_list'>
        <li>
          <Link to='/TestApp' className="btn_link">move To TestPage</Link>
        </li>
      </ul>
    </div>
  )
}

export default IndexApp;