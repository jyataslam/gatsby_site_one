import React from "react";
import { Link } from "gatsby";
import { BannerSection } from "./banner.stc";
import Text from "../../../components/shared/text";
import Button from "../../../components/shared/button";

const Banner = () => {
  return (
    <BannerSection>
      <div className="container">
        <div className="row">
          <div className="col-2 offset-1">
            <h3>Free Consultations</h3>
            <p>
              We always offer free consultations and same day appointments are
              available! Call us to learn more.
            </p>
          </div>
          <div className="col-1 offset-9">
            <Button as={Link} to='/company' layout={2}>Book Us Now <i className="ti-arrow-right"></i></Button>
          </div>
        </div>
      </div>
    </BannerSection>
  );
};

export default Banner;
