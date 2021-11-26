interface User {
  /** unique id of the user */
  id?: string
  /** unique username of the user */
  username: string
  /** password of the user */
  password?: string
  /** email of the user */
  email?: string
  /** optional photo of the user */
  photo?: string
}

export default User
