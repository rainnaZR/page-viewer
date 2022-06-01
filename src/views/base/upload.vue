<template>
  <div class="m-box">
    <h2 class="f-mb20 f-fw1 f-fs20">页面上传</h2>
    <ht-upload
      v-model:modelValue="files"
      :data="{
        multiple: true,
        extensions: 'json',
        action: 'https://production.api.dahuangf.com/api/base/getQiNiuToken',
        imgDomain: 'https://image.dahuangf.com',
      }"
    />

    <div v-for="(item, index) in files" :key="index">
      <a :href="item" target="_blank">{{ item }}</a>
      <a
        :href="`/pages/${item.match(/\d+/g)[0]}`"
        target="_blank"
        class="f-ml20"
        >预览页面</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const files = ref([]);

    return {
      files,
    };
  },
});
</script>

<style lang="less" scoped>
.m-box {
  width: 800px;
  margin: 20px auto;
}
</style>
