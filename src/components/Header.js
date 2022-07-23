import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeKey } from '../services';
import Container from './Container';

function Header() {
  const dispatch = useDispatch();
  return (
    <header className="flex items-center h-20 mb-3">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="text-3xl">
            <Link to="/">Redux App</Link>
          </h1>
          <nav className="ml-4">
            <Link to="/">Weather</Link>
            <Link className="ml-2" to="/posts">
              Posts
            </Link>
          </nav>
          <button
            className="button ml-auto"
            onClick={() => {
              dispatch(removeKey());
            }}
          >
            Logout
          </button>
        </div>
      </Container>
    </header>
  );
}

export default Header;
