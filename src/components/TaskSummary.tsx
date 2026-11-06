type TaskSummaryProps = {
  total: number
  completed: number
}

export function TaskSummary({ total, completed }: TaskSummaryProps) {
  const summaryItems = [
    { value: total, label: 'Aufgaben insgesamt' },
    { value: completed, label: 'Erledigt' },
    { value: total - completed, label: 'Noch offen' },
  ]

  return (
    <div className="summary-grid">
      {summaryItems.map((item) => (
        <div className="summary-card" key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}
