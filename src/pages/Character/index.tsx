import { Children, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { toggleSpinner } from "../../store";
import {
  getRickyMortonEpisodeById,
  getRickyMortonLocationById,
} from "../../api/services";
import {
  ICharacterPayload,
  IEpisodePayload,
  ILocationPayload,
} from "../../shared/models";
import { getEpisodeId, getLocationId } from "../../shared/utils";
import characterStyle from "./Character.module.css";

// Interface to type the state passed through react router
interface LocationState {
  characterInfo: ICharacterPayload;
}

/**
 * Character Profile Page
 * @summary Page displaying the complete profile of a Ricky and Morton Character
 */

function Character() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;
  const [, setToggleSpinner] = useAtom(toggleSpinner);

  const [locationInfo, setLocationInfo] = useState<ILocationPayload | null>(
    null
  );
  const [episodesInfo, setEpisodesInfo] = useState<IEpisodePayload[]>([]);

  // On component mount, info about the character's location and episodes are fetched
  useEffect(() => {
    if (!location.state) navigate("/"); // If there is no routing state the user is redirected to the homepage 

    else {
      setToggleSpinner(true); // Show Spinner when starting to fetch data

      const characterLocationId = getLocationId(
        state?.characterInfo.location.url
      );
      const characterEpisodesId = state?.characterInfo.episode.map(
        (episode: string) => getEpisodeId(episode)
      );

      Promise.all([
        getRickyMortonLocationById(characterLocationId),
        getRickyMortonEpisodeById(characterEpisodesId),
      ])
        .then((values) => {
          setLocationInfo(values[0]);
          setEpisodesInfo(Array.isArray(values[1]) ? values[1] : [values[1]]);
        })
        .catch((err) => alert(err))
        .finally(() => setToggleSpinner(false));
    }
  }, []);

  return (
    <div>
      <div className={characterStyle.goBackLink} onClick={() => navigate(-1)}>
        Go back
      </div>

      <div className={characterStyle.characterInfoContainer}>
        <img
          src={state?.characterInfo.image}
          alt={state?.characterInfo.name}
          width={200}
        />
        <div>
          <h4>Personal Info</h4>
          <p>Name: {state?.characterInfo.name}</p>
          <p>Status: {state?.characterInfo.status}</p>
          <p>Species: {state?.characterInfo.species}</p>
          <p>Gender: {state?.characterInfo.gender}</p>
        </div>

        <div>
          <h4>Location Info</h4>
          <p>Location Name: {locationInfo?.name}</p>
          <p>Location Type: {locationInfo?.type}</p>
          <p>Dimension: {locationInfo?.dimension}</p>
          <p>Residents: {locationInfo?.residents.length}</p>
        </div>
      </div>

      <h4>Episodes in which {state?.characterInfo.name} appears</h4>
      <ul>
        {episodesInfo.length > 0 &&
          Children.toArray(
            episodesInfo.map((episode: IEpisodePayload) => (
              <li>
                {episode.episode} - {episode.name}
              </li>
            ))
          )}
      </ul>
    </div>
  );
}

export default Character;
