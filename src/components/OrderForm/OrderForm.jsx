import { useState } from 'react'
import { stripePaymentLink } from '../../config/payment'
import './OrderForm.css'

function OrderForm() {
  const [formStatus, setFormStatus] = useState('idle')
  const [formError, setFormError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    formData.set('form-name', 'pet-order')

    setFormStatus('submitting')
    setFormError('')

    try {
      const response = await fetch('/', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      setFormStatus('redirecting')
      window.location.assign(stripePaymentLink)
    } catch {
      setFormStatus('idle')
      setFormError('The order did not save. Please try again before paying.')
    }
  }

  const isSubmitting = formStatus === 'submitting' || formStatus === 'redirecting'

  return (
    <form
      className="booking-card"
      name="pet-order"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      encType="multipart/form-data"
      aria-label="Order a pet drawing"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="pet-order" />
      <label className="bot-field" aria-hidden="true">
        <span>Do not fill this out</span>
        <input name="bot-field" tabIndex="-1" autoComplete="off" />
      </label>
      <div className="booking-card-header">
        <p className="eyebrow">Order form</p>
        <h2>$6.99 launch drawing</h2>
        <p>Send the photo, name, and vibe. Then pay in Stripe.</p>
      </div>
      <label>
        <span>Email for payment match</span>
        <input type="email" name="email" placeholder="you@example.com" required />
      </label>
      <label>
        <span>TikTok handle (optional)</span>
        <input type="text" name="tiktok" placeholder="@yourhandle" />
      </label>
      <label>
        <span>Pet name</span>
        <input type="text" name="petName" placeholder="Brutus, Mila, Bean..." required />
      </label>
      <label>
        <span>Upload a photo</span>
        <input type="file" name="petPhoto" accept="image/*" required />
      </label>
      <label>
        <span>Their story + drawing vibe</span>
        <textarea
          name="story"
          rows="5"
          placeholder="Tell me who they are, what makes them funny, and if you want sweet, goofy, dramatic, or something else."
          required
        />
      </label>
      <div className="payment-note">
        <strong>Digital-only goofy pet drawing. No refunds or revisions.</strong>
        <p>Use the same email at Stripe checkout so the payment matches this pet.</p>
      </div>
      {formError ? (
        <p className="form-error" role="alert">
          {formError}
        </p>
      ) : null}
      <button className="button-sketch" type="submit" disabled={isSubmitting}>
        {formStatus === 'submitting'
          ? 'Saving order...'
          : formStatus === 'redirecting'
            ? 'Opening checkout...'
            : 'Save order & pay $6.99'}
      </button>
    </form>
  )
}

export default OrderForm
