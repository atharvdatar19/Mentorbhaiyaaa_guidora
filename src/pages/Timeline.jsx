import { useEffect, useState } from "react"
import supabase from "../supabaseClient"

export default function Timeline() {
  const [exams, setExams] = useState([])

  useEffect(() => {
    fetchTimeline()
  }, [])

  async function fetchTimeline() {
    const { data, error } = await supabase
      .from("exams_timeline")
      .select("*")
      .order("registration_end", { ascending: true })

    if (!error) setExams(data)
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Upcoming Exams & Deadlines</h2>
      <div className="space-y-4">
        {exams.map((exam) => (
          <div key={exam.id} className="bg-white p-6 rounded shadow">
            <h3 className="font-bold">{exam.exam_name}</h3>
            <p>Registration Ends: {exam.registration_end}</p>
            <p>Exam Date: {exam.exam_date}</p>
            <a href={exam.official_link} target="_blank" className="text-blue-600">
              Official Website
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
