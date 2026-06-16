import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, hoverLift, popCard, staggerContainer, tapPress, viewportOnce } from '../../utils/motion'
import './HowItWorksPage.css'

const steps = [
  {
    title: 'Send the photo',
    body: 'Use the order form to upload a clear pet photo, add their name, and write the vibe.',
  },
  {
    title: 'I draw it',
    body: 'I make one funny digital drawing based on the photo and details you send.',
  },
  {
    title: 'You get the file',
    body: 'I send the finished drawing to the contact you put in the form, usually within 24-48 hours.',
  },
]

const notes = [
  'Limited price: $6.99',
  'One pet per order',
  'Digital drawing only',
  'No revisions included',
]

const policyLinks = [
  {
    title: 'Terms',
    body: 'What you are ordering, how delivery works, and how the artwork can be used.',
    to: '/policies/terms',
  },
  {
    title: 'Privacy',
    body: 'How pet photos, contact info, and order details are used.',
    to: '/policies/privacy',
  },
  {
    title: 'Refund Policy',
    body: 'Custom digital drawings are final once ordered.',
    to: '/policies/refunds',
  },
]

function HowItWorksPage() {
  return (
    <main className="paper-canvas how-page" aria-labelledby="how-title">
      <motion.section
        className="how-hero"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <p className="eyebrow">How it works</p>
        <h1 id="how-title">Simple pet chaos in three steps.</h1>
        <p>
          Fill out the form, send the photo, and I will draw your pet as a tiny
          digital menace.
        </p>
        <motion.div whileTap={tapPress}>
          <Link className="button-sketch" to="/order">
            Order for $6.99
          </Link>
        </motion.div>
      </motion.section>

      <motion.section
        className="how-steps"
        aria-label="Order steps"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        {steps.map((step, index) => (
          <motion.article
            key={step.title}
            variants={popCard}
            whileHover={hoverLift}
          >
            <span>{index + 1}</span>
            <h2>{step.title}</h2>
            <p>{step.body}</p>
          </motion.article>
        ))}
      </motion.section>

      <motion.section
        className="how-details"
        aria-labelledby="details-title"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={popCard}
      >
        <div>
          <p className="eyebrow">Before ordering</p>
          <h2 id="details-title">The important stuff.</h2>
          <p>
            I keep this intentionally small and simple so the drawings stay quick,
            funny, and affordable.
          </p>
        </div>
        <ul>
          {notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </motion.section>

      <section className="policy-preview" aria-labelledby="policy-preview-title">
        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="eyebrow">Policies</p>
          <h2 id="policy-preview-title">Read this before ordering.</h2>
        </motion.div>
        <motion.div
          className="policy-preview-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {policyLinks.map((policy) => (
            <motion.div key={policy.title} variants={popCard} whileHover={hoverLift}>
              <Link className="policy-preview-card" to={policy.to}>
                <h3>{policy.title}</h3>
                <p>{policy.body}</p>
                <span>Read policy</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  )
}

export default HowItWorksPage
