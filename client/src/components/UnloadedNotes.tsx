import NoteLoader from 'components/NoteLoader'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { FC, useEffect, useRef } from 'react'
import { getNotes } from 'services/noteServices'
import { useAppDispatch, useAppSelector } from 'store'
import styles from 'styles/UnloadedNotes.module.css'

const UnloadedNotes: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const intersected = useIntersectionObserver(
    ref,
    {
      threshold: 0.1
    },
    false
  )

  const { notes, sortBy, direction, offset, loading, available } = useAppSelector(
    (state) => state.notes
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!intersected || loading) return
    handleGetNotes()
  }, [intersected])

  const handleGetNotes = () => {
    if (!available) return
    dispatch(getNotes({ sortBy, direction, offset }))
  }

  return available ? (
    <div ref={ref} className={styles.base}>
      <NoteLoader />
    </div>
  ) : notes.length == 0 ? (
    <h4 className={styles.emptyPhrase}>So empty here... Add a new note!</h4>
  ) : (
    <></>
  )
}

export default UnloadedNotes
