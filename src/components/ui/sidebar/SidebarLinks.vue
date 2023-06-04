<template>
  <div>
    <MenuBlock
      v-for="(block, index) in menuBlocks"
      :key="index"
      :title="block.title"
      :iconClass="block.iconClass"
      :submenuClass="block.submenuClass"
      :menuItems="block.menuItems"
    />
  </div>
</template>

<script>
import MenuBlock from "./MenuBlock.vue";

export default {
  name: "Sidebar",
  components: {
    MenuBlock,
  },
  data() {
    return {
      menuBlocks: [
        {
          title: "Country Structures",
          iconClass: "fas fa-flag-checkered fa-3x",
          submenuClass: "ADMNISTRATIVEUNITS",
          menuItems: [
            {
              label: "Provinces",
              className: "mt-2 mb-2",
              link: "/MgtProvinces",
            },
            {
              label: "Districts",
              className: "mt-2 mb-2",
              link: "/MgtDistricts",
            },
            {
              label: "Constituencies",
              className: "mt-2 mb-2",
              link: "/MgtConstituencies",
            },
            { label: "Wards", className: "mt-2 mb-2", link: "/MgtWards" },
            { label: "Villages", className: "mt-2 mb-2", link: "/MgtVillages" },
            {
              label: "CHV Groups",
              className: "mt-2 mb-2",
              link: "/MgtChvGroups",
            },
          ],
        },
        {
          title: "Country Facilities",
          iconClass: "fas fa-hospital fa-3x",
          submenuClass: "ADMNISTRATIVEUNITS",
          menuItems: [
            {
              label: "Health Facilities",
              className: "mt-2 mb-2",
              link: "/MgtHealthFacilities",
            },
            {
              label: "VET Facilities",
              className: "mt-2 mb-2",
              link: "/MgtVetFacilities",
            },
            {
              label: "Environmental Facilities",
              className: "mt-2 mb-2",
              link: "/MgtEnvFacilities",
            },
          ],
        },

        {
          title: "EBS  Structures",
          iconClass: "fas fa-project-diagram fa-3x",
          submenuClass: "ADMNISTRATIVEUNITS",
          menuItems: [
            {
              label: "CEBS Structure",
              className: "mt-2 mb-2",
              link: "/StructureCebs",
            },
            {
              label: "HFEBS",
              className: "mt-2 mb-2",
              link: "/MgtDistricts",
            },
            {
              label: "VEBS",
              className: "mt-2 mb-2",
              link: "/MgtConstituencies",
            },
            {
              label: "MEBS",
              className: "mt-2 mb-2",
              link: "/MgtConstituencies",
            },
            {
              label: "Hot Line EBS",
              className: "mt-2 mb-2",
              link: "/MgtConstituencies",
            },
            {
              label: "Environment EBS",
              className: "mt-2 mb-2",
              link: "/MgtConstituencies",
            },
          ],
        },
        {
          title: "Set EBS  Signals",
          iconClass: "fas fa-signal fa-3x",
          submenuClass: "ADMNISTRATIVEUNITS",
          menuItems: [
            {
              label: "CEBS",
              className: "mt-2 mb-2",
              link: "/MgtProvinces",
            },
            {
              label: "HFEBS",
              className: "mt-2 mb-2",
              link: "/MgtDistricts",
            },
            {
              label: "VEBS",
              className: "mt-2 mb-2",
              link: "/MgtConstituencies",
            },
            {
              label: "MEBS",
              className: "mt-2 mb-2",
              link: "/MgtConstituencies",
            },
            {
              label: "Hot Line EBS",
              className: "mt-2 mb-2",
              link: "/MgtConstituencies",
            },
            {
              label: "Environment EBS",
              className: "mt-2 mb-2",
              link: "/MgtConstituencies",
            },
          ],
        },
        {
          title: "EBS Operations",
          iconClass: "fas fa-cogs fa-3x",
          submenuClass: "ADMNISTRATIVEUNITS",
          menuItems: [
            {
              label: "CEBS",
              className: "mt-2 mb-2",
              link: "/MgtProvinces",
            },
            {
              label: "HFEBS",
              className: "mt-2 mb-2",
              link: "/MgtDistricts",
            },
            {
              label: "VEBS",
              className: "mt-2 mb-2",
              link: "/MgtConstituencies",
            },
            {
              label: "MEBS",
              className: "mt-2 mb-2",
              link: "/MgtConstituencies",
            },
            {
              label: "Hot Line EBS",
              className: "mt-2 mb-2",
              link: "/MgtConstituencies",
            },
            {
              label: "Environment EBS",
              className: "mt-2 mb-2",
              link: "/MgtConstituencies",
            },
          ],
        },
        {
          title: "EBS Reports",
          iconClass: "fas fa-chart-line fa-3x",
          submenuClass: "ADMNISTRATIVEUNITS",
          menuItems: [
            {
              label: "CEBS",
              className: "mt-2 mb-2",
              link: "/MgtProvinces",
            },
            {
              label: "HFEBS",
              className: "mt-2 mb-2",
              link: "/MgtDistricts",
            },
            {
              label: "VEBS",
              className: "mt-2 mb-2",
              link: "/MgtConstituencies",
            },
            {
              label: "MEBS",
              className: "mt-2 mb-2",
              link: "/MgtConstituencies",
            },
            {
              label: "Hot Line EBS",
              className: "mt-2 mb-2",
              link: "/MgtConstituencies",
            },
            {
              label: "Environment EBS",
              className: "mt-2 mb-2",
              link: "/MgtConstituencies",
            },
          ],
        },
        {
          title: "Settings",
          iconClass: "fas fa-user-cog fa-3x",
          submenuClass: "ADMNISTRATIVEUNITS",
          menuItems: [

            {
              label: "User Accounts",
              className: "mt-2 mb-2",
              link: "/MgtDistricts",
            },
            {
              label: "Admins Accounts",
              className: "mt-2 mb-2",
              link: "/MgtDistricts",
            },
            {
              label: "Update Account",
              className: "mt-2 mb-2",
              link: "/MgtProvinces",
            },
            {
              label: "Logout",
              className: "mt-2 mb-2",
              link: "/MgtDistricts",
            },
            {
              label: "Training Mode",
              className: "mt-2 mb-2",
              link: "/MgtConstituencies",
            },
          ],
        },

        // other blocks...
      ],
    };
  },
};
</script>
