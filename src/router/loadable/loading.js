import { Spin } from 'antd'
import styles from './index.scss'

export function Loading({ error, pastDelay }) {
  return (
    <div className={styles.loadingWapper}>
      <Spin className={styles.loadingSpinWapper}></Spin>
    </div>
  )
}
