import { useEffect, useState } from "react"
import supabase from "../supabaseClient"

export default function CollegeDirectory() {
  const [colleges, setColleges] = useState([])

  useEffect(() => {
    fetchColleges()
  }, [])

  async function fetchColleges() {
    const { data, error } = await supabase
      .from("colleges")
      .select("*")
      .order("application_end", { ascending: true })

    if (!error) setColleges(data)
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">College Opportunities</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {colleges.map((college) => (
          <div key={college.id} className="bg-white p-6 rounded shadow">
            <h3 className="font-bold text-lg">{college.name}</h3>
            <p className="text-sm text-gray-600">{college.city}, {college.state}</p>
            <p className="mt-2">{college.admission_type}</p>
            <p className="text-red-600 mt-2">
              Last Date: {college.application_end}
            </p>
            <a href={college.official_link} target="_blank" className="text-blue-600 mt-2 block">
              Official Link
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
