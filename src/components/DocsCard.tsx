type DocsCardProps = {
  title: string
  description: string
  children: React.ReactNode
}

export function DocsCard({ title, description, children }: DocsCardProps) {
  return (
    <article className="docs-card">
      <h2>{title}</h2>
      <p className="docs-card-description">{description}</p>
      <div className="docs-card-content">{children}</div>
    </article>
  )
}
