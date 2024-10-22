import { BoxProps } from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material/styles";
// MUI ICON COMPONENTS
import ChevronRight from "@mui/icons-material/ChevronRight";
// STYLED COMPONENT
import { RootContainer } from "./styles";

// =================================================================
interface Props extends BoxProps {
  open?: boolean;
  showIcon?: boolean;
  sx?: SxProps<Theme>;
}
// =================================================================

export default function AccordionHeader(props: Props) {
  const { open, children, showIcon = true, ...others } = props;

  return (
    <RootContainer open={open} {...others}>
      {children}
      {showIcon ? <ChevronRight className="caret" fontSize="small" /> : null}
    </RootContainer>
  );
}
