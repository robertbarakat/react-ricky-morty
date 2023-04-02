import paginationStyle from "./Pagination.module.css";

type Props = {
  page: number;
  pageBackward: () => void;
  pageForward: () => void;
  isLastPage: boolean;
};

/**
 * PAGINATION Component
 * @summary Component used to manage pagination
 * @param page {number} Current page number to be displayed
 * @param pageBackward {() => void} Method to go to the previous page
 * @param pageForward {() => void} Method to go to the next page
 * @param isLastPage {boolean} BOolean indicating if the current page is the last one or not
 */

function Pagination({ isLastPage, page, pageBackward, pageForward }: Props) {
  return (
    <div className={paginationStyle.pagination}>
      {page > 1 && (
        <i
          className="fas fa-chevron-left cursor-pointer"
          onClick={pageBackward}
        />
      )}
      <p className={paginationStyle.paginationPage}>{page}</p>
      {!isLastPage && (
        <i
          className="fas fa-chevron-right cursor-pointer"
          onClick={pageForward}
        />
      )}
    </div>
  );
}

export default Pagination;
