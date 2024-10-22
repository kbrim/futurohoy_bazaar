import { format } from "date-fns";
import Card from "@mui/material/Card";
// GLOBAL CUSTOM COMPONENTS
import FlexBox from "components/flex-box/flex-box";
import { Small, Span } from "components/Typography";
// CUSTOM DATA MODEL
import User from "models/User.model";

// ==============================================================
type Props = { user: User };
// ==============================================================

export default function UserInfo({ user }: Props) {
  return (
    <Card
      sx={{
        marginTop: 3,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: { md: "row", xs: "column" },
        alignItems: { md: "center", xs: "flex-start" },
        justifyContent: { md: "space-between", xs: "flex-start" },
        padding: "0.75rem 1.5rem",
      }}
    >
      <TableRowItem title="First Name" value={user.name.firstName} />
      <TableRowItem title="Last Name" value={user.name.lastName} />
      <TableRowItem title="Email" value={user.email} />
      <TableRowItem title="Phone" value={user.phone} />
      <TableRowItem
        title="Birth date"
        value={format(new Date(user.dateOfBirth), "dd MMM, yyyy")}
      />
    </Card>
  );
}

function TableRowItem({ title, value }: { title: string; value: string }) {
  return (
    <FlexBox flexDirection="column" p={1}>
      <Small color="grey.600" mb={0.5}>
        {title}
      </Small>

      <Span>{value}</Span>
    </FlexBox>
  );
}
