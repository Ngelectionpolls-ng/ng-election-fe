import React from 'react'
import LgaResults from '../_component/LgaResults'

type Props = {}

export default function page({}: Props) {
  return (
    <section className="grid gap-10 p-4">
      <LgaResults />
    </section>
  )
}