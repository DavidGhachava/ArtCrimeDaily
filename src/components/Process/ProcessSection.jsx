import RecentReactions from '../Testimonials/RecentReactions'
import './ProcessSection.css'

function ProcessSection() {
  return (
    <section className="process" id="process" aria-labelledby="process-title">
      <div className="section-heading">
        <p className="eyebrow">How it works</p>
        <h2 id="process-title">Send the pet. Tell the lore. Wait for magic.</h2>
      </div>
      <div className="process-layout">
        <ol className="process-steps">
          <li>
            <span>1</span>
            <div>
              <h3>Upload their best face</h3>
              <p>
                A favorite photo, a sleepy photo, a suspicious little stare. Anything
                with personality works.
              </p>
            </div>
          </li>
          <li>
            <span>2</span>
            <div>
              <h3>Write the story</h3>
              <p>
                Share their name, their weird habits, and whether the painting should
                feel soft, silly, dramatic, or fully unhinged.
              </p>
            </div>
          </li>
          <li>
            <span>3</span>
            <div>
              <h3>Get the reveal</h3>
              <p>
                When it is ready, she DMs you, chats a little, then reveals the
                finished drawing.
              </p>
            </div>
          </li>
        </ol>
        <aside className="process-order-card">
          <p className="eyebrow">Ready?</p>
          <h3>Put your pet in the crime file.</h3>
          <p>
            The order page has the photo upload, story box, and payment flow in one
            place.
          </p>
          <a className="button-sketch" href="/order">
            Start order
          </a>
        </aside>
      </div>
      <RecentReactions />
      <section className="final-cta" aria-labelledby="final-cta-title">
        <p id="final-cta-title">What are you waiting for?</p>
        <a className="button-sketch final-cta-button" href="/order">
          Order mine
        </a>
      </section>
    </section>
  )
}

export default ProcessSection
