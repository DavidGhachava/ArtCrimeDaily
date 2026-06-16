import { motion } from 'framer-motion'
import OrderForm from '../../components/OrderForm/OrderForm'
import { galleryItems } from '../../data/galleryItems'
import { fadeUp, hoverLift, popCard, staggerContainer, tapPress, viewportOnce } from '../../utils/motion'
import './OrderPage.css'

const showcaseItems = galleryItems.slice(0, 3)

function OrderPage() {
  return (
    <main className="paper-canvas order-page" aria-labelledby="order-title">
      <motion.section
        className="order-hero"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <p className="eyebrow">Limited price</p>
        <h1 id="order-title">Pet drawings for $6.99.</h1>
        <p>
          Send me a pet photo, their name, and a few personality details. I will
          turn it into a funny digital portrait.
        </p>
        <div className="order-hero-actions" aria-label="Launch offer details">
          <motion.a className="button-sketch" href="#order-form" whileTap={tapPress}>
            Order for $6.99
          </motion.a>
          <span>Limited price while I take the first batch.</span>
        </div>
      </motion.section>

      <motion.ul
        className="order-quick-details"
        aria-label="Order details"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.li variants={popCard}>1 pet</motion.li>
        <motion.li variants={popCard}>Digital drawing</motion.li>
        <motion.li variants={popCard}>Usually 24-48h</motion.li>
      </motion.ul>

      <section className="order-showcase" aria-labelledby="showcase-title">
        <motion.div
          className="section-heading"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="eyebrow">What you get</p>
          <h2 id="showcase-title">Tiny pet drama, drawn by me.</h2>
        </motion.div>
        <motion.div
          className="showcase-grid"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
        >
          {showcaseItems.map((item) => (
            <motion.div
              className="showcase-motion-wrap"
              key={item.name}
              variants={popCard}
              whileHover={hoverLift}
            >
              <article className="showcase-card">
                <img src={item.image} alt={`${item.name} custom pet portrait`} />
                <div>
                  <span>{item.name}</span>
                  <p>Stylized, silly, digital, and ready to post.</p>
                </div>
              </article>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <motion.section
        className="social-proof"
        aria-labelledby="proof-title"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={popCard}
      >
        <div>
          <p className="eyebrow">Order details</p>
          <h2 id="proof-title">Everything goes through the form.</h2>
          <p>
            Add your contact, upload the pet photo, and write anything I should know
            before I draw.
          </p>
        </div>
        <ul>
          <li>Pet photo</li>
          <li>Pet name</li>
          <li>A few personality details</li>
        </ul>
      </motion.section>

      <motion.section
        className="order-layout"
        aria-label="Order form"
        id="order-form"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
      >
        <motion.aside className="order-side-card order-side-left" variants={popCard}>
          <p className="eyebrow">Before you order</p>
          <h2>Clear photos work best.</h2>
          <p>
            Face, eyes, and personality matter most. Weird little details help too.
          </p>
        </motion.aside>
        <motion.div variants={popCard}>
          <OrderForm />
        </motion.div>
        <motion.aside className="order-side-card order-side-right" variants={popCard}>
          <p className="eyebrow">Reminder</p>
          <h2>Goofy is the point.</h2>
          <p>
            I make one silly, stylized digital drawing from the photo you send.
          </p>
        </motion.aside>
      </motion.section>
    </main>
  )
}

export default OrderPage
