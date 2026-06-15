import './OrderForm.css'

function OrderForm() {
  return (
    <form className="booking-card" aria-label="Book a pet painting">
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
        <span>Their story + painting vibe</span>
        <textarea
          name="story"
          rows="5"
          placeholder="Tell us who they are, what makes them funny, and if you want lovely, goofy, dramatic, or something else."
        />
      </label>
      <div className="payment-note">
        <strong>Digital-only goofy pet drawing. No refunds or revisions.</strong>
        <p>Payment supports the artist and happens here once checkout is connected.</p>
      </div>
      <button className="button-sketch" type="button">
        Pay & send request
      </button>
    </form>
  )
}

export default OrderForm
