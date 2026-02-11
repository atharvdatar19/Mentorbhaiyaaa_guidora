import { useEffect, useState } from "react"
import supabase from "../supabaseClient"

export default function Alerts() {
  const [alerts, setAlerts] = useState([])

  useEffect(() => {
    async function fetchAlerts() {
      const { data } = await supabase.from("colleges").select("*")
      const today = new Date()

      const closing = (data || []).filter(c => {
        const diff = (new Date(c.application_end) - today) / (1000*60*60*24)
        return diff <= 5 && diff >= 0
      })

      setAlerts(closing)
    }
    fetchAlerts()
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Alerts</h2>
      {alerts.length === 0 && <p>No urgent deadlines.</p>}
      {alerts.map(a => (
        <div key={a.id} className="bg-white p-4 mb-4 rounded shadow">
          {a.name} is closing soon!
        </div>
      ))}
    </div>
  )
}
