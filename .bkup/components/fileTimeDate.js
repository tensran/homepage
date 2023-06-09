import { Text } from 'next'
import { useState, useEffect } from 'react'

function FileLastModified({ fileUrl }) {
  const [lastModified, setLastModified] = useState(null)

  useEffect(() => {
    const fetchLastModified = async () => {
      const res = await fetch(fileUrl, { method: 'HEAD' })
      if (res.status === 200) {
        const lastModified = res.headers.get('last-modified')
        setLastModified(new Date(lastModified))
      }
    }
    fetchLastModified()
  }, [fileUrl])
  if (!lastModified) {
    return null
  }

  return <Text>{lastModified.toLocaleString()}</Text>
}

export default FileLastModified
