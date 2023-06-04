<template>
  <div class="app-header sticky-top" id="kt_app_header">
    <!--begin::Header container-->
    <div
      class="app-container container-fluid d-flex align-items-stretch justify-content-between"
      id="kt_app_header_container"
    >
      <!--begin::Sidebar mobile toggle-->
      <div
        class="d-flex align-items-center d-lg-none ms-n3 me-1 me-md-2"
        title="Show sidebar menu"
      >
        <div
          class="btn btn-icon btn-active-color-primary w-35px h-35px"
          id="kt_app_sidebar_mobile_toggle"
        >
          <!--begin::Svg Icon | path: icons/duotune/abstract/abs015.svg-->
          <span class="svg-icon svg-icon-2 svg-icon-md-1">
            <img src="assets/svgs/svg_0.svg" />
          </span>
          <!--end::Svg Icon-->
        </div>
      </div>
      <!--end::Sidebar mobile toggle-->
      <!--begin::Mobile logo-->
      <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
        <a class="d-lg-none" href="../../demo1/dist/index.html">
          <img
            alt="Logo"
            class="h-30px"
            src="assets/media/logos/default-small.svg"
          />
        </a>
      </div>
      <!--end::Mobile logo-->
      <!--begin::Header wrapper-->
      <div
        class="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
        id="kt_app_header_wrapper"
      >
        <!--begin::Menu wrapper-->
        <div
          class="app-header-menu app-header-mobile-drawer align-items-stretch"
          data-kt-drawer="true"
          data-kt-drawer-activate="{default: true, lg: false}"
          data-kt-drawer-direction="end"
          data-kt-drawer-name="app-header-menu"
          data-kt-drawer-overlay="true"
          data-kt-drawer-toggle="#kt_app_header_menu_toggle"
          data-kt-drawer-width="250px"
          data-kt-swapper="true"
          data-kt-swapper-mode="{default: 'append', lg: 'prepend'}"
          data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}"
        >
          <!--begin::Menu-->
          <div
            class="menu menu-rounded menu-column menu-lg-row my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0"
            data-kt-menu="true"
            id="kt_app_header_menu"
          >
            <!--begin:Menu item-->
          </div>
          <!--end::Menu-->
        </div>
        <!--end::Menu wrapper-->
        <!--begin::Navbar-->
        <div class="app-navbar flex-shrink-0">
          <!--begin::Search-->

          <!--end::Search-->

          <!--end::My apps links-->
          <!--begin::Theme mode-->
          <div class="app-navbar-item ms-1 ms-md-3">
            <!--begin::Menu toggle-->
            <a
              class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-30px h-30px w-md-40px h-md-40px"
              data-kt-menu-attach="parent"
              data-kt-menu-placement="bottom-end"
              data-kt-menu-trigger="{default:'click', lg: 'hover'}"
              href="#"
            >
              <!--begin::Svg Icon | path: icons/duotune/general/gen060.svg-->
              <span class="svg-icon theme-light-show svg-icon-2">
                <img src="assets/svgs/svg_55.svg" />
              </span>
              <!--end::Svg Icon-->
              <!--begin::Svg Icon | path: icons/duotune/general/gen061.svg-->
              <span class="svg-icon theme-dark-show svg-icon-2">
                <img src="assets/svgs/svg_56.svg" />
              </span>
              <!--end::Svg Icon-->
            </a>
            <!--begin::Menu toggle-->
            <!--begin::Menu-->
            <div
              class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-color fw-semibold py-4 fs-base w-150px"
              data-kt-element="theme-mode-menu"
              data-kt-menu="true"
            >
              <!--begin::Menu item-->
              <div class="menu-item px-3 my-0">
                <a
                  class="menu-link px-3 py-2"
                  data-kt-element="mode"
                  data-kt-value="light"
                  href="#"
                >
                  <span class="menu-icon" data-kt-element="icon">
                    <!--begin::Svg Icon | path: icons/duotune/general/gen060.svg-->
                    <span class="svg-icon svg-icon-3">
                      <img src="assets/svgs/svg_57.svg" />
                    </span>
                    <!--end::Svg Icon-->
                  </span>
                  <span class="menu-title">
                    Light
                  </span>
                </a>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-3 my-0">
                <a
                  class="menu-link px-3 py-2"
                  data-kt-element="mode"
                  data-kt-value="dark"
                  href="#"
                >
                  <span class="menu-icon" data-kt-element="icon">
                    <!--begin::Svg Icon | path: icons/duotune/general/gen061.svg-->
                    <span class="svg-icon svg-icon-3">
                      <img src="assets/svgs/svg_58.svg" />
                    </span>
                    <!--end::Svg Icon-->
                  </span>
                  <span class="menu-title">
                    Dark
                  </span>
                </a>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-3 my-0">
                <a
                  class="menu-link px-3 py-2"
                  data-kt-element="mode"
                  data-kt-value="system"
                  href="#"
                >
                  <span class="menu-icon" data-kt-element="icon">
                    <!--begin::Svg Icon | path: icons/duotune/general/gen062.svg-->
                    <span class="svg-icon svg-icon-3">
                      <img src="assets/svgs/svg_59.svg" />
                    </span>
                    <!--end::Svg Icon-->
                  </span>
                  <span class="menu-title">
                    System
                  </span>
                </a>
              </div>
              <!--end::Menu item-->
            </div>
            <!--end::Menu-->
          </div>
          <!--end::Theme mode-->

          <!--begin::Header menu toggle-->

          <!--end::Header menu toggle-->
        </div>
        <!--end::Navbar-->
      </div>
      <!--end::Header wrapper-->
    </div>
    <!--end::Header container-->
  </div>
</template>
