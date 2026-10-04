import { createAttribution } from '@/widgets/attribution'
import { createSignUpCard } from '@/widgets/sign-up-card'
import { createSuccessCard } from '@/widgets/success-card'
import './NewsletterPage.css'

type View = 'form' | 'success'

export const mountNewsletterPage = (root: HTMLElement): void => {
  let view: View = 'form'
  let email = ''

  const shell = document.createElement('main')
  shell.className = 'page'
  shell.id = 'main'

  const stage = document.createElement('div')
  stage.className = 'page__stage'

  const render = () => {
    stage.replaceChildren()
    shell.classList.toggle('page--success', view === 'success')

    if (view === 'form') {
      stage.append(
        createSignUpCard({
          onSuccess: (value) => {
            email = value
            view = 'success'
            render()
          },
        }),
      )
      return
    }

    stage.append(
      createSuccessCard({
        email,
        onDismiss: () => {
          email = ''
          view = 'form'
          render()
        },
      }),
    )
  }

  render()
  shell.append(stage, createAttribution())
  root.replaceChildren(shell)
}
