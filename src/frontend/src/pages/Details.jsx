import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import '../styles/Details.css';

const Details = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className='details'>
      <div className='back'>
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12.5 16.6L7.0667 11.1667C6.42503 10.525 6.42503 9.47502 7.0667 8.83336L12.5 3.40002'
            stroke='#202020'
            stroke-opacity='0.66'
            stroke-width='1.5'
            stroke-miterlimit='10'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </svg>
        <span>Back</span>
      </div>
      <div className='maininfo'>
        <div className='pictures'>
          <div className='left'>
            <div className='house-picture'></div>
            <div className='house-picture selected'></div>
            <div className='house-picture'></div>
          </div>
          <div className='right'></div>
        </div>
        <div className='info'>
          <div className='house-address'>565 Broome Str</div>
          <div className='house-city'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M20.6201 8.45C19.5701 3.83 15.5401 1.75 12.0001 1.75C12.0001 1.75 12.0001 1.75 11.9901 1.75C8.4601 1.75 4.4201 3.82 3.3701 8.44C2.2001 13.6 5.3601 17.97 8.2201 20.72C9.2801 21.74 10.6401 22.25 12.0001 22.25C13.3601 22.25 14.7201 21.74 15.7701 20.72C18.6301 17.97 21.7901 13.61 20.6201 8.45ZM12.0001 13.46C10.2601 13.46 8.8501 12.05 8.8501 10.31C8.8501 8.57 10.2601 7.16 12.0001 7.16C13.7401 7.16 15.1501 8.57 15.1501 10.31C15.1501 12.05 13.7401 13.46 12.0001 13.46Z'
                fill='#202020'
                fill-opacity='0.66'
              />
            </svg>
            <span>Texas, Austin</span>
          </div>
          <div className='more-details'>
            <Tabs>
              <TabList>
                <Tab onClick={() => setTabIndex(0)}>
                  <span>Details</span>
                  {
                    tabIndex === 0 ? (
                      <div className="tab-underline"></div>
                    ) : null
                  }
                </Tab>
                <Tab onClick={() => setTabIndex(1)}>
                  <span>Financials</span>
                  {
                    tabIndex === 1 ? (
                      <div className="tab-underline"></div>
                    ) : null
                  }
                </Tab>
              </TabList>
              <TabPanel>
                <div className='details-container'>
                  <div className='details-content'>
                    <div className='specs'>
                      <div className='spec-col'>
                        <div className='spec-part'>
                          <div className='spec-title ta-left'>Bedrooms</div>
                          <div className='spec-value'>
                            <span>4</span>
                            <svg
                              width='24'
                              height='25'
                              viewBox='0 0 24 25'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M21 11.28V8.5C21 6.85 19.65 5.5 18 5.5H14C13.23 5.5 12.53 5.8 12 6.28C11.47 5.8 10.77 5.5 10 5.5H6C4.35 5.5 3 6.85 3 8.5V11.28C2.39 11.83 2 12.62 2 13.5V19.5H4V17.5H20V19.5H22V13.5C22 12.62 21.61 11.83 21 11.28ZM14 7.5H18C18.55 7.5 19 7.95 19 8.5V10.5H13V8.5C13 7.95 13.45 7.5 14 7.5ZM5 8.5C5 7.95 5.45 7.5 6 7.5H10C10.55 7.5 11 7.95 11 8.5V10.5H5V8.5ZM4 15.5V13.5C4 12.95 4.45 12.5 5 12.5H19C19.55 12.5 20 12.95 20 13.5V15.5H4Z'
                                fill='#202020'
                                fill-opacity='0.4'
                              />
                            </svg>
                          </div>
                        </div>
                        <div className='spec-part'>
                          <div className='spec-title ta-left'>Bathrooms</div>
                          <div className='spec-value'>
                            <span>2</span>
                            <svg
                              width='24'
                              height='25'
                              viewBox='0 0 24 25'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M21 10.5H7V7.5C7 6.397 7.897 5.5 9 5.5C10.103 5.5 11 6.397 11 7.5H13C13 5.294 11.206 3.5 9 3.5C6.794 3.5 5 5.294 5 7.5V10.5H3C2.73478 10.5 2.48043 10.6054 2.29289 10.7929C2.10536 10.9804 2 11.2348 2 11.5V13.5C2 16.106 3.674 18.323 6 19.15V22.5H8V19.5H16V22.5H18V19.15C20.326 18.323 22 16.106 22 13.5V11.5C22 11.2348 21.8946 10.9804 21.7071 10.7929C21.5196 10.6054 21.2652 10.5 21 10.5ZM20 13.5C20 15.706 18.206 17.5 16 17.5H8C5.794 17.5 4 15.706 4 13.5V12.5H20V13.5Z'
                                fill='#202020'
                                fill-opacity='0.4'
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className='spec-col'>
                        <div className='spec-part'>
                          <div className='spec-title'>Area</div>
                          <div className='spec-value d-inline ta-center'>
                            1,024m<sup>2</sup>
                          </div>
                        </div>
                        <div className='spec-part'>
                          <div className='spec-title'>Built</div>
                          <div className='spec-value d-inline ta-center'>2017</div>
                        </div>
                      </div>
                    </div>
                    <div className='owner'>
                      <span className='spec-title'>Owner</span>
                      <span>
                        RealToken 16085 E Seven Mile, Detroit, MI 48205, Inc
                      </span>
                    </div>
                  </div>
                  <div className='map'>
                    <span>Location</span>
                    <div id='map'></div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Details;
