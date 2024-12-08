const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const isValidEmail = (email: string) => {
  return emailRegex.test(email)
}
