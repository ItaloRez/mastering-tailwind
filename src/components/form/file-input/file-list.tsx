'use client'

import { useFileInput } from './root'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FileItem } from './file-item'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate({})

  return (
    <div className="mt-4 space-y-3" ref={parent}>
      {files.map((file) => {
        return (
          <FileItem
            key={file.name}
            name={file.name}
            size={file.size}
            state="progress"
          />
        )
      })}
    </div>
  )
}
