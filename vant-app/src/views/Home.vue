<template>
    <div class="home">
        <van-nav-bar title="TodoList"
            right-text="添加"
            @click-right="onClickRight" />

        <van-list>
            <van-cell v-for="(item, index) in list">
                <van-swipe-cell :key="index">

                    <van-cell :border="false"
                        :title="item.title"
                        :value="item.isComplete ? '已完成': '未完成'" />
                    <template #right>
                        <van-button square
                            type="danger"
                            @click="handleRemove(index)"
                            text="删除" />
                        <van-button square
                            type="primary"
                            @click="handleComplete(index, item)"
                            :text="item.isComplete ? '未完成': '完成'" />
                    </template>
                </van-swipe-cell>
            </van-cell>
        </van-list>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",

  data() {
    return {};
  },
  components: {
    HelloWorld
  },

  computed: {
    list() {
      return this.$store.getters.getList;
    }
  },
  methods: {
    handleClick() {
      this.$toast("提示文案");
    },

    onClickRight() {
      this.$router.push({ name: "Add" });
    },

    handleComplete(index, item) {
      item.isComplete = !item.isComplete;
      console.log(item);
      this.$store.dispatch("updateItem", { index, item });
      // this.$toast("已修改");
    },

    handleRemove(index) {
      this.$store.dispatch("removeItem", index);
      this.$toast("已移除");
    }
  },

  created() {}
};
</script>
