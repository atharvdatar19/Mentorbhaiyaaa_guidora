import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import CollegeDirectory from "./pages/CollegeDirectory"
import Timeline from "./pages/Timeline"
import Alerts from "./pages/Alerts"

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <aside className="w-64 bg-slate-900 text-white p-6">
          <h1 className="text-xl font-bold mb-8">Mentor Bhaiyaaa</h1>
          <nav className="space-y-4 text-sm">
            <Link to="/dashboard" className="block hover:text-blue-400">Dashboard</Link>
            <Link to="/" className="block hover:text-blue-400">College Directory</Link>
            <Link to="/timeline" className="block hover:text-blue-400">Timeline</Link>
            <Link to="/alerts" className="block hover:text-blue-400">Alerts</Link>
          </nav>
        </aside>

        <main className="flex-1 p-8 bg-gray-50">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<CollegeDirectory />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/alerts" element={<Alerts />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
