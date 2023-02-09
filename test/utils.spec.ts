import { hasLengthError } from '../src/utils/hasLength.error'

describe('hasLength util', () => {
  const array: any = [{ name: 'something' }]
  const emptyArray: any = []
  const message = 'util test'

  test('should throw error with any element in array', () => {
    expect(() => hasLengthError(array, message)).toThrow(message)
  })

  test('should not throw error with empty array ', () => {
    expect(() => hasLengthError(emptyArray, message)).not.toThrowError()
  })
})
