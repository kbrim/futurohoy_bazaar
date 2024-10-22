import Product from "./Product.model";
import User from "./User.model";

export default interface Shop {
  id: string;
  slug: string;
  user: User;
  email: string;
  name: string;
  phone: string;
  address: string;
  verified: boolean;
  products?: Product[];
  coverPicture: string;
  profilePicture: string;
  socialLinks: {
    facebook?: string;
    youtube?: string;
    twitter?: string;
    instagram?: string;
  };
}
