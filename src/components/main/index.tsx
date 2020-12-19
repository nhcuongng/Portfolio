import React from 'react';
import { About } from './about';
import { Contact } from './contact';
import { Home } from './home';
import { Skil } from './skill';
import { Work } from './work';

export const Main: React.FC = () => (
  <main className="l-main">
    <Home />
    <About />
    <Skil />
    <Work />
    <Contact />
  </main>
)