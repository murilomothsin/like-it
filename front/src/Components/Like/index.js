import React, { useState, useEffect } from 'react'
import Api from '../../Api'

const Like = () => {
  const api = new Api()
  const [counter, setCounter] = useState({ likes: 0, dislikes: 0 })

  useEffect(() => {
    api.count().then(response => {
      setCounter(response)
    })
  }, [api]);
  
  const like = async (e) => {
    e.preventDefault()
    await api.like({like: true})
  }

  const dislike = async (e) => {
    e.preventDefault()
    await api.like({like: false})
  }

  return (
    <div className="counter">
      <div className="btnPanel">
        <button onClick={like} className="like">
          Like
        </button>
        <button onClick={dislike} className="dislike">
          Dislike
        </button>
      </div>

      <div className="counterPanel">
        <div>
          Likes: {counter.likes}
        </div>
        <div>
          Dislikes: {counter.dislikes}
        </div>
      </div>
    </div>
  )
}

export default Like