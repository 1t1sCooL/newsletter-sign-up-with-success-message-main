import { createFromHtml } from '@/shared/lib/dom'
import './Attribution.css'

export const createAttribution = (): HTMLElement =>
  createFromHtml(`
    <footer class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
      Coded by
      <a href="https://www.frontendmentor.io/profile/1t1sCooL" target="_blank" rel="noreferrer">1t1sCooL</a>.
    </footer>
  `)
