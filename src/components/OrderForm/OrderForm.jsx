import './OrderForm.css'

function OrderForm() {
  return (
    <form className="booking-card" aria-label="Order a pet drawing">
      <div className="booking-card-header">
        <p className="eyebrow">Order form</p>
        <h2>$6.99 launch drawing</h2>
        <p>Send the photo, name, and vibe. I will handle the drawing.</p>
      </div>
      <label>
        <span>Your TikTok or email</span>
        <input type="text" name="contact" placeholder="@yourhandle or email" />
      </label>
      <label>
        <span>Pet name</span>
        <input type="text" name="petName" placeholder="Brutus, Mila, Bean..." />
      </label>
      <label>
        <span>Upload a photo</span>
        <input type="file" name="petPhoto" accept="image/*" />
      </label>
      <label>
        <span>Their story + drawing vibe</span>
        <textarea
          name="story"
          rows="5"
          placeholder="Tell me who they are, what makes them funny, and if you want sweet, goofy, dramatic, or something else."
        />
      </label>
      <div className="payment-note">
        <strong>Digital-only goofy pet drawing. No refunds or revisions.</strong>
        <p>Payment will happen here once checkout is connected.</p>
      </div>
      <button className="button-sketch" type="button">
        Order for $6.99
      </button>
    </form>
  )
}

export default OrderForm
