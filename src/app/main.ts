import { mountNewsletterPage } from '@/pages/newsletter-page'
import './styles/global.css'

const app = document.querySelector<HTMLElement>('#app')

if (!app) {
  throw new Error('#app root is missing')
}

mountNewsletterPage(app)
