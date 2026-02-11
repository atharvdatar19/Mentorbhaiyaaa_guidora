import { useEffect, useState } from "react"
import supabase from "../supabaseClient"

export default function CollegeDirectory() {
  const [colleges, setColleges] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    async function fetchColleges() {
      const { data } = await supabase
        .from("colleges")
        .select("*")
        .order("application_end", { ascending: true })
      setColleges(data || [])
    }
    fetchColleges()
  }, [])

  const today = new Date()

  const filtered = colleges.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">College Opportunities</h2>

      <input
        type="text"
        placeholder="Search college..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 p-2 border rounded w-full"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((college) => {
          const diff = (new Date(college.application_end) - today) / (1000*60*60*24)
          return (
            <div key={college.id} className="bg-white p-6 rounded shadow">
              <h3 className="font-bold text-lg">{college.name}</h3>
              <p className="text-sm text-gray-600">{college.city}, {college.state}</p>
              <p className="mt-2">{college.admission_type}</p>
              <p className="mt-2">Last Date: {college.application_end}</p>

              {diff <= 5 && diff >= 0 && (
                <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded mt-2 inline-block">
                  Closing Soon
                </span>
              )}

              <a href={college.official_link} target="_blank" className="text-blue-600 mt-4 block">
                Official Link
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
