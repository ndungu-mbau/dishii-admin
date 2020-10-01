import React from 'react'

const Wrapper = ({ children }) => (
  <>
    <nav class='navbar navbar-dark navbar-theme-primary px-4 col-12 d-md-none'>
      <a class='navbar-brand mr-lg-5' href='../../index.html'>
        <img
          class='navbar-brand-dark'
          src='../../assets/img/brand/light.svg'
          alt='Volt logo'
        />{' '}
        <img
          class='navbar-brand-light'
          src='../../assets/img/brand/dark.svg'
          alt='Volt logo'
        />
      </a>
      <div class='d-flex align-items-center'>
        <button
          class='navbar-toggler d-md-none collapsed'
          type='button'
          data-toggle='collapse'
          data-target='#sidebarMenu'
          aria-controls='sidebarMenu'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
      </div>
    </nav>
    <div class='container-fluid bg-soft'>
      <div class='row'>
        <div class='col-12'>{children}</div>
      </div>
    </div>
  </>
)

const NavBar = props => {
  return (
    <Wrapper>
      <nav
        id='sidebarMenu'
        class='sidebar d-md-block bg-primary text-white collapse'
        data-simplebar
      >
        <div class='sidebar-inner px-4 pt-3'>
          <div class='user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4'>
            <div class='d-flex align-items-center'>
              <div class='user-avatar lg-avatar mr-4'>
                <img
                  src='../../assets/img/team/profile-picture-3.jpg'
                  class='card-img-top rounded-circle border-white'
                  alt='Bonnie Green'
                />
              </div>
              <div class='d-block'>
                <h2 class='h6'>Hi, Jane</h2>
                <a
                  href='../../pages/examples/sign-in.html'
                  class='btn btn-secondary text-dark btn-xs'
                >
                  <span class='mr-2'>
                    <span class='fas fa-sign-out-alt'></span>
                  </span>
                  Sign Out
                </a>
              </div>
            </div>
            <div class='collapse-close d-md-none'>
              <a
                href='#sidebarMenu'
                class='fas fa-times'
                data-toggle='collapse'
                data-target='#sidebarMenu'
                aria-controls='sidebarMenu'
                aria-expanded='true'
                aria-label='Toggle navigation'
              ></a>
            </div>
          </div>
          <ul class='nav flex-column'>
            {props.routes.map(
              ({ title, icon, link, children = undefined, id = undefined }) => {
                if (children) {
                  return (
                    <li class='nav-item'>
                      <span
                        class='nav-link  collapsed  d-flex justify-content-between align-items-center'
                        data-toggle='collapse'
                        data-target={`#submenu-${id}`}
                      >
                        <span>
                          <span class='sidebar-icon'>
                            <span class={`fas fa-${icon}`}></span>
                          </span>
                          {title}
                        </span>
                        <span class='link-arrow'>
                          <span class='fas fa-chevron-right'></span>
                        </span>
                      </span>
                      <div
                        class='multi-level collapse '
                        role='list'
                        id={`submenu-${id}`}
                        aria-expanded='false'
                      >
                        <ul class='flex-column nav'>
                          {children.map(({ link, title, icon }) => {
                            return (
                              <li class='nav-item '>
                                <a
                                  class='nav-link'
                                  href={link}
                                >
                                  <span class='sidebar-icon'>
                                    <span class={`fas fa-${icon}`}></span>
                                  </span>
                                  <span>{title}</span>
                                </a>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </li>
                  )
                }
                return (
                  <li class='nav-item'>
                    <a href={link} class='nav-link'>
                      <span class='sidebar-icon'>
                        <span class={`fas fa-${icon}`}></span>
                      </span>
                      <span>{title}</span>
                    </a>
                  </li>
                )
              }
            )}
          </ul>
        </div>
      </nav>
    </Wrapper>
  )
}

export default NavBar
