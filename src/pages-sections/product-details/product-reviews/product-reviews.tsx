import Image from "next/image";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
// LOCAL CUSTOM COMPONENT
import ReviewForm from "./review-form";
// GLOBAL CUSTOM COMPONENTS
import { H3, H5, H6, Paragraph, Span } from "components/Typography";
// CUSTOM UTILS LIBRARY FUNCTION
import { getDateDifference } from "lib";
// STYLED COMPONENTS
import { ReviewRoot } from "./styles";
// API FUNCTIONS
import api from "utils/__api__/products";

export default async function ProductReviews() {
  const reviews = await api.getProductReviews();

  return (
    <div>
      {/* REVIEW LIST */}
      {reviews.map(({ comment, date, imgUrl, name, rating }, ind) => (
        <ReviewRoot key={ind}>
          <div className="user-info">
            <Avatar alt={name} src={imgUrl} className="user-avatar">
              <Image src={imgUrl} alt={name} fill sizes="(48px 48px)" />
            </Avatar>

            <div>
              <H5 mb={1}>{name}</H5>

              <div className="user-rating">
                <Rating size="small" value={rating} color="warn" readOnly />
                <H6>{rating}</H6>
                <Span>{getDateDifference(date)}</Span>
              </div>
            </div>
          </div>

          <Paragraph color="grey.700">{comment}</Paragraph>
        </ReviewRoot>
      ))}

      {/* REVIEW FORM */}
      <H3 fontWeight="600" mt={7} mb={2.5}>
        Write a Review for this product
      </H3>

      <ReviewForm />
    </div>
  );
}
