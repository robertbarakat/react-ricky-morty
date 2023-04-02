import spinnerImg from '../../shared/assets/images/spinner.png';
import spinnerStyle from './Spinner.module.css'

/**
 * Componente Spinner
 * @summary Spinner to be shown while loading data
 */

function Spinner() {
  return (
    <div className={spinnerStyle.spinnerContainer}>
      <div className={spinnerStyle.spinnerBackground} />
      <img src={spinnerImg} className={spinnerStyle.spinnerLogo} alt="Loading..." />
      <h5>Attendere prego ...</h5>
    </div>
  )
}

export default Spinner
