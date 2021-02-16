import { SvgButtonWrapper } from "./SvgButtonWrapper";

type CloseButtonProps = {
  onClick?:
    | ((
        event:
          | React.MouseEvent<Element, MouseEvent>
          | React.KeyboardEvent<Element>
      ) => void)
    | undefined;
};

export const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <SvgButtonWrapper type="button" onClick={onClick}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.0001 31.7143C25.5742 31.7143 31.7143 25.5742 31.7143 18C31.7143 10.4258 25.5742 4.28571 18.0001 4.28571C10.4259 4.28571 4.28577 10.4258 4.28577 18C4.28577 25.5742 10.4259 31.7143 18.0001 31.7143Z"
          fill="black"
          fillOpacity="0.65"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.4358 23.8499C22.8264 24.2405 23.4595 24.2405 23.8501 23.8499C24.2406 23.4594 24.2406 22.8262 23.8501 22.4357L19.4143 18L23.8501 13.5642C24.2406 13.1737 24.2406 12.5405 23.8501 12.15C23.4595 11.7595 22.8264 11.7595 22.4358 12.15L18.0001 16.5858L13.5643 12.15C13.1738 11.7595 12.5406 11.7595 12.1501 12.15C11.7596 12.5405 11.7596 13.1737 12.1501 13.5642L16.5859 18L12.1501 22.4357C11.7596 22.8262 11.7596 23.4594 12.1501 23.8499C12.5406 24.2405 13.1738 24.2405 13.5643 23.8499L18.0001 19.4142L22.4358 23.8499Z"
          fill="white"
          fillOpacity="0.5"
        />
      </svg>
    </SvgButtonWrapper>
  );
};
