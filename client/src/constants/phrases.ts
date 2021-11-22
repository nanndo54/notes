const phrases = ['Good night!', 'Good morning!', 'Good evening!']

const getPhraseByHour = () => {
  const hour = new Date().getHours()
  if (hour < 6) return phrases[0]
  if (hour < 12) return phrases[1]
  if (hour < 18) return phrases[2]
  return phrases[0]
}

export { getPhraseByHour, phrases }
