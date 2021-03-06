import websites from './websites.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import { sample } from 'lodash'

import 'swiper/css'
import 'swiper/css/pagination'
import './App.css'

function App() {

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">My Useless Apps</h1>
        <h1 className="sub-title">Surprise Me</h1>
        <a
          href={sample(websites).url}
          className="select"
          rel="noreferrer"
          target="_blank"
        >
          Click Here
        </a>
        <div className="card-list">
          {websites.map(({ url, name, desc, images, github } , index) => (
            <div className="card" key={index}>
              <div className="card-header">
                <span className="card-title">{name}</span>
                <span className="card-desc">{desc}</span>
              </div>
              <div className="card-info">
                <a href={github} rel="noreferrer" target="_blank">
                  <AiFillGithub size={35} />
                </a>
                <a href={url} rel="noreferrer" target="_blank">
                  <AiOutlineLink size={35} />
                </a>
              </div>
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                loop
                autoplay={{
                  delay: 3000,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {images &&
                  images.map((img) => (
                    <SwiperSlide key={img}>
                      <img alt={name} src={img} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
