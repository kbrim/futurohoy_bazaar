import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
// import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
// MUI ICON COMPONENTS
import Call from "@mui/icons-material/Call";
import Place from "@mui/icons-material/Place";
// GLOBAL CUSTOM COMPONENTS
import { H3, Small, Span } from "components/Typography";
import { FlexBetween, FlexBox } from "components/flex-box";
// CUSTOM ICON COMPONENTS
import TwitterFilled from "icons/TwitterFilled";
import YoutubeFilled from "icons/YoutubeFilled";
import FacebookFilled from "icons/FacebookFilled";
import InstagramFilled from "icons/InstagramFilled";
// CUSTOM DATA MODEL
import Shop from "models/Shop.model";

// =======================================================
type Props = { shop: Shop };
// =======================================================

export default function ShopIntroCard({ shop }: Props) {
  const { name, phone, address, coverPicture, profilePicture, socialLinks } =
    shop;

  const socials = [
    { Icon: FacebookFilled, url: socialLinks.facebook },
    { Icon: TwitterFilled, url: socialLinks.twitter },
    { Icon: YoutubeFilled, url: socialLinks.youtube },
    { Icon: InstagramFilled, url: socialLinks.instagram },
  ];

  return (
    <Card sx={{ mb: 4, pb: 2.5 }}>
      <Box
        height="202px"
        sx={{ background: `url(${coverPicture}) center/cover` }}
      />

      <FlexBox mt={-8} px={3.75} flexWrap="wrap">
        <Avatar
          alt={name}
          src={profilePicture}
          sx={{
            mr: "37px",
            width: "120px",
            height: "120px",
            border: "4px solid",
            borderColor: "grey.100",
          }}
        />

        <Box
          sx={{
            flex: "1 1 0",
            minWidth: "250px",
            "@media only screen and (max-width: 500px)": { marginLeft: 0 },
          }}
        >
          <FlexBetween flexWrap="wrap" mt={0.375} mb={3}>
            <Box
              my={1}
              p="4px 16px"
              borderRadius="4px"
              display="inline-block"
              bgcolor="secondary.main"
            >
              <H3 fontWeight="600" color="grey.100">
                {name}
              </H3>
            </Box>

            <FlexBox my={1} gap={1.5}>
              {socials.map(({ Icon, url }, index) =>
                url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer noopener"
                    key={index}
                  >
                    <Icon sx={{ fontSize: 27 }} />
                  </a>
                ) : null,
              )}
            </FlexBox>
          </FlexBetween>

          <FlexBetween flexWrap="wrap">
            <div>
              {/* <FlexBox alignItems="center" gap={1} mb={2}>
                <Rating color="warn" size="small" value={rating} readOnly />
                <Small color="grey.600" display="block">
                  (45)
                </Small>
              </FlexBox> */}

              <FlexBox color="grey.600" gap={1} mb={1} maxWidth={270}>
                <Place fontSize="small" sx={{ fontSize: 18, mt: "3px" }} />
                <Span color="grey.600">{address}</Span>
              </FlexBox>

              <FlexBox color="grey.600" gap={1} mb={1}>
                <Call fontSize="small" sx={{ fontSize: 18, mt: "2px" }} />
                <Span color="grey.600">{phone}</Span>
              </FlexBox>
            </div>

            <a href="mailto:scarletbeauty@xmail.com">
              <Button variant="outlined" color="primary" sx={{ my: 1.5 }}>
                Contact Vendor
              </Button>
            </a>
          </FlexBetween>
        </Box>
      </FlexBox>
    </Card>
  );
}
