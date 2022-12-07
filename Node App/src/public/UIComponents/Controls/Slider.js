import * as React from "react";
const SvgSlider = ({ props, dragStart, sliderOffset}) => {
  // Between 0 and 150px;
  
  // const sliderPos = sliderPercent / 100 * 150;
  
  return(
    <svg
      width={114}
      height={270}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      pointerEvents="none"
    >
      <path fill="#fff" d="M0 0h114v270H0z" pointerEvents="auto"/>
      <g filter="url(#Slider_svg__a)">
        <path fill="#B4B4B4" d="M55 47h4v150h-4z" />
      </g>
      <g filter="url(#Slider_svg__b)" style={{ transform: `translateY(-${sliderOffset}px)`}}>
        <path fill="#D9D9D9" d="M44 187h26v13H44z" />
      </g>
      <g filter="url(#Slider_svg__c)" pointerEvents="auto" onMouseDown={dragStart} style={{ transform: `translateY(-${sliderOffset}px)`}}>
        <path fill="#ECECEC" d="M44 184h26v13H44z" />
      </g>
      <path
        d="M41 209.5a2.5 2.5 0 0 1 2.5-2.5h27a2.5 2.5 0 0 1 2.5 2.5v12a2.5 2.5 0 0 1-2.5 2.5h-27a2.5 2.5 0 0 1-2.5-2.5v-12Z"
        fill="#B4B4B4"
      />
      <path
        d="M49.6 220.144c-1.12 0-1.948-.38-2.484-1.14-.528-.76-.792-1.824-.792-3.192s.264-2.432.792-3.192c.536-.76 1.364-1.14 2.484-1.14 1.12 0 1.944.38 2.472 1.14.536.76.804 1.824.804 3.192s-.268 2.432-.804 3.192c-.528.76-1.352 1.14-2.472 1.14Zm0-1.416c.536 0 .908-.188 1.116-.564.216-.376.324-.9.324-1.572v-1.56c0-.672-.108-1.196-.324-1.572-.208-.376-.58-.564-1.116-.564-.536 0-.912.188-1.128.564-.208.376-.312.9-.312 1.572v1.56c0 .672.104 1.196.312 1.572.216.376.592.564 1.128.564Zm0-2.208c-.28 0-.476-.056-.588-.168a.578.578 0 0 1-.156-.408v-.264c0-.16.052-.296.156-.408.112-.112.308-.168.588-.168.28 0 .472.056.576.168a.555.555 0 0 1 .168.408v.264c0 .16-.056.296-.168.408-.104.112-.296.168-.576.168Zm7.195 3.624c-1.12 0-1.948-.38-2.484-1.14-.528-.76-.792-1.824-.792-3.192s.264-2.432.792-3.192c.536-.76 1.364-1.14 2.484-1.14 1.12 0 1.944.38 2.472 1.14.536.76.804 1.824.804 3.192s-.268 2.432-.804 3.192c-.528.76-1.352 1.14-2.472 1.14Zm0-1.416c.536 0 .908-.188 1.116-.564.216-.376.324-.9.324-1.572v-1.56c0-.672-.108-1.196-.324-1.572-.208-.376-.58-.564-1.116-.564-.536 0-.912.188-1.128.564-.208.376-.312.9-.312 1.572v1.56c0 .672.104 1.196.312 1.572.216.376.592.564 1.128.564Zm0-2.208c-.28 0-.476-.056-.588-.168a.578.578 0 0 1-.156-.408v-.264c0-.16.052-.296.156-.408.112-.112.308-.168.588-.168.28 0 .472.056.576.168a.555.555 0 0 1 .168.408v.264c0 .16-.056.296-.168.408-.104.112-.296.168-.576.168Zm7.196 3.624c-1.12 0-1.948-.38-2.484-1.14-.528-.76-.792-1.824-.792-3.192s.264-2.432.792-3.192c.536-.76 1.364-1.14 2.484-1.14 1.12 0 1.944.38 2.472 1.14.536.76.804 1.824.804 3.192s-.268 2.432-.804 3.192c-.528.76-1.352 1.14-2.472 1.14Zm0-1.416c.536 0 .908-.188 1.116-.564.216-.376.324-.9.324-1.572v-1.56c0-.672-.108-1.196-.324-1.572-.208-.376-.58-.564-1.116-.564-.536 0-.912.188-1.128.564-.208.376-.312.9-.312 1.572v1.56c0 .672.104 1.196.312 1.572.216.376.592.564 1.128.564Zm0-2.208c-.28 0-.476-.056-.588-.168a.578.578 0 0 1-.156-.408v-.264c0-.16.052-.296.156-.408.112-.112.308-.168.588-.168.28 0 .472.056.576.168a.555.555 0 0 1 .168.408v.264c0 .16-.056.296-.168.408-.104.112-.296.168-.576.168Z"
        fill="#fff"
      />
      <defs>
        <filter
          id="Slider_svg__a"
          x={55}
          y={47}
          width={4}
          height={154}
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
          <feBlend in2="shape" result="effect1_innerShadow_4_65" />
        </filter>
        <filter
          id="Slider_svg__b"
          x={40}
          y={187}
          width={34}
          height={21}
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
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4_65" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_4_65"
            result="shape"
          />
        </filter>
        <filter
          id="Slider_svg__c"
          x={40}
          y={184}
          width={34}
          height={21}
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
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_4_65" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_4_65"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
)
}

export default SvgSlider;
