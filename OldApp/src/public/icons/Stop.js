import * as React from "react";
const SvgStop = (props) => (
  <svg
    width={114}
    height={270}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#fff" d="M0 0h114v270H0z" />
    <g filter="url(#Stop_svg__a)">
      <rect x={27} y={108} width={60} height={54} rx={2.5} fill="#D9D9D9" />
    </g>
    <rect x={27} y={108} width={60} height={50} rx={2.5} fill="#ECECEC" />
    <g filter="url(#Stop_svg__b)">
      <path fill="#D9D9D9" d="M47 122h21v21H47z" />
    </g>
    <defs>
      <filter
        id="Stop_svg__a"
        x={23}
        y={108}
        width={68}
        height={62}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_9_138" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_9_138"
          result="shape"
        />
      </filter>
      <filter
        id="Stop_svg__b"
        x={47}
        y={122}
        width={21}
        height={25}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="shape" result="effect1_innerShadow_9_138" />
      </filter>
    </defs>
  </svg>
);
export default SvgStop;
