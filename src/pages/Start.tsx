import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Start.css';
import React from 'react';
import Slider from '../components/Slider'; 
import SliderDots from '../components/SliderDots';
import desertBackground from '../assets/desert.png';
import natureBackground from '../assets/nature.png';
import cityBackground from '../assets/city.png';
import { useHistory } from 'react-router-dom';

const Start: React.FC = () => {
  const slides = [
    { title: "Meet your friends", backgroundImage: desertBackground, buttonText: "Next" },
    { title: "Explore the World", backgroundImage: natureBackground, buttonText: "Next" },
    { title: "Welcome to Ketch'up", backgroundImage: cityBackground, buttonText: "Start" },
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const history = useHistory();

  const handleStartClick = () => {
    // Rediriger l'utilisateur vers la page de connexion
    history.push('/login');
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="start">
      <Slider slides={slides} onStartClick={handleStartClick} />
    </div>
  );
};

export default Start;
