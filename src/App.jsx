import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'

// Inner pages load on demand so the first visit stays fast
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

const page = (el) => <Suspense fallback={<div className="page-loading" />}>{el}</Suspense>

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={page(<About />)} />
          <Route path="services" element={page(<Services />)} />
          <Route path="services/painting" element={<Navigate to="/services/painting-decorating" replace />} />
          <Route path="services/:slug" element={page(<ServiceDetail />)} />
          <Route path="projects" element={page(<Projects />)} />
          <Route path="projects/:slug" element={page(<ProjectDetail />)} />
          <Route path="contact" element={page(<Contact />)} />
          <Route path="*" element={page(<NotFound />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
