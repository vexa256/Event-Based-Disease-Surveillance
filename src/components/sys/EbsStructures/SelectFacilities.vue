<template>
  <div class="wiz-element col-md-12 my-3 py-3">
    <label id="label" for="" class="required form-label my-1 py-1">Facility Attached To</label>
    <select id="" class="form-select FacilitiesSelect form-control form-select-light" data-placeholder="Select an option"
      name="FacilityID">
      <option value="">Select an option</option>

    </select>
  </div>
</template>
  
<script>
export default {
  data() {
    return {

    };
  },
  mounted() {
    window.ClassBasedFetchSelect(
      "FacilitiesSelect",
      "FetchHealthFacilities",
      "HealthFacilityName",
      "HFID"
    );
  }

};
</script>
  