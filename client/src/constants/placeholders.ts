const placeholders = [
  'Blog post',
  'My next trip',
  'Pending task',
  'Idea for a new feature',
  'My gym routine',
  'Pending books',
  'Pending video games',
  'Pending movies',
  'Pending music',
  'Pending podcasts',
  'New project',
  'sell old stuff',
  'buy new stuff'
]

const getPlaceholder = () => {
  const randomIndex = Math.floor(Math.random() * placeholders.length)
  return placeholders[randomIndex]
}

export { getPlaceholder, placeholders }
