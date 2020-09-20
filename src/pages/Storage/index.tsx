import React, { useEffect, useState } from 'react'
import { Plugins } from '@capacitor/core'
const { Storage } = Plugins

async function setObject() {
  const base = (await getObject()) || '[]'

  await Storage.set({
    key: 'interaction-dates',
    value: JSON.stringify([...JSON.parse(base), Date.now()]),
  })
}

async function getObject() {
  const result = await Storage.get({ key: 'interaction-dates' })
  return result.value
}

const Copy = () => {
  const [current, setCurrent] = useState('')

  useEffect(() => {
    async function getCurrentStorage() {
      const result = await getObject()
      setCurrent(result)
    }

    getCurrentStorage()
  }, [])

  async function addDate() {
    await setObject()
    setCurrent(await getObject())
  }

  async function clearStorage() {
    await Storage.clear()
    setCurrent(await getObject())
  }

  return (
    <div>
      <p>
        Storage persists even between sessions, using non-webview storage on
        devices but correctly using localStorage on PWA/web.
      </p>
      <p>{current ? `Storage content: ${current}` : 'Storage is empty'}</p>
      <button onClick={addDate}>Add date to storage</button>
      <button onClick={clearStorage}>Clear storage</button>
    </div>
  )
}

export default Copy
