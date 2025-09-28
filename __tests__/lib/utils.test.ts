import { cn } from '@/lib/utils'

describe('cn utility function', () => {
  it('merges class names correctly', () => {
    const result = cn('class1', 'class2')
    expect(result).toBe('class1 class2')
  })

  it('handles conditional classes', () => {
    const result = cn('base-class', {
      'conditional-class': true,
      'false-class': false,
    })
    expect(result).toBe('base-class conditional-class')
  })

  it('handles undefined and null values', () => {
    const result = cn('class1', undefined, null, 'class2')
    expect(result).toBe('class1 class2')
  })

  it('handles empty strings', () => {
    const result = cn('class1', '', 'class2')
    expect(result).toBe('class1 class2')
  })

  it('handles arrays of classes', () => {
    const result = cn(['class1', 'class2'], 'class3')
    expect(result).toBe('class1 class2 class3')
  })

  it('handles complex combinations', () => {
    const result = cn(
      'base',
      {
        'conditional-true': true,
        'conditional-false': false,
      },
      ['array1', 'array2'],
      'string',
      undefined,
      null
    )
    expect(result).toBe('base conditional-true array1 array2 string')
  })
})