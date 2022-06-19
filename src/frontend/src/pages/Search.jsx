import '../App.css'
import '../styles/Search.css'

const Search = () => {
  return (
    <div className="search">
      <div className="left">
        <div className="range">
          <div className="range-title">Price range</div>
          <div className="range-slider">
            <div className="range-progress"></div>
          </div>
          <div className="range-fromto">
            <div className="range-fromto-box">
              <div className="range-fromto-text">From:</div>
              <div className="range-fromto-text">
                <span>$</span>
                <span>8200</span>
              </div>
            </div>
          </div>
          <div className="range-fromto">
            <div className="range-fromto-box">
              <div className="range-fromto-text">To:</div>
              <div className="range-fromto-text">
                <span>$</span>
                <span>8200</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="center"></div>
      <div className="right"></div>
    </div>
  )
}

export default Search