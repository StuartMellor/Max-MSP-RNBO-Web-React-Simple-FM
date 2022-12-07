import * as React from "react";
const SvgTrigger = (props) => (
  <svg
    width={114}
    height={270}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#fff" d="M0 0h114v270H0z" />
    <g filter="url(#Trigger_svg__a)">
      <path fill="#D9D9D9" d="M27 108h60v55H27z" />
    </g>
    <path fill="#ECECEC" d="M27 108h60v50H27z" />
    <defs>
      <filter
        id="Trigger_svg__a"
        x={23}
        y={108}
        width={68}
        height={63}
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4_72" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_4_72"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgTrigger;
