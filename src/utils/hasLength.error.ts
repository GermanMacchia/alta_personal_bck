export const hasLengthError = (data: any, message: string) => {
  if (data?.length) {
    throw new Error(message)
  }
}
