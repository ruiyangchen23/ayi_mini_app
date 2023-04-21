<template>
  <v-card>
    <v-card-title>'gula'</v-card-title>
    <v-card-subtitle>'gula'</v-card-subtitle>
    <v-card-text>
      <div>Email: "gula"</div>
      <div>Phone: 'gula'</div>
      <div>Address: 'gula'</div>
    </v-card-text>
  </v-card>

<custom-tab-bar ref="tabbar"></custom-tab-bar>
</template>

<script lang="ts">
import CustomTabBar from "../../components/custom-tab-bar/index.vue";

export default {
  name: "My",
  components: {
    "custom-tab-bar": CustomTabBar,
  },
  

  setup() {
    
  }

}

</script>
