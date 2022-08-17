const BNBIcon = (props) => {
  const defaults = {
    pathInfo: '',
    h: '24',
    w: '24',
    viewBox: '0 0 24 24',
    display: 'block',
    classes: '',
  };

  const options = { ...defaults, ...props };
  const baseClasses = 'bnb-icon border-none fill-current text-inherit p-0 m-0 ';

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={options.viewBox}
      height={options.h}
      width={options.w}
      role="img"
      aria-hidden="true"
      class={baseClasses + options.classes}
      style={`display: ${options.display}`}
    >
      <path d={options.pathInfo} />
    </svg>
  );
};

export default BNBIcon;
