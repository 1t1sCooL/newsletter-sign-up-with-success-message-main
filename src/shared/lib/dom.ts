export const qs = <T extends Element>(root: ParentNode, selector: string): T => {
  const el = root.querySelector<T>(selector)
  if (!el) {
    throw new Error(`Element not found: ${selector}`)
  }
  return el
}

export const createFromHtml = (html: string): HTMLElement => {
  const template = document.createElement('template')
  template.innerHTML = html.trim()
  const node = template.content.firstElementChild
  if (!(node instanceof HTMLElement)) {
    throw new Error('Failed to create element from HTML')
  }
  return node
}
