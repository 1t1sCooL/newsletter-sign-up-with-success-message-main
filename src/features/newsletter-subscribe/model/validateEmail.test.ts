import { describe, expect, it } from 'vitest'
import { validateEmail } from './validateEmail'

describe('validateEmail', () => {
  it('rejects empty value', () => {
    expect(validateEmail('')).toBe('Valid email required')
    expect(validateEmail('   ')).toBe('Valid email required')
  })

  it('rejects malformed email', () => {
    expect(validateEmail('ash#loremcompany.com')).toBe('Valid email required')
    expect(validateEmail('ash@')).toBe('Valid email required')
    expect(validateEmail('ash@company')).toBe('Valid email required')
  })

  it('accepts a well-formed email and trims whitespace', () => {
    expect(validateEmail('ash@loremcompany.com')).toBeNull()
    expect(validateEmail('  ash@loremcompany.com  ')).toBeNull()
  })
})
