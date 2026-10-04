const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const validateEmail = (value: string): string | null => {
  const trimmed = value.trim()

  if (!trimmed || !EMAIL_PATTERN.test(trimmed)) {
    return 'Valid email required'
  }

  return null
}
