import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import RecentReactions from '../Testimonials/RecentReactions'
import { fadeUp, hoverLift, popCard, staggerContainer, tapPress, viewportOnce } from '../../utils/motion'
import './ProcessSection.css'

function ProcessSection() {
  return (
    <section className="process" id="process" aria-labelledby="process-title">
      <motion.div
        className="section-heading"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeUp}
      >
        <p className="eyebrow">How it works</p>
        <h2 id="process-title">Send the pet. Tell the lore. Wait for magic.</h2>
      </motion.div>
      <div className="process-layout">
        <motion.ol
          className="process-steps"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          <motion.li variants={popCard} whileHover={hoverLift}>
            <span>1</span>
            <div>
              <h3>Upload their best face</h3>
              <p>
                A favorite photo, a sleepy photo, a suspicious little stare. Anything
                with personality works.
              </p>
            </div>
          </motion.li>
          <motion.li variants={popCard} whileHover={hoverLift}>
            <span>2</span>
            <div>
              <h3>Write the story</h3>
              <p>
                Share their name, their weird habits, and whether the drawing should
                feel soft, silly, dramatic, or fully unhinged.
              </p>
            </div>
          </motion.li>
          <motion.li variants={popCard} whileHover={hoverLift}>
            <span>3</span>
            <div>
              <h3>Get the reveal</h3>
              <p>
                When it is ready, I DM you, chat a little, then reveal the finished
                drawing.
              </p>
            </div>
          </motion.li>
        </motion.ol>
        <motion.aside
          className="process-order-card"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={popCard}
          whileHover={hoverLift}
        >
          <p className="eyebrow">Ready?</p>
          <h3>Put your pet in the crime file.</h3>
          <p>
            The order page has the launch price, photo upload, story box, and payment
            details in one place.
          </p>
          <motion.div whileTap={tapPress}>
            <Link className="button-sketch" to="/order">
              Order for $6.99
            </Link>
          </motion.div>
        </motion.aside>
      </div>
      <RecentReactions />
      <motion.section
        className="final-cta"
        aria-labelledby="final-cta-title"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={popCard}
      >
        <p id="final-cta-title">What are you waiting for?</p>
        <motion.div whileTap={tapPress}>
          <Link className="button-sketch final-cta-button" to="/order">
            Order mine for $6.99
          </Link>
        </motion.div>
      </motion.section>
    </section>
  )
}

export default ProcessSection
