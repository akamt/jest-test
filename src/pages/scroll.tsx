import React from 'react'
import { Link } from 'react-scroll'

const ScrollContainer = (): JSX.Element => {
  return (
    <div className="h-screen w-screen">
      <nav className="flex h-16 justify-center">
        <Link to="section1" smooth spy>
          Section1
        </Link>
      </nav>

      <section className="h-1/2 flex justify-center items-center">
        50% height section
      </section>

      <section
        id="section1"
        className="h-full flex justify-center items-center"
      >
        section1!!
      </section>
    </div>
  )
}

export default ScrollContainer
