<template>
  <div>
    <!--begin::Logo-->
    <div class="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
      <!--begin::Logo image-->
      <a href="#">
        <img
          alt="Logo"
          class="h-25px app-sidebar-logo-default"
          src="assets/media/logos/default-dark.svg"
        />
        <img
          alt="Logo"
          class="h-20px app-sidebar-logo-minimize"
          src="assets/media/logos/default-small.svg"
        />
      </a>
      <!--end::Logo image-->
      <!--begin::Sidebar toggle-->
      <div
        class="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary body-bg h-30px w-30px position-absolute top-50 start-100 translate-middle rotate"
        data-kt-toggle="true"
        data-kt-toggle-name="app-sidebar-minimize"
        data-kt-toggle-state="active"
        data-kt-toggle-target="body"
        id="kt_app_sidebar_toggle"
      >
        <!--begin::Svg Icon | path: icons/duotune/arrows/arr079.svg-->
        <span class="svg-icon svg-icon-2 rotate-180">
          <img src="assets/svgs/svg_61.svg" />
        </span>
        <!--end::Svg Icon-->
      </div>
      <!--end::Sidebar toggle-->
    </div>
    <!--end::Logo-->
  </div>
</template>
<script>
export default {
  name: "SidebarLogo",
};
</script>
