import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import CollegeDirectory from "./pages/CollegeDirectory"
import Timeline from "./pages/Timeline"

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <aside className="w-64 bg-white shadow-md p-6">
          <h1 className="text-xl font-bold text-blue-600 mb-6">Mentor Bhaiyaaa</h1>
          <nav className="space-y-4">
            <Link to="/" className="block">College Directory</Link>
            <Link to="/timeline" className="block">Timeline</Link>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<CollegeDirectory />} />
            <Route path="/timeline" element={<Timeline />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
