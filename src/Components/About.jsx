import React from 'react'
import aboutImag from '../assets/images/about.jpg'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-2 items-center">
    {/* Image */}
    <div className="flex justify-center md:justify-start">
      <img
        src={aboutImag}
        alt="About Ministry"
        className=" w-72 rounded-2xl md:w-96"
      />
    </div>

    {/* Text */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        About <span className="text-blue-600">Our Ministry</span>
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Body of Christ Go Ye Apologia Ministry is dedicated to spreading the 
        Gospel of Jesus Christ through teaching, discipleship, and evangelism. 
        Our mission is to equip believers with biblical truth and strengthen 
        faith by providing clear answers to life’s most important questions.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        We believe in sound doctrine, the power of prayer, and living as 
        ambassadors of Christ in our communities. Through events, outreach, 
        and teachings, we aim to build a Christ-centered generation that 
        stands firm in the Word of God.
      </p>

      <a
        href="#teachings"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
      >
        Discover Our Teachings
      </a>
    </div>
  </div>
</section>

  )
}

export default About