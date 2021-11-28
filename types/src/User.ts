interface User {
  /** unique id of the user */
  id?: string
  /** unique username of the user */
  username: string
  /** hash of the user's password */
  password?: string
  /** email of the user */
  email?: string
  /** optional photo of the user */
  photo?: string
  notes?: string[]
}

export default User
