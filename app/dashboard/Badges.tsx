import React from "react";
import BadgesData from "../../badgesData";
import BadgesElements from "./BadgesElements";

function Badges() {
  const badgeElement = BadgesData.map((item) => {
    return (
      <BadgesElements
        key={item.id}
        title={item.title}
        duration={item.duration}
        // icon={item.icon}
      />
    );
  });
  return <div className="pr-10">{badgeElement}</div>;
}

export default Badges;
