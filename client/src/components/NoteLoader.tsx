import { FC } from 'react'
import ContentLoader, { IContentLoaderProps } from 'react-content-loader'
import styles from 'styles/NoteLoader.module.css'

const NoteLoader: FC<IContentLoaderProps> = (props) => (
  <ContentLoader
    className={styles.base}
    speed={2}
    width='100%'
    height={500}
    viewBox='0 0 500 500'
    backgroundColor='#ddd'
    foregroundColor='#eee'
    {...props}
  >
    <rect x='5' y='0' rx='30' ry='30' width='237' height='230' />
    <rect x='263' y='0' rx='30' ry='30' width='237' height='127' />
    <rect x='263' y='290' rx='30' ry='30' width='237' height='212' />
    <rect x='5' y='290' rx='30' ry='30' width='237' height='163' />
  </ContentLoader>
)

export default NoteLoader
