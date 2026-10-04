import { assets } from '@/shared/config/assets'
import { createFromHtml, qs } from '@/shared/lib/dom'
import { validateEmail } from '@/features/newsletter-subscribe'
import './SignUpCard.css'

type SignUpCardProps = {
  onSuccess: (email: string) => void
}

export const createSignUpCard = ({ onSuccess }: SignUpCardProps): HTMLElement => {
  const root = createFromHtml(`
    <section class="signup" aria-labelledby="signup-title">
      <div class="signup__content">
        <h1 id="signup-title" class="signup__title">Stay updated!</h1>
        <p class="signup__lead">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul class="signup__list">
          <li>
            <img src="${assets.iconList}" alt="" width="21" height="21" />
            <span>Product discovery and building what matters</span>
          </li>
          <li>
            <img src="${assets.iconList}" alt="" width="21" height="21" />
            <span>Measuring to ensure updates are a success</span>
          </li>
          <li>
            <img src="${assets.iconList}" alt="" width="21" height="21" />
            <span>And much more!</span>
          </li>
        </ul>
        <form class="signup__form" novalidate>
          <div class="signup__label-row">
            <label class="signup__label" for="email">Email address</label>
            <p class="signup__error" id="email-error" hidden>Valid email required</p>
          </div>
          <input
            class="signup__input"
            id="email"
            name="email"
            type="email"
            autocomplete="email"
            placeholder="email@company.com"
            aria-describedby="email-error"
            aria-invalid="false"
          />
          <button class="signup__submit" type="submit">Subscribe to monthly newsletter</button>
        </form>
      </div>
      <picture class="signup__media">
        <source media="(min-width: 56.3125em)" srcset="${assets.illustrationDesktop}" />
        <source media="(min-width: 37.5em)" srcset="${assets.illustrationTablet}" />
        <img
          class="signup__illustration"
          src="${assets.illustrationMobile}"
          alt=""
          width="400"
          height="593"
        />
      </picture>
    </section>
  `)

  const form = qs<HTMLFormElement>(root, '.signup__form')
  const input = qs<HTMLInputElement>(root, '.signup__input')
  const error = qs<HTMLElement>(root, '.signup__error')

  const clearError = () => {
    error.hidden = true
    input.classList.remove('signup__input--error')
    input.setAttribute('aria-invalid', 'false')
  }

  const showError = () => {
    error.hidden = false
    input.classList.add('signup__input--error')
    input.setAttribute('aria-invalid', 'true')
    input.focus()
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const message = validateEmail(input.value)
    if (message) {
      showError()
      return
    }
    clearError()
    onSuccess(input.value.trim())
  })

  input.addEventListener('input', () => {
    if (!error.hidden) {
      clearError()
    }
  })

  return root
}
