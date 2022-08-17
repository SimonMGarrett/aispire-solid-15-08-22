import { createSignal } from 'solid-js';
import Color from 'color';

const PCircle = (props) => {
  // const bgColor = 'bg-blue-500' // TODO - set a random color here, once, and add to base classes.
  const randR = parseInt(Math.random() * 110);
  const randG = parseInt(Math.random() * 110);
  const blue = 170;
  const bgColor = Color(`rgb(${randR}, ${randG}, ${blue})`)
    .hex()
    .toString();

  function weighting(x) {
    return 0.5 * Math.log(1 / x);
  }

  // function weighting2(x) {
  //   return 1 - Math.pow(x, 0.5);
  // }

  // ORIGIN
  const chooseLeft = Math.random() < 0.5;
  const chooseTop = Math.random() < 0.5;
  const randX = parseInt(50 * weighting(Math.random()), 0.5);
  const randY = parseInt(50 * weighting(Math.random()), 0.5);
  const l = chooseLeft ? randX + '%' : 'auto';
  const r = chooseLeft ? 'auto' : randX + '%';
  const t = chooseTop ? randY + '%' : 'auto';
  const b = chooseTop ? 'auto' : randY + '%';
  const [left, setLeft] = createSignal(`${l}`);
  const [right, setRight] = createSignal(`${r}`);
  const [top, setTop] = createSignal(`${t}`);
  const [bottom, setBottom] = createSignal(`${b}`);

  // POSITION
  const xTranslates = [
    // '-translate-x-64 ',
    '-translate-x-32 ',
    '-translate-x-16 ',
    '-translate-x-8 ',
    '-translate-x-4 ',
    '-translate-x-2 ',
    '-translate-x-1 ',
    'translate-x-0 ',
    'translate-x-1 ',
    'translate-x-2 ',
    'translate-x-4 ',
    'translate-x-8 ',
    'translate-x-16 ',
    'translate-x-32 ',
    // 'translate-x-64 ',
  ];
  const yTranslates = [
    // '-translate-y-64 ',
    '-translate-y-32 ',
    '-translate-y-16 ',
    '-translate-y-8 ',
    '-translate-y-4 ',
    '-translate-y-2 ',
    '-translate-y-1 ',
    'translate-y-0 ',
    'translate-y-1 ',
    'translate-y-2 ',
    'translate-y-4 ',
    'translate-y-8 ',
    'translate-y-16 ',
    'translate-y-32 ',
    // 'translate-y-64 ',
  ];
  const [xPosition, setXPosition] = createSignal([xTranslates[5]]);
  const [yPosition, setYPosition] = createSignal([yTranslates[5]]);

  // SCALE
  const scales = [
    'scale-[0.05]',
    'scale-50 ',
    'scale-75 ',
    'scale-90 ',
    'scale-95 ',
    'scale-100 ',
    'scale-105 ',
    'scale-110 ',
    'scale-125 ',
    'scale-150 ',
  ];
  const [scale, setScale] = createSignal(scales[4]);

  function setValues() {
    const xPositionIndx = parseInt(Math.random() * xTranslates.length);
    const yPositionIndx = parseInt(Math.random() * yTranslates.length);
    setXPosition(xTranslates[xPositionIndx]); // Change x position
    setYPosition(yTranslates[yPositionIndx]); // Change y position

    const scaleIndx = parseInt(Math.random() * scales.length).toString();
    setScale(scales[scaleIndx]); // Change scale
  }

  const transitionDuration = parseInt(Math.random() * 3000 + 500);
  setInterval(() => {
    setValues();
  }, transitionDuration);
  setValues();

  const baseClasses = `border-2 border-gray-700 m-16 p-1 absolute p-circle opacity-50 h-[5vw] w-[5vw] rounded-2xl origin-center transition-transform ease-out `;

  return (
    <div
      class={baseClasses + scale() + xPosition() + yPosition()}
      style={{
        'transition-duration': `${transitionDuration}ms`,
        'background-color': bgColor,
        left: left(),
        right: right(),
        top: top(),
        bottom: bottom(),
      }}
    ></div>
  );
};

export default PCircle;
