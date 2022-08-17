import { createSignal } from 'solid-js';

const PCircle = (props) => {
  const bgColor = 'bg-blue-500'; // TODO - set a random color here, once, and add to base classes.

  // POSITION
  const xTranslates = [
    '-translate-x-16',
    '-translate-x-8',
    '-translate-x-4',
    '-translate-x-2',
    '-translate-x-1',
    'translate-x-0',
    'translate-x-1',
    'translate-x-2',
    'translate-x-4',
    'translate-x-8',
    'translate-x-16',
  ];
  const yTranslates = [
    '-translate-y-16',
    '-translate-y-8',
    '-translate-y-4',
    '-translate-y-2',
    '-translate-y-1',
    'translate-y-0',
    'translate-y-1',
    'translate-y-2',
    'translate-y-4',
    'translate-y-8',
    'translate-y-16',
  ];
  const [xPosition, setXPosition] = createSignal([xTranslates[5], yTranslates[5]]);
  const [yPosition, setYPosition] = createSignal([xTranslates[5], yTranslates[5]]);

  // SCALE
  const scales = [
    'scale-50',
    'scale-75',
    'scale-90',
    'scale-95',
    'scale-100',
    'scale-105',
    'scale-110',
    'scale-125',
    'scale-150',
  ];
  const [scale, setScale] = createSignal(scales[4]);

  const millisecondDuration = parseInt(Math.random() * 14500 + 500); // random number between 500 and 15000
  setInterval(() => {
    const xPositionIndx = parseInt(Math.random() * xTranslates.length);
    const yPositionIndx = parseInt(Math.random() * yTranslates.length);
    setXPosition(xTranslates[xPositionIndx]); // Change x position
    setYPosition(yTranslates[yPositionIndx]); // Change y position

    const scaleIndx = parseInt(Math.random() * scales.length);
    setScale(scales[scaleIndx]); // Change scale
  }, millisecondDuration);

  const baseClasses = `p-circle ${bgColor} opacity-50 h-[5vw] w-[5vw] ${scale} ${xPosition} ${yPosition} rounded-full origin-center transition-transform`;

  return <div class={baseClasses}></div>;
};

export default PCircle;
