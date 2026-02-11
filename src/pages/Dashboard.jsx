import { useEffect, useState } from "react"
import supabase from "../supabaseClient"

export default function Dashboard() {
  const [colleges, setColleges] = useState([])
  const [exams, setExams] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data: collegeData } = await supabase.from("colleges").select("*")
      const { data: examData } = await supabase.from("exams_timeline").select("*")
      setColleges(collegeData || [])
      setExams(examData || [])
    }
    fetchData()
  }, [])

  const today = new Date()

  const closingSoon = colleges.filter(c => {
    const diff = (new Date(c.application_end) - today) / (1000*60*60*24)
    return diff <= 5 && diff >= 0
  }).length

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-gray-500">Total Opportunities</h3>
          <p className="text-3xl font-bold">{colleges.length}</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-gray-500">Upcoming Exams</h3>
          <p className="text-3xl font-bold">{exams.length}</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-gray-500">Closing Soon</h3>
          <p className="text-3xl font-bold text-red-600">{closingSoon}</p>
        </div>
      </div>
    </div>
  )
}
