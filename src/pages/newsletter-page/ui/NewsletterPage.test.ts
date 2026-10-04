import { beforeEach, describe, expect, it } from 'vitest'
import { mountNewsletterPage } from './NewsletterPage'

describe('NewsletterPage flow', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>'
  })

  it('shows validation error for invalid email and keeps the form', () => {
    const root = document.querySelector<HTMLElement>('#app')!
    mountNewsletterPage(root)

    const input = document.querySelector<HTMLInputElement>('#email')!
    const form = document.querySelector<HTMLFormElement>('.signup__form')!
    input.value = 'ash#loremcompany.com'
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))

    const error = document.querySelector<HTMLElement>('#email-error')!
    expect(error.hidden).toBe(false)
    expect(document.querySelector('.signup')).not.toBeNull()
    expect(document.querySelector('.success')).toBeNull()
  })

  it('opens success view after a valid submit and returns on dismiss', () => {
    const root = document.querySelector<HTMLElement>('#app')!
    mountNewsletterPage(root)

    const input = document.querySelector<HTMLInputElement>('#email')!
    const form = document.querySelector<HTMLFormElement>('.signup__form')!
    input.value = 'ash@loremcompany.com'
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))

    expect(document.querySelector('.success')).not.toBeNull()
    expect(document.querySelector('.success__email')?.textContent).toBe('ash@loremcompany.com')

    document.querySelector<HTMLButtonElement>('.success__dismiss')!.click()
    expect(document.querySelector('.signup')).not.toBeNull()
    expect(document.querySelector('.success')).toBeNull()
  })

  it('renders attribution footer', () => {
    const root = document.querySelector<HTMLElement>('#app')!
    mountNewsletterPage(root)
    expect(document.querySelector('.attribution')).not.toBeNull()
  })
})
