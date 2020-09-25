import React from "react"

const NavBar = props => (
    <nav class="pcoded-navbar">
        <div class="navbar-wrapper">
            <div class="navbar-brand header-logo">
                <a href="index.html" class="b-brand">
                    <div class="b-bg">
                        <i class="feather icon-trending-up"></i>
                    </div>
                    <span class="b-title">Datta Able</span>
                </a>
                <a class="mobile-menu" id="mobile-collapse" href="javascript:"><span></span></a>
            </div>
            <div class="slimScrollDiv" style={{position: "relative", overflow: "hidden", width: "100%", height: "calc(100vh - 70px)"}}>
                <div class="navbar-content scroll-div" style={{overflow: "hidden", width: "100%", height: "calc(100vh - 70px)"}}>
                    <ul class="nav pcoded-inner-navbar">
                        <li class="nav-item pcoded-menu-caption">
                            <label>Navigation</label>
                        </li>
                        <li data-username="dashboard Default Ecommerce CRM Analytics Crypto Project" class="nav-item active">
                            <a href="index.html" class="nav-link "><span class="pcoded-micon"><i class="feather icon-home"></i></span><span class="pcoded-mtext">Dashboard</span></a>
                        </li>
                        <li class="nav-item pcoded-menu-caption">
                            <label>UI Element</label>
                        </li>
                        <li data-username="basic components Button Alert Badges breadcrumb Paggination progress Tooltip popovers Carousel Cards Collapse Tabs pills Modal Grid System Typography Extra Shadows Embeds" class="nav-item pcoded-hasmenu">
                            <a href="javascript:" class="nav-link "><span class="pcoded-micon"><i class="feather icon-box"></i></span><span class="pcoded-mtext">Components</span></a>
                            <ul class="pcoded-submenu">
                                <li class=""><a href="bc_button.html" class="">Button</a></li>
                                <li class=""><a href="bc_badges.html" class="">Badges</a></li>
                                <li class=""><a href="bc_breadcrumb-pagination.html" class="">Breadcrumb &amp; paggination</a></li>
                                <li class=""><a href="bc_collapse.html" class="">Collapse</a></li>
                                <li class=""><a href="bc_tabs.html" class="">Tabs &amp; pills</a></li>
                                <li class=""><a href="bc_typography.html" class="">Typography</a></li>


                                <li class=""><a href="icon-feather.html" class="">Feather<span class="pcoded-badge label label-danger">NEW</span></a></li>
                            </ul>
                        </li>
                        <li class="nav-item pcoded-menu-caption">
                            <label>Forms &amp; table</label>
                        </li>
                        <li data-username="form elements advance componant validation masking wizard picker select" class="nav-item">
                            <a href="form_elements.html" class="nav-link "><span class="pcoded-micon"><i class="feather icon-file-text"></i></span><span class="pcoded-mtext">Form elements</span></a>
                        </li>
                        <li data-username="Table bootstrap datatable footable" class="nav-item">
                            <a href="tbl_bootstrap.html" class="nav-link "><span class="pcoded-micon"><i class="feather icon-server"></i></span><span class="pcoded-mtext">Table</span></a>
                        </li>
                        <li class="nav-item pcoded-menu-caption">
                            <label>Chart &amp; Maps</label>
                        </li>
                        <li data-username="Charts Morris" class="nav-item"><a href="chart-morris.html" class="nav-link "><span class="pcoded-micon"><i class="feather icon-pie-chart"></i></span><span class="pcoded-mtext">Chart</span></a></li>
                        <li data-username="Maps Google" class="nav-item"><a href="map-google.html" class="nav-link "><span class="pcoded-micon"><i class="feather icon-map"></i></span><span class="pcoded-mtext">Maps</span></a></li>
                        <li class="nav-item pcoded-menu-caption">
                            <label>Pages</label>
                        </li>
                        <li data-username="Authentication Sign up Sign in reset password Change password Personal information profile settings map form subscribe" class="nav-item pcoded-hasmenu">
                            <a href="javascript:" class="nav-link "><span class="pcoded-micon"><i class="feather icon-lock"></i></span><span class="pcoded-mtext">Authentication</span></a>
                            <ul class="pcoded-submenu">
                                <li class=""><a href="auth-signup.html" class="" target="_blank">Sign up</a></li>
                                <li class=""><a href="auth-signin.html" class="" target="_blank">Sign in</a></li>
                            </ul>
                        </li>
                        <li data-username="Sample Page" class="nav-item"><a href="sample-page.html" class="nav-link"><span class="pcoded-micon"><i class="feather icon-sidebar"></i></span><span class="pcoded-mtext">Sample page</span></a></li>
                        <li data-username="Disabled Menu" class="nav-item disabled"><a href="javascript:" class="nav-link"><span class="pcoded-micon"><i class="feather icon-power"></i></span><span class="pcoded-mtext">Disabled menu</span></a></li>
                    </ul>
                </div>
            <div class="slimScrollBar" style={{background: "rgba(0, 0, 0, 0.5)", width: "5px", position: "absolute", top: "0px", opacity: "0.4", display: "none", borderRadius: "7px", zIndex: 99, right: "1px", height: "411.503px"}}></div>
            <div class="slimScrollRail" style={{width: "5px", height: "100%", position: "absolute", top: "0px", display: "none", borderRadius: "7px", background: "rgb(51, 51, 51)", opacity: "0.2", zIndex: 90, right: "1px"}}></div>
            </div>
        </div>
    </nav>
)

export default NavBar