import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

const Login = lazy(() => import('./pages/Login'));
const Home = lazy(() => import('./pages/Home'));
const List = lazy(() => import('./pages/List'));
const Map = lazy(() => import('./pages/Map'));
const City = lazy(() => import('./pages/City'));
const PostsIndex = lazy(() => import('./pages/posts/Index'));
const Posts = lazy(() => import('./pages/posts/Posts'));
const AddPost = lazy(() => import('./pages/posts/AddPost'));

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-full bg-slate-700 text-white">
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<Home />} />}>
            <Route index element={<List />} />
            <Route path="map" element={<Map />} />
          </Route>
          <Route
            path="city/:city"
            element={<ProtectedRoute element={<City />} />}
          />
          <Route
            path="posts"
            element={<ProtectedRoute element={<PostsIndex />} />}
          >
            <Route index element={<Posts />} />
            <Route path="add" element={<AddPost />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
