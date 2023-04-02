import { Children } from "react";
import { useNavigate } from "react-router-dom";
import { ICharacterPayload } from "../../shared/models";
import { capitalizeFirstLetter } from "../../shared/utils";
import cardStyle from "./Card.module.css";

type Props = {
  characterInfo: ICharacterPayload;
};

type NestedKeys = {
    parent: string;
    child: string;
}

/**
 * CARD Component
 * @summary Component used to render the Character Information
 * @param characterInfo {ICharacterPayload} Object containing all the infos regarding the character
 */

function Card({ characterInfo }: Props) {
  const navigate = useNavigate()

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

  // Method to render the desired nested keys
  const renderCharacterNestedKeys = (keys: NestedKeys[]) => {
    return Children.toArray(
      keys.map((item: NestedKeys) => (
        <p>
          <strong>{capitalizeFirstLetter(item.parent)}:&nbsp;</strong>
          {characterInfo[item.parent][item.child]}
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
        {renderCharacterNestedKeys([{ parent: 'origin', child: 'name' }, { parent: 'location', child: 'name' }])}
      </div>

      {/* CARD LINK TO CHARACTER PAGE */}
      <div className={cardStyle.cardLink} onClick={() => navigate('/character', { state: {characterInfo} })}>
        More
      </div>
    </div>
  );
}

export default Card;
