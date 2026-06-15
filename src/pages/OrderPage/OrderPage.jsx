import OrderForm from '../../components/OrderForm/OrderForm'
import './OrderPage.css'

function OrderPage() {
  return (
    <main className="paper-canvas order-page" aria-labelledby="order-title">
      <section className="order-hero">
        <p className="eyebrow">Order</p>
        <h1 id="order-title">Send the evidence.</h1>
        <p>
          Upload your pet, tell the story, and choose the goofy little crime scene.
          Basic digital drawings are made to be delivered within 24 hours when
          possible.
        </p>
      </section>
      <section className="order-layout" aria-label="Order form">
        <aside className="order-side-card order-side-left">
          <p className="eyebrow">Digital only</p>
          <h2>No shipping. No frame. Just chaos.</h2>
          <p>
            Your final drawing is made for sharing, saving, or turning into your new
            wallpaper.
          </p>
        </aside>
        <OrderForm />
        <aside className="order-side-card order-side-right">
          <p className="eyebrow">Reminder</p>
          <h2>Goofy is the point.</h2>
          <p>
            No revisions or refunds. The drawing will be silly, stylized, and based
            on the photo you send.
          </p>
        </aside>
      </section>
    </main>
  )
}

export default OrderPage
