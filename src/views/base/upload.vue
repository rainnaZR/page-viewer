<template>
  <ht-upload v-model:modelValue="files" :data="uploadData" />
  <div v-for="(item, index) in files" :key="index">
    <a :href="`/pages/${item.match(/\d+/g)[0]}`" target="_blank">
      页面{{ index + 1 }}
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  setup() {
    const files = ref([]);
    const uploadData = reactive({
      multiple: true,
      extensions: "json",
      action: "https://production.api.dahuangf.com/api/base/getQiNiuToken",
      imgDomain: "https://image.dahuangf.com",
    });

    return {
      files,
      uploadData,
    };
  },
});
</script>
