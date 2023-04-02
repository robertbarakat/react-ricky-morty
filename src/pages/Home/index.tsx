import { Children, useCallback, useEffect, useState } from "react";
import { useAtom } from "jotai";
import { Card, Pagination } from "../../components";
import { getRickyMortonCharacters } from "../../api/services";
import { ICharacterPayload, IPaginationInfo } from "../../shared/models";
import { toggleSpinner } from "../../store";
import homeStyle from "./Home.module.css";

/**
 * Pagina HOME
 * @summary Homepage in which the paginated Character Brief Profiles are displayed
 */

type ICurrentPage = {
  currentPage: number;
  totalPages: number;
};

const initialPaginationParams: ICurrentPage = {
  currentPage: 1,
  totalPages: 1,
};

function Home() {
  const [, setToggleSpinner] = useAtom(toggleSpinner);
  const [charactersInfo, setCharactersInfo] = useState<ICharacterPayload[]>([]);
  const [paginationParams, setPaginationParams] = useState<ICurrentPage>(
    initialPaginationParams
  );

  const pageBackward = () =>
    setPaginationParams((prevState) => ({
      ...prevState,
      currentPage: prevState.currentPage - 1,
    }));

  const pageForward = () =>
    setPaginationParams((prevState) => ({
      ...prevState,
      currentPage: prevState.currentPage + 1,
    }));

  // GET all Characters wrapped in a useCallback for successive use in useEffect
  const fetchRickyMortonCharacters = useCallback(() => {
    setToggleSpinner(true); // Show Spinner when starting to fetch data

    getRickyMortonCharacters(paginationParams.currentPage)
      .then(({ results, info }) => {
        setCharactersInfo(results);
        setPaginationParams((prevState) => ({
          ...prevState,
          totalPages: info.pages,
        }));
      })
      .catch((err) => alert(err))
      .finally(() => setToggleSpinner(false)); // Hide Spinner when data fetching has ended
  }, [paginationParams.currentPage]);

  // Fetch all characters upon mounting the component
  useEffect(() => {
    fetchRickyMortonCharacters();
  }, [fetchRickyMortonCharacters]);

  const renderCards = () => (
    <>
      <div className={homeStyle.cardContainer}>
        {
          // The Children.toArray method allows to map on array withouth having to use the "key"
          Children.toArray(
            charactersInfo.map((character: ICharacterPayload) => (
              <Card characterInfo={character} />
            ))
          )
        }
      </div>

      <Pagination
        page={paginationParams.currentPage}
        pageBackward={pageBackward}
        pageForward={pageForward}
        isLastPage={
          paginationParams.totalPages === paginationParams.currentPage
        }
      />
    </>
  );

  return (
    <div className={homeStyle.homeContainer}>
      {charactersInfo.length === 0 ? <h5>No data available</h5> : renderCards()}
    </div>
  );
}

export default Home;
