import React, { useState } from 'react';
import SliderDots from './SliderDots'; // Assurez-vous d'importer correctement SliderDots

interface SliderProps {
  slides: { title: string; backgroundImage: string; buttonText?: string }[];
  onStartClick: () => void;
}

const Slider: React.FC<SliderProps> = ({ slides, onStartClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            <div className="slide-content">
              <h1>{slide.title}</h1>
              {slide.buttonText && (
                <button className="slider-button" onClick={slide.buttonText === 'Start' ? onStartClick : goToNextSlide}>
                  {slide.buttonText}
                </button>
              )}
            </div>            
            <div className="slider-dots" style={{ display:'flex', justifyContent: 'center', bottom: '20%', top: '85%', position: 'absolute', left : '41%' ,backgroundColor:'-moz-initial'}}>
              {slides.map((_, index) => (
                <span
                  key={index}
                  className="slider-dot"
                  style={{
                    width: index === currentSlide ? '30px' : index === (currentSlide + 1) % slides.length || (currentSlide === slides.length - 1 && index === 0) ? '20px' : '20px',
                    height: index === currentSlide ? '30px' : index === (currentSlide + 1) % slides.length || (currentSlide === slides.length - 1 && index === 0) ? '20px' : '20px',
                    borderRadius: '50%',
                    backgroundColor: index === currentSlide ? '#007bff' : '#ccc',
                    margin: '0 5px',
                    cursor: 'pointer',
                  }}
                ></span>
              ))}
            </div>    
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
