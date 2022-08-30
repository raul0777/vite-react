import { Link } from 'react-router-dom';
import './style.css';

export const Menu = () => {
  return (
    <div>
      <nav className='menu'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
          <li>
            <Link to='/posts/10'>Posts 10</Link>
          </li>
          <li>
            <Link to='Redirect'>Redirect</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};