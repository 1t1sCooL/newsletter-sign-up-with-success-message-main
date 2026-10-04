import { assets } from '@/shared/config/assets'
import { createFromHtml, qs } from '@/shared/lib/dom'
import './SuccessCard.css'

type SuccessCardProps = {
  email: string
  onDismiss: () => void
}

export const createSuccessCard = ({ email, onDismiss }: SuccessCardProps): HTMLElement => {
  const root = createFromHtml(`
    <section class="success" aria-labelledby="success-title" role="status">
      <img class="success__icon" src="${assets.iconSuccess}" alt="" width="64" height="64" />
      <h1 id="success-title" class="success__title">Thanks for subscribing!</h1>
      <p class="success__text">
        A confirmation email has been sent to
        <strong class="success__email"></strong>.
        Please open it and click the button inside to confirm your subscription.
      </p>
      <button class="success__dismiss" type="button">Dismiss message</button>
    </section>
  `)

  qs<HTMLElement>(root, '.success__email').textContent = email
  qs<HTMLButtonElement>(root, '.success__dismiss').addEventListener('click', onDismiss)

  return root
}
