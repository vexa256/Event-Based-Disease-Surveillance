// router.js
import { createRouter, createWebHashHistory } from "vue-router";

import MgtProvinces from "./components/sys/Structures/MgtProvinces.vue";
import MgtDistricts from "./components/sys/Structures/MgtDistricts.vue";
import MgtConstituencies from "./components/sys/Structures/MgtConstituencies.vue";
import MgtWards from "./components/sys/Structures/MgtWards.vue";
import MgtVillages from "./components/sys/Structures/MgtVillages.vue";
import MgtChvGroups from "./components/sys/Structures/MgtChvGroups.vue";
import MgtHealthFacilities from "./components/sys/Facilities/MgtHealthFacilities.vue";
import MgtVetFacilities from "./components/sys/Facilities/MgtVetFacilities.vue";
import MgtEnvFacilities from "./components/sys/Facilities/MgtEnvFacilities.vue";
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
  //   { path: "/page2", component: Page2 },
  // add more routes...
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
