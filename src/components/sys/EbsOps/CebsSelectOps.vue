<template>
  <div>
    <div class="card card-xl-stretch mb-5 mb-xl-8">
      <!--begin::Header-->
      <div class="card-header border-0">
        <h3 class="card-title fw-bold text-dark">CEBS Operations</h3>
      </div>
      <!--end::Header-->
      <!--begin::Body-->
      <div class="card-body pt-0">
        <!--begin::Item-->
        <router-link to="/EbsReportSignals">
          <div
            class="d-flex shadow-lg align-items-center bg-success rounded p-5 mb-7"
          >
            <!--begin::Svg Icon | path: icons/duotune/abstract/abs027.svg-->
            <span class="svg-icon svg-icon-warning svg-icon-1 me-5">
              <i class="fas text-light fw-bolder fa-flag"></i>
            </span>
            <!--end::Svg Icon-->
            <!--begin::Title-->
            <div class="flex-grow-1 me-2">
              <a href="#" class="fw-bold text-light text-hover-primary fs-6"
                >Reporting</a
              >
              <span class="text-light fw-semibold d-block"
                >Report signals from your community</span
              >
            </div>
            <!--end::Title-->

            <span
              class="fw-bold text-warning py-1"
              style="font-size: 17px !important;"
            >
              <i class="fas fa-circle-notch fa-2x text-light fw-bold"></i>
            </span>
          </div>
          <!--end::Item-->
        </router-link>

        <router-link to="#">
          <div
            class="d-flex shadow-lg align-items-center bg-primary rounded p-5 mb-7"
          >
            <!--begin::Svg Icon | path: icons/duotune/abstract/abs027.svg-->
            <span class="svg-icon svg-icon-warning svg-icon-1 me-5">
              <i class="fas text-light fw-bolder fa-chart-pie"></i>
            </span>
            <!--end::Svg Icon-->
            <!--begin::Title-->
            <div class="flex-grow-1 me-2">
              <a href="#" class="fw-bold text-light text-hover-primary fs-6"
                >Your Reports</a
              >
              <span class="text-light fw-semibold d-block"
                >View signals you reported</span
              >
            </div>
            <!--end::Title-->

            <span
              class="fw-bold text-warning py-1"
              style="font-size: 17px !important;"
            >
              <i class="fas fa-circle-notch fa-2x text-light fw-bold"></i>
            </span>
          </div>
        </router-link>

        <router-link to="#">
          <div
            class="d-flex shadow-lg align-items-center bg-light rounded p-5 mb-7"
          >
            <!--begin::Svg Icon | path: icons/duotune/abstract/abs027.svg-->
            <span class="svg-icon svg-icon-warning svg-icon-1 me-5">
              <i class="fas text-dark fw-bolder fa-user-md"></i>
            </span>
            <!--end::Svg Icon-->
            <!--begin::Title-->
            <div class="flex-grow-1 me-2">
              <a href="#" class="fw-bold text-dark text-hover-primary fs-6"
                >Triage</a
              >
              <span class="text-dark fw-semibold d-block"
                >Triage signals assigned to you</span
              >
            </div>
            <!--end::Title-->

            <span
              class="fw-bold text-warning py-1"
              style="font-size: 17px !important;"
            >
              <i class="fas fa-circle-notch fa-2x text-dark fw-bold"></i>
            </span>
          </div>
        </router-link>

        <router-link to="#">
          <div
            class="d-flex shadow-lg align-items-center bg-dark rounded p-5 mb-7"
          >
            <!--begin::Svg Icon | path: icons/duotune/abstract/abs027.svg-->
            <span class="svg-icon svg-icon-warning svg-icon-1 me-5">
              <i class="fas text-light fw-bolder fa-check-circle"></i>
            </span>
            <!--end::Svg Icon-->
            <!--begin::Title-->
            <div class="flex-grow-1 me-2">
              <a href="#" class="fw-bold text-light text-hover-primary fs-6"
                >Verify</a
              >
              <span class="text-light fw-semibold d-block"
                >Verify signals assigned to you</span
              >
            </div>
            <!--end::Title-->

            <span
              class="fw-bold text-warning py-1"
              style="font-size: 17px !important;"
            >
              <i class="fas fa-circle-notch fa-2x text-light fw-bold"></i>
            </span>
          </div>
        </router-link>

        <router-link to="#">
        <div
          class="d-flex shadow-lg align-items-center bg-danger rounded p-5 mb-7"
        >
          <!--begin::Svg Icon | path: icons/duotune/abstract/abs027.svg-->
          <span class="svg-icon svg-icon-warning svg-icon-1 me-5">
            <i class="fas text-light fw-bolder fa-file-alt"></i>
          </span>
          <!--end::Svg Icon-->
          <!--begin::Title-->
          <div class="flex-grow-1 me-2">
            <a href="#" class="fw-bold text-light text-hover-primary fs-6"
              >Response</a
            >
            <span class="text-light fw-semibold d-block">View response </span>
          </div>
          <!--end::Title-->

          <span
            class="fw-bold text-warning py-1"
            style="font-size: 17px !important;"
          >
            <i class="fas fa-circle-notch fa-2x text-light fw-bold"></i>
          </span>
        </div>
        </router-link>
      </div>
      <!--end::Body-->
    </div>
  </div>
</template>

    
<script>
export default {
    data() {
        return {

        };
    },
    mounted() {
        window.SetMyPageTitle("  ");

    }

};
</script>