import { useAtom } from "jotai";
import { Spinner } from "./components";
import { generateAllRoutes } from "./routing/routesGenerator";
import { toggleSpinner } from "./store";

/**
 * APP Component
 * @summary Component that:
 *          - wraps the whole application
 *          - contains the dynamically generated routes
 */

function App() {
  const [showSpinner] = useAtom(toggleSpinner);

  return (
    <div>
      
      {/* Method to generate the project's Routes */ 
        generateAllRoutes()
      }

      {
        /* SPINNER to be displayed when performing API requests  */
        showSpinner && <Spinner />
      }
    </div>
  );
}

export default App;
