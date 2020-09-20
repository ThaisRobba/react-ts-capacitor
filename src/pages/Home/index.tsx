import React from 'react'
import { Link } from 'react-router-dom'
import { paths } from '../../routes'

const Home = () => {
  return (
    <ul>
      <li>
        <Link to={paths.share}>View share example</Link>
      </li>
      <li>
        <Link to={paths.clipboard}>View clipboard example</Link>
      </li>
      <li>
        <Link to={paths.storage}>View storage example</Link>
      </li>
    </ul>
  )
}

export default Home
