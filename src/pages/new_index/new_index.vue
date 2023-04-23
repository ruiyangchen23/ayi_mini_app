<template>
    <view>

  <v-card>
    <v-card-title>'gula'</v-card-title>
    <v-card-subtitle>'gula'</v-card-subtitle>
    <v-card-text>
      <div>Email: "gula"</div>
      <div>Phone: 'gula'</div>
      <div>Address: 'gula'</div>
    </v-card-text>
  </v-card>
</view>

<custom-tab-bar ref="tabbar"></custom-tab-bar>
</template>

<script lang="ts">
import CustomTabBar from "../../components/custom-tab-bar/index.vue";
import  {
  VApp,
  VTabs,
  VTab
} from 'vuetify/components'


export default {
  name: "My",
  components: {
    "custom-tab-bar": CustomTabBar,
  },
  

  setup() {
    
  }

}

</script>
