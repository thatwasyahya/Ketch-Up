import React from 'react';

interface SliderDotsProps {
  totalSlides: number;
  currentSlideIndex: number;
  onDotClick: (index: number) => void;
}

const SliderDots: React.FC<SliderDotsProps> = ({ totalSlides, currentSlideIndex, onDotClick }) => {
  const dots = Array.from({ length: totalSlides }, (_, index) => {
    const isActive = index === currentSlideIndex;
    const isPrevious = index === currentSlideIndex - 1 || (index === totalSlides - 1 && currentSlideIndex === 0);
    const isNext = index === currentSlideIndex + 1 || (index === 0 && currentSlideIndex === totalSlides - 1);
    let dotClasses = 'slider-dot';
    if (isActive) dotClasses += ' active';
    if (isPrevious) dotClasses += ' previous';
    if (isNext) dotClasses += ' next';
    return (
      <span
        key={index}
        className={dotClasses.trim()}
        onClick={() => onDotClick(index)}
      ></span>
    );
  });

  return <div className="slider-dots">{dots}</div>;
};

export default SliderDots;
