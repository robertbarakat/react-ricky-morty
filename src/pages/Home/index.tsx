import { Children, useCallback, useEffect, useState } from "react";
import { useAtom } from "jotai";
import { getRickyMortonCharacters } from "../../api/services";
import { ICharacterPayload, IPaginationInfo } from "../../shared/models";
import { toggleSpinner } from "../../store";
import { Card } from "../../components";

/**
 * Pagina HOME
 * @summary Homepage del sito
 */

const initialPaginationParams: IPaginationInfo = {
  count: 0,
  pages: 0,
  next: "",
  prev: "",
};

function Home() {
  const [charactersInfo, setCharactersInfo] = useState<ICharacterPayload[]>([]);
  const [, setToggleSpinner] = useAtom(toggleSpinner);

  // GET all Characters wrapped in a useCallback for successive use in useEffect
  const fetchRickyMortonCharacters = useCallback(() => {
    setToggleSpinner(true); // Show Spinner when beginning fetching data

    getRickyMortonCharacters()
      .then(({ results, info }) => setCharactersInfo(results))
      .catch((err) => alert(err))
      .finally(() => setToggleSpinner(false)); // Hide Spinner when data fetching has ended
  }, []);

  // Fetch all characters upon mounting the component
  useEffect(() => {
    fetchRickyMortonCharacters();
  }, [fetchRickyMortonCharacters]);

  useEffect(() => console.log(charactersInfo), [charactersInfo]);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', gap: '1.25rem' }}>
      {charactersInfo.length === 0 ? (
        <h5>No data available</h5>
      ) : (
        // The Children.toArray method allows to map on array withouth having to use the "key"
        Children.toArray(
          charactersInfo.map((character: ICharacterPayload) => <Card characterInfo={character} />)
        )
      )}
    </div>
  );
}

export default Home;
