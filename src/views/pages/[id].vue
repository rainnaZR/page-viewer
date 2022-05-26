<template>
  <ht-base-page :data="state.pageData" />
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getPageFrameDataXhr } from "~/service/index";
import HtBasePage from "@/HtBasePage/index.vue";

export default defineComponent({
  components: {
    HtBasePage,
  },

  setup() {
    const { $toast, $loading } = getCurrentInstance()?.proxy;
    const $route = useRoute();
    const $router = useRouter();
    const state = reactive({
      pageId: $route.params?.id,
      pageData: {},
    });

    /**
     * 页面初始数据的回调处理
     */
    const cbLoadPageData = (data: any) => {
      data?.moduleList?.map((module: any) => {
        module.data = module.moduleProps;
      });
      return data;
    };

    /**
     * 加载页面初始数据
     */
    const onLoadPageData = async () => {
      const loading = $loading();
      try {
        const res = await getPageFrameDataXhr({ id: state.pageId });
        state.pageData = cbLoadPageData(res.data);
      } catch (e) {}
      loading.close();
    };

    /**
     * 初始化页面
     */
    const onInitPage = () => {
      if (!state.pageId) {
        $toast.error("当前页面id无效，请检查页面链接是否正确！");
        return;
      }
      onLoadPageData();
    };

    onMounted(() => {
      onInitPage();
    });

    return { state, onLoadPageData, onInitPage };
  },
});
</script>
