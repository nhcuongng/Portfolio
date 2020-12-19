import React from 'react';
import img from '../../../public/img/perfil.png'

export const Home:React.FC = () => (
  <section className="home bd-grid" id="home">
  <div className="home__data">
      <h1 className="home__title">Hi,<br />I'am <span className="home__title-color">Marlon</span><br /> Web Designer</h1>

      <a href="#" className="button">Contact</a>
  </div>

  <div className="home__social">
      <a href="" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
      <a href="" className="home__social-icon"><i className='bx bxl-behance' ></i></a>
      <a href="" className="home__social-icon"><i className='bx bxl-github' ></i></a>
  </div>

  <div className="home__img"> 
      <img src={img} alt="" />
  </div>
</section>
)