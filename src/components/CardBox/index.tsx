import React from "react";
import classNames from "classnames";

type StyleProp = {
  styleName?: string;
  cardStyle?: string;
  childrenStyle?: string;
  headingStyle?: string;
};

type CardBoxProps = StyleProp & {
  heading?: string;
  children?: React.ReactNode;
  headerOutside?: boolean;
};

const CardBox: React.FC<CardBoxProps> = ({
  heading,
  children,
  styleName = "col-lg-6 col-sm-12",
  cardStyle = "",
  childrenStyle = "",
  headerOutside = false,
  headingStyle = "",
}) => {
  const header = (
    <div className="jr-entry-header">
      <h3 className="entry-heading">{heading}</h3>
      {React.Children.toArray(children)?.[0] && (
        <div className="entry-description">
          {React.Children.toArray(children)?.[0]}
        </div>
      )}
    </div>
  );

  const cardHeader = (
    <div className={classNames("jr-card-header", headingStyle)}>
      <h3 className="card-heading">{heading}</h3>
      {React.Children.toArray(children)?.[0] && (
        <div className="sub-heading">
          {React.Children.toArray(children)?.[0]}
        </div>
      )}
    </div>
  );

  const cardBody = (
    <div className={classNames("jr-card-body", childrenStyle)}>
      {React.Children.toArray(children)?.[1] ||
        React.Children.toArray(children)?.[0]}
    </div>
  );

  return (
    <div className={styleName}>
      {headerOutside && header}

      <div className={classNames("jr-card", cardStyle)}>
        {!headerOutside && heading && cardHeader}
        {cardBody}
      </div>
    </div>
  );
};

export default CardBox;
