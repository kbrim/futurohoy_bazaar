// GLOBAL CUSTOM COMPONENTS
import { H3, Paragraph } from "components/Typography";
import IconComponent from "components/IconComponent";
// STYLED COMPONENT
import { StyledRoot } from "./styles";

// ==========================================================
interface Props {
  body: string;
  title: string;
  icon: string;
}
// ==========================================================

export default function Card4({ title, body, icon }: Props) {
  return (
    <StyledRoot>
      <div>
        <div className="icon-box">
          <IconComponent icon={icon} className="icon" color="primary" />
        </div>

        <H3 fontWeight={900} textAlign="center" mb="0.3rem">
          {title}
        </H3>

        <Paragraph color="grey.600" textAlign="center">
          {body}
        </Paragraph>
      </div>
    </StyledRoot>
  );
}
