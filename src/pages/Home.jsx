import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Welcome_msg from '../components/Welcome_msg';
const Home = () => {
const [create_quiz, setcreate_quiz ] = useState(false);

  return <>
  <Navbar/>
  </>
}
export default Home