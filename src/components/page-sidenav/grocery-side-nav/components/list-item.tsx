import { Span } from "components/Typography";
import FlexBox from "components/flex-box/flex-box";
import IconComponent from "components/IconComponent";

// ==============================================================
type Props = { icon: string; title: string };
// ==============================================================

export default function ListItem({ title, icon }: Props) {
  return (
    <FlexBox py={1} gap={1.5} alignItems="center">
      <IconComponent icon={icon} fontSize="small" />
      <Span fontWeight={600}>{title}</Span>
    </FlexBox>
  );
}
