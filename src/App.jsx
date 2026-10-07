import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Documents from './pages/Documents.jsx';
import Blog from './pages/Blog.jsx';
import Faq from './pages/Faq.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="urunler" element={<Products />} />
        <Route path="belgelerimiz" element={<Documents />} />
        <Route path="blog" element={<Blog />} />
        <Route path="sss" element={<Faq />} />
        {/* Eski adresler: Google'da/yer imlerinde kalmış olabilir, kırma. */}
        <Route path="foto" element={<Navigate to="/urunler" replace />} />
        <Route path="document" element={<Navigate to="/belgelerimiz" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
