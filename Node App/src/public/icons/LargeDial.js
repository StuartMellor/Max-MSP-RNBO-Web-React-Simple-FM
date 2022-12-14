import * as React from "react";
const SvgLargeDial = (props) => (
  <svg
    width={114}
    height={270}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#fff" d="M0 0h114v270H0z" />
    <circle cx={57} cy={123} r={40} fill="#D9D9D9" />
    <g filter="url(#Large_Dial_svg__a)">
      <circle
        cx={57.385}
        cy={123.385}
        r={32}
        transform="rotate(-155.514 57.385 123.385)"
        fill="#ECECEC"
      />
    </g>
    <g filter="url(#Large_Dial_svg__b)">
      <path
        fill="#B4B4B4"
        d="m47.088 149.672-2.73-1.243 3.73-8.191 2.73 1.243z"
      />
    </g>
    <path
      d="M41 175.5a2.5 2.5 0 0 1 2.5-2.5h27a2.5 2.5 0 0 1 2.5 2.5v12a2.5 2.5 0 0 1-2.5 2.5h-27a2.5 2.5 0 0 1-2.5-2.5v-12Z"
      fill="#B4B4B4"
    />
    <path
      d="M49.6 186.144c-1.12 0-1.948-.38-2.484-1.14-.528-.76-.792-1.824-.792-3.192s.264-2.432.792-3.192c.536-.76 1.364-1.14 2.484-1.14 1.12 0 1.944.38 2.472 1.14.536.76.804 1.824.804 3.192s-.268 2.432-.804 3.192c-.528.76-1.352 1.14-2.472 1.14Zm0-1.416c.536 0 .908-.188 1.116-.564.216-.376.324-.9.324-1.572v-1.56c0-.672-.108-1.196-.324-1.572-.208-.376-.58-.564-1.116-.564-.536 0-.912.188-1.128.564-.208.376-.312.9-.312 1.572v1.56c0 .672.104 1.196.312 1.572.216.376.592.564 1.128.564Zm0-2.208c-.28 0-.476-.056-.588-.168a.578.578 0 0 1-.156-.408v-.264c0-.16.052-.296.156-.408.112-.112.308-.168.588-.168.28 0 .472.056.576.168a.555.555 0 0 1 .168.408v.264c0 .16-.056.296-.168.408-.104.112-.296.168-.576.168Zm7.195 3.624c-1.12 0-1.948-.38-2.484-1.14-.528-.76-.792-1.824-.792-3.192s.264-2.432.792-3.192c.536-.76 1.364-1.14 2.484-1.14 1.12 0 1.944.38 2.472 1.14.536.76.804 1.824.804 3.192s-.268 2.432-.804 3.192c-.528.76-1.352 1.14-2.472 1.14Zm0-1.416c.536 0 .908-.188 1.116-.564.216-.376.324-.9.324-1.572v-1.56c0-.672-.108-1.196-.324-1.572-.208-.376-.58-.564-1.116-.564-.536 0-.912.188-1.128.564-.208.376-.312.9-.312 1.572v1.56c0 .672.104 1.196.312 1.572.216.376.592.564 1.128.564Zm0-2.208c-.28 0-.476-.056-.588-.168a.578.578 0 0 1-.156-.408v-.264c0-.16.052-.296.156-.408.112-.112.308-.168.588-.168.28 0 .472.056.576.168a.555.555 0 0 1 .168.408v.264c0 .16-.056.296-.168.408-.104.112-.296.168-.576.168Zm7.196 3.624c-1.12 0-1.948-.38-2.484-1.14-.528-.76-.792-1.824-.792-3.192s.264-2.432.792-3.192c.536-.76 1.364-1.14 2.484-1.14 1.12 0 1.944.38 2.472 1.14.536.76.804 1.824.804 3.192s-.268 2.432-.804 3.192c-.528.76-1.352 1.14-2.472 1.14Zm0-1.416c.536 0 .908-.188 1.116-.564.216-.376.324-.9.324-1.572v-1.56c0-.672-.108-1.196-.324-1.572-.208-.376-.58-.564-1.116-.564-.536 0-.912.188-1.128.564-.208.376-.312.9-.312 1.572v1.56c0 .672.104 1.196.312 1.572.216.376.592.564 1.128.564Zm0-2.208c-.28 0-.476-.056-.588-.168a.578.578 0 0 1-.156-.408v-.264c0-.16.052-.296.156-.408.112-.112.308-.168.588-.168.28 0 .472.056.576.168a.555.555 0 0 1 .168.408v.264c0 .16-.056.296-.168.408-.104.112-.296.168-.576.168Z"
      fill="#fff"
    />
    <defs>
      <filter
        id="Large_Dial_svg__a"
        x={21.377}
        y={91.377}
        width={72.016}
        height={72.016}
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
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_7" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1_7"
          result="shape"
        />
      </filter>
      <filter
        id="Large_Dial_svg__b"
        x={44.358}
        y={140.238}
        width={6.46}
        height={13.434}
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
        <feBlend in2="shape" result="effect1_innerShadow_1_7" />
      </filter>
    </defs>
  </svg>
);
export default SvgLargeDial;
