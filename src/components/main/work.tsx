import React from 'react';
import w1Img from '../../../public/img/work1.jpg'
import w2Img from '../../../public/img/work2.jpg'
import w3Img from '../../../public/img/work3.jpg'
import w4Img from '../../../public/img/work4.jpg'
import w5Img from '../../../public/img/work5.jpg'
import w6Img from '../../../public/img/work6.jpg'

export const Work: React.FC = () => (
  <section className="work section" id="work">
      <h2 className="section-title">Work</h2>

      <div className="work__container bd-grid">
          <div className="work__img">
              <img src={w1Img} alt="" />
          </div>
          <div className="work__img">
              <img src={w2Img} alt="" />
          </div>
          <div className="work__img">
              <img src={w3Img} alt="" />
          </div>
          <div className="work__img">
              <img src={w4Img} alt="" />
          </div>
          <div className="work__img">
              <img src={w5Img} alt="" />
          </div>
          <div className="work__img">
              <img src={w6Img} alt="" />
          </div>
      </div>
  </section>
)