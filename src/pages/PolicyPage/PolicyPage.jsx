import { Navigate, useParams } from 'react-router-dom'
import { policies } from '../../data/policies'
import './PolicyPage.css'

function PolicyPage() {
  const { policyId } = useParams()
  const policy = policies[policyId]

  if (!policy) {
    return <Navigate to="/" replace />
  }

  return (
    <main className="paper-canvas policy-page">
      <section className="policy-hero" aria-labelledby="policy-title">
        <p className="eyebrow">{policy.eyebrow}</p>
        <h1 id="policy-title">{policy.title}</h1>
        <p className="policy-updated">{policy.updated}</p>
        <p className="policy-intro">{policy.intro}</p>
      </section>
      <section className="policy-card" aria-label={`${policy.title} details`}>
        {policy.sections.map((section) => (
          <article className="policy-section" key={section.title}>
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
      </section>
    </main>
  )
}

export default PolicyPage
