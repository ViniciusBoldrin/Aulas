'use client'

import { GroupIcons } from '@/assets/group-icons'
import { motion } from 'framer-motion'
import { ScrollParallax } from 'react-just-parallax'

import { type Participant } from '@/types/participant'
import { CopyUrl } from './copy-url'

export function CardMotion(props: Participant) {
  return (
    <ScrollParallax {...props}>
      <motion.div
        className="flex w-full items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <div className="relative flex flex-col items-center justify-center">
          <GroupIcons.cardFront className="w-full rounded-lg shadow-xl" />
          <div className="top-2/5 absolute left-4 text-pretty text-otg-white">
            <h1 className="max-w-[160px] font-extrabold uppercase">
              {props.name}
            </h1>
            <h2 className="max-w-[160px] text-sm font-semibold uppercase">
              {props.company}
            </h2>
            <h3 className="max-w-[160px] text-sm">{props.department}</h3>
          </div>
          <div className="w-full">
            <CopyUrl />
          </div>
        </div>
      </motion.div>
    </ScrollParallax>
  )
}
