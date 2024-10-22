import { Fragment } from "react";
// CUSTOM COMPONENTS
import NavItem from "./nav-item";
import { Paragraph } from "components/Typography";
// STYLED COMPONENTS
import { MainContainer } from "./styles";
// API FUNCTIONS
import { getNavigation } from "utils/__api__/user-dashboard";

export default async function Navigation() {
  const navigation = await getNavigation();

  if (!navigation) return null;

  return (
    <MainContainer>
      {navigation.map((item) => (
        <Fragment key={item.title}>
          <Paragraph
            fontSize={12}
            color="grey.600"
            padding="26px 30px 1rem"
            textTransform="uppercase"
          >
            {item.title}
          </Paragraph>

          {item.list.map((listItem) => (
            <NavItem item={listItem} key={listItem.title} />
          ))}
        </Fragment>
      ))}
    </MainContainer>
  );
}
