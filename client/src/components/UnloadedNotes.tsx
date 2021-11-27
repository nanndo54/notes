import NoteLoader from 'components/NoteLoader'
import useIntersectionObserver from 'hooks/useIntersectionObserver'
import { useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import { getNotes } from 'services/noteServices'
import { useAppDispatch, useAppSelector } from 'store'
import styles from 'styles/UnloadedNotes.module.css'

const UnloadedNotes = () => {
  const ref = useRef<HTMLElement>(null)
  const intersected = useIntersectionObserver(
    ref,
    {
      threshold: 0.3
    },
    true,
    false
  )

  const { sortBy, direction, offset, loading, available } = useAppSelector(
    (state) => state.notes
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!intersected || loading) return
    console.log('loading more')

    handleGetNotes()
  }, [intersected])
  const handleGetNotes = () => {
    if (!available) return
    dispatch(getNotes({ sortBy, direction, offset })).then(() =>
      toast.success('Notes loaded')
    )
  }

  return available ? (
    <div ref={ref} className={styles.base}>
      <NoteLoader />
    </div>
  ) : (
    <p>no more notes</p>
  )
}

export default UnloadedNotes
