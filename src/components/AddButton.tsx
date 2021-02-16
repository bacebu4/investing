import { SvgButtonWrapper } from "./SvgButtonWrapper";

type AddButtonProps = {
  onClick?: () => void;
};

export const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return (
    <SvgButtonWrapper type="button" onClick={onClick}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="36" height="36" rx="12" fill="#F7F6FF" />
        <g clipPath="url(#clip0)">
          <g filter="url(#filter0_d)">
            <path
              d="M9.66324 17.8918H24.9013"
              stroke="#6A63DD"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.2823 25.5109V10.2712"
              stroke="#6A63DD"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="1.66324"
            y="7.27124"
            width="25.2381"
            height="25.2396"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dx="-3" dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <clipPath id="clip0">
            <rect
              width="32"
              height="32"
              fill="white"
              transform="translate(2 2)"
            />
          </clipPath>
        </defs>
      </svg>
    </SvgButtonWrapper>
  );
};
