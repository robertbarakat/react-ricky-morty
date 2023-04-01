import { Children } from "react";
import { ICharacterPayload } from "../../shared/models";
import { capitalizeFirstLetter } from "../../shared/utils";
import cardStyle from "./Card.module.css";

type Props = {
  characterInfo: ICharacterPayload;
};

/**
 * CARD Component
 * @summary Component used to render the Character Information
 * @param characterInfo {ICharacterPayload} Object containing all the infos regarding the character
 */

function Card({ characterInfo }: Props) {
  // Method to render the desired keys
  const renderCharacterKeys = (keys: string[]) => {
    return Children.toArray(
      keys.map((key: string) => (
        <p>
          <strong>{capitalizeFirstLetter(key)}:&nbsp;</strong>
          {characterInfo[key]}
        </p>
      ))
    );
  };

  return (
    <div className={cardStyle.cardContainer}>
      {/* CARD IMAGE */}
      <div>
        <img
          className={cardStyle.cardImage}
          src={characterInfo.image}
          alt={characterInfo.name}
        />
      </div>

      {/* CARD BODY */}
      <div className={cardStyle.cardBody}>
        {renderCharacterKeys(["name", "status", "species", "gender"])}
      </div>
    </div>
  );
}

export default Card;
