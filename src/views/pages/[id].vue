<template>
  <ht-base-page :data="state.pageData" />
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getPageFrameDataXhr } from "@/service/index";

export default defineComponent({
  setup() {
    const { $toast, $loading } = getCurrentInstance()?.proxy;
    const $route = useRoute();
    const state = reactive({
      pageId: $route.params?.id,
      pageData: {},
    });

    /**
     * 加载页面初始数据
     */
    const onLoadPageData = async () => {
      if (!state.pageId) {
        $toast.error("当前页面id无效，请检查页面链接是否正确！");
        return;
      }
      const loading = $loading();
      try {
        const res = await getPageFrameDataXhr({ id: state.pageId });
        state.pageData = res.data;
      } catch (e) {}
      loading.close();
    };

    onMounted(() => {
      onLoadPageData();
    });

    return { state, onLoadPageData };
  },
});
</script>
