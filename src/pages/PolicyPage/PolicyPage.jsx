import { motion } from 'framer-motion'
import { Navigate, useParams } from 'react-router-dom'
import { policies } from '../../data/policies'
import { fadeUp, popCard, staggerContainer, viewportOnce } from '../../utils/motion'
import './PolicyPage.css'

function PolicyPage() {
  const { policyId } = useParams()
  const policy = policies[policyId]

  if (!policy) {
    return <Navigate to="/" replace />
  }

  return (
    <main className="paper-canvas policy-page">
      <motion.section
        className="policy-hero"
        aria-labelledby="policy-title"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <p className="eyebrow">{policy.eyebrow}</p>
        <h1 id="policy-title">{policy.title}</h1>
        <p className="policy-updated">{policy.updated}</p>
        <p className="policy-intro">{policy.intro}</p>
      </motion.section>
      <motion.section
        className="policy-card"
        aria-label={`${policy.title} details`}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        {policy.sections.map((section) => (
          <motion.article
            className="policy-section"
            key={section.title}
            variants={popCard}
          >
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.article>
        ))}
      </motion.section>
    </main>
  )
}

export default PolicyPage
