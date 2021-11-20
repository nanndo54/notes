interface Note {
  /** unique id of the note */
  id?: number
  /** title of the note */
  title: string
  /** content of the note */
  content?: string
  /** date of the note */
  date?: Date
}

export default Note