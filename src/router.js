// router.js
import { createRouter, createWebHashHistory } from "vue-router";
import { nextTick } from 'vue'

import MgtProvinces from "./components/sys/Structures/MgtProvinces.vue";
import MgtDistricts from "./components/sys/Structures/MgtDistricts.vue";
import MgtConstituencies from "./components/sys/Structures/MgtConstituencies.vue";
import MgtWards from "./components/sys/Structures/MgtWards.vue";
import MgtVillages from "./components/sys/Structures/MgtVillages.vue";
import MgtChvGroups from "./components/sys/Structures/MgtChvGroups.vue";
import MgtHealthFacilities from "./components/sys/Facilities/MgtHealthFacilities.vue";
import MgtVetFacilities from "./components/sys/Facilities/MgtVetFacilities.vue";
import MgtEnvFacilities from "./components/sys/Facilities/MgtEnvFacilities.vue";
import StructureCebs from "./components/sys/EbsStructures/StructureCebs.vue";
import Designations from "./components/sys/EbsStructures/Designations.vue";
import StructureFhebs from "./components/sys/EbsStructures/StructureFhebs.vue";
import StructureVebs from "./components/sys/EbsStructures/StructureVebs.vue";
// import Page2 from "./components/Page2.vue";
// import other page components...

const routes = [
  { path: "/MgtProvinces", component: MgtProvinces },
  { path: "/MgtDistricts", component: MgtDistricts },
  { path: "/MgtConstituencies", component: MgtConstituencies },
  { path: "/MgtWards", component: MgtWards },
  { path: "/MgtVillages", component: MgtVillages },
  { path: "/MgtChvGroups", component: MgtChvGroups },
  { path: "/MgtHealthFacilities", component: MgtHealthFacilities },
  { path: "/MgtVetFacilities", component: MgtVetFacilities },
  { path: "/MgtEnvFacilities", component: MgtEnvFacilities },
  { path: "/StructureCebs", component: StructureCebs },
  { path: "/Designations", component: Designations },
  { path: "/StructureFhebs", component: StructureFhebs },
  { path: "/StructureVebs", component: StructureVebs },
  //   { path: "/page2", component: Page2 },
  // add more routes...
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});



router.afterEach((to, from) => {
  if (to.path !== from.path) {
    const lastReloadTime = localStorage.getItem('lastReloadTime');
    const currentTime = Date.now();
    
    if (!lastReloadTime || currentTime - lastReloadTime > 10000) { // 5000 ms = 5 sec
      localStorage.setItem('lastReloadTime', currentTime.toString());
      window.location.reload();
    }
  }
});


export default router;
