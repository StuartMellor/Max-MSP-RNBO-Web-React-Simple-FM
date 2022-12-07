import * as React from "react";
const SvgSwitch = (props) => (
  <svg
    width={114}
    height={270}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#fff" d="M0 0h114v270H0z" />
    <g filter="url(#Switch_svg__a)">
      <rect x={27} y={127} width={60} height={20} rx={2.5} fill="#B4B4B4" />
    </g>
    <g filter="url(#Switch_svg__b)">
      <rect x={27} y={127} width={30} height={20} rx={2.5} fill="#D9D9D9" />
    </g>
    <rect x={27} y={124} width={30} height={20} rx={2.5} fill="#ECECEC" />
    <defs>
      <filter
        id="Switch_svg__a"
        x={27}
        y={127}
        width={60}
        height={24}
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
        <feBlend in2="shape" result="effect1_innerShadow_4_89" />
      </filter>
      <filter
        id="Switch_svg__b"
        x={23}
        y={127}
        width={38}
        height={28}
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
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4_89" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_4_89"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgSwitch;
