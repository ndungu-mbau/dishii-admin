import React from 'react'

import NavBar from '../components/navbar'

const routes = [
  {
    title: 'Admin',
    icon: 'chart-pie',
    link: 'admin'
  },
  {
    title: 'Cashier',
    icon: 'hand-holding-usd',
    link: 'cashier'
  },
  {
    title: 'Client',
    icon: 'user',
    link: 'client'
  },
  {
    title: 'Tables',
    icon: 'table',
    id: 'table',
    children: [
      {
        link: '/tables',
        title: 'Bootstrap Tables',
        icon: 'cog'
      }
    ]
  }
]

export default props => {
  return (
    <>
      <NavBar routes={routes} />
      <main className='content'>
        <div class='row justify-content-md-center'>
          <div class='col-12 mb-4'>
            <div class='card bg-yellow-alt shadow-sm'>
              <div class='card-header d-flex flex-row align-items-center flex-0'>
                <div class='d-block'>
                  <div class='h5 font-weight-normal mb-2'>Client Sales</div>
                  <h2 class='h3'>$10,567</h2>
                  <div class='small mt-2'>
                    <span class='font-weight-bold mr-2'>Yesterday</span>
                    <span class='fas fa-angle-up text-success'></span>
                    <span class='text-success font-weight-bold'>10.57%</span>
                  </div>
                </div>
                <div class='d-flex ml-auto'>
                  <a href='#' class='btn btn-secondary text-dark btn-sm mr-2'>
                    Month
                  </a>
                  <a href='#' class='btn btn-primary btn-sm mr-3'>
                    Week
                  </a>
                </div>
              </div>
              <div class='card-body p-2'>
                <div class='ct-chart-sales-value ct-double-octave ct-series-g'></div>
              </div>
            </div>
          </div>
          <div class='col-12 col-sm-6 col-xl-4 mb-4'>
            <div class='card border-light shadow-sm'>
              <div class='card-body'>
                <div class='row d-block d-xl-flex align-items-center'>
                  <div class='col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center'>
                    <div class='icon icon-shape icon-md icon-shape-blue rounded mr-4 mr-sm-0'>
                      <span class='fas fa-chart-line'></span>
                    </div>
                    <div class='d-sm-none'>
                      <h2 class='h5'>Customers</h2>
                      <h3 class='mb-1'>345,678</h3>
                    </div>
                  </div>
                  <div class='col-12 col-xl-7 px-xl-0'>
                    <div class='d-none d-sm-block'>
                      <h2 class='h5'>Customers</h2>
                      <h3 class='mb-1'>345k</h3>
                    </div>
                    <small>
                      Feb 1 - Apr 1,{' '}
                      <span class='icon icon-small'>
                        <span class='fas fa-globe-europe'></span>
                      </span>{' '}
                      WorldWide
                    </small>
                    <div class='small mt-2'>
                      <span class='fas fa-angle-up text-success'></span>
                      <span class='text-success font-weight-bold'>
                        18.2%
                      </span>{' '}
                      Since last month
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='col-12 col-sm-6 col-xl-4 mb-4'>
            <div class='card border-light shadow-sm'>
              <div class='card-body'>
                <div class='row d-block d-xl-flex align-items-center'>
                  <div class='col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center'>
                    <div class='icon icon-shape icon-md icon-shape-secondary rounded mr-4'>
                      <span class='fas fa-cash-register'></span>
                    </div>
                    <div class='d-sm-none'>
                      <h2 class='h5'>Revenue</h2>
                      <h3 class='mb-1'>$43,594</h3>
                    </div>
                  </div>
                  <div class='col-12 col-xl-7 px-xl-0'>
                    <div class='d-none d-sm-block'>
                      <h2 class='h5'>Revenue</h2>
                      <h3 class='mb-1'>$43,594</h3>
                    </div>
                    <small>
                      Feb 1 - Apr 1,{' '}
                      <span class='icon icon-small'>
                        <span class='fas fa-globe-europe'></span>
                      </span>{' '}
                      Worldwide
                    </small>
                    <div class='small mt-2'>
                      <span class='fas fa-angle-up text-success'></span>
                      <span class='text-success font-weight-bold'>
                        28.2%
                      </span>{' '}
                      Since last month
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='col-12 col-sm-6 col-xl-4 mb-4'>
            <div class='card border-light shadow-sm'>
              <div class='card-body'>
                <div class='row d-block d-xl-flex align-items-center'>
                  <div class='col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center'>
                    <div class='ct-chart-traffic-share ct-golden-section ct-series-a'></div>
                  </div>
                  <div class='col-12 col-xl-7 px-xl-0'>
                    <h2 class='h5 mb-3'>Traffic Share</h2>
                    <h6 class='font-weight-normal text-gray'>
                      <span class='icon w-20 icon-xs icon-secondary mr-1'>
                        <span class='fas fa-desktop'></span>
                      </span>{' '}
                      Desktop{' '}
                      <a href='#' class='h6'>
                        60%
                      </a>
                    </h6>
                    <h6 class='font-weight-normal text-gray'>
                      <span class='icon w-20 icon-xs icon-primary mr-1'>
                        <span class='fas fa-mobile-alt'></span>
                      </span>{' '}
                      Mobile Web{' '}
                      <a href='#' class='h6'>
                        30%
                      </a>
                    </h6>
                    <h6 class='font-weight-normal text-gray'>
                      <span class='icon w-20 icon-xs icon-tertiary mr-1'>
                        <span class='fas fa-tablet-alt'></span>
                      </span>{' '}
                      Tablet Web{' '}
                      <a href='#' class='h6'>
                        10%
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
