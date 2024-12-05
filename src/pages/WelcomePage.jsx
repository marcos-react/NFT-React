import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from './../components/Header';
import Carousel from './../components/Carousel';
import Card from './../components/Card';

export default function WelcomePage() {
  return (
    <div>
    <Header />
    <Carousel />
    <Card />
  </div>
  )
}
