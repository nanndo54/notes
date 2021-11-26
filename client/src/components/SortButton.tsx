import Button from 'components/Button'
import { changeSortBy, triggerDirection } from 'slices/notesSlice'
import { useAppDispatch, useAppSelector } from 'store'
import styles from 'styles/SortButton.module.css'

const attributes = ['date', 'title', 'content']

const SortButtons = () => {
  const { sortby, direction } = useAppSelector((state) => state.notes)
  const dispatch = useAppDispatch()

  const handleChangeSortby = () => {
    const index = attributes.indexOf(sortby)
    dispatch(
      changeSortBy(
        index === attributes.length - 1 ? attributes[0] : attributes[index + 1]
      )
    )
  }

  const handleTriggerDirection = () => dispatch(triggerDirection())

  return (
    <div className={styles.base}>
      <Button variant='transparent' onClick={handleChangeSortby}>
        Sort by {sortby}
      </Button>
      <Button variant='transparent' onClick={handleTriggerDirection}>
        {direction === 1 ? 'Ascending' : 'Descending'}
      </Button>
    </div>
  )
}

export default SortButtons
