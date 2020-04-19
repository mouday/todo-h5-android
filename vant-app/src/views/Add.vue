<template>
    <div class="about">
        <van-nav-bar left-text="返回"
            title="TodoList"
            @click-left="onClickLeft" />

        <div class="form">
            <van-form @submit="onSubmit">
                <van-field v-model="title"
                    name="title"
                    placeholder="接下来做什么？" />

                <van-field v-model="isComplete"
                    style="display:none;"
                    name="isComplete"
                    type="hide" />

                <div style="margin: 16px;">
                    <van-button round
                        block
                        type="info"
                        native-type="submit">
                        提交
                    </van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      isComplete: false
    };
  },
  methods: {
    onSubmit(values) {
      // console.log("submit", values);
      if (!this.title) {
        this.$toast("没有添加内容");
        return;
      }
      this.$store.dispatch("addItem", values);
      this.$router.push({ name: "Home" });
      this.$toast("添加成功");
    },

    onClickLeft() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>  

<style lang="scss" scoped>
.form {
  margin-top: 20px;
}
</style>