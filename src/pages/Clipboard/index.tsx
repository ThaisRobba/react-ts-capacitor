import React, { useState } from 'react'
import { Plugins } from '@capacitor/core'
const { Clipboard } = Plugins

async function copy(string: string) {
  Clipboard.write({
    string,
  })
}

const Copy = () => {
  const [current, setCurrent] = useState('')

  async function CopyToClipboard() {
    copy(`Hello! Date was ${Date.now()}`)
    const result = await Clipboard.read()
    setCurrent(result.value)
  }

  return (
    <div>
      <p>{current ? `Clipboard content: ${current}` : 'Clipboard is empty'}</p>
      <button onClick={CopyToClipboard}>Copy string with date</button>
    </div>
  )
}

export default Copy
