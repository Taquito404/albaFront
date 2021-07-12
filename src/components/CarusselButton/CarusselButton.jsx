import React from 'react'
import { useRouter } from "next/router"
import Styles from '../CarusselButton/styles/carussel.module.scss'

export default function CarussellButton() {
  const router = useRouter()
  return (
    <div className={Styles.carusselContainer}>
      <button onClick={() => router.back()}className={Styles.btn}>&lt;ANTERIOR</button>
      <button onClick={() => router.back()}className={Styles.btn}>SIGUIENTE&gt;</button>
    </div>
  )
}
