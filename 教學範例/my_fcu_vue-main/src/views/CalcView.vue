<script>
import MyButton from '@/components/customButton/MyButton.vue';

export default {
  components: {
    MyButton,
  },
  // 放置所有變數的位置
  data() {
    return {
      numA: 0,
      numB: 0,
      result: 0,
      html: `
        <div>
          我是html文字
        </div>
      `,
    };
  },
  // 放置所有function的位置
  methods: {
    add() {
      // 先判斷numA numB 不為空
      if (this.numA.toString().trim() === '' || this.numB.toString().trim() === '') return;
      this.result = this.numA + this.numB;
    },
  },
}
</script>

<template>
  <!-- v-if -->
  <!-- v-else-if -->
  <!-- v-else -->

  <!-- v-show -->

  <!-- v-for 記得要補:key -->

  <!-- v-html 最常用於所見即所得編輯器 -->

  <!-- v-bind 省略的寫法":" -->
  <!-- v-model => input與變數的連結 -->

  <!-- v-on 省略的寫法"@" 後面連接觸發的事件名稱 -->

  <div class="calc">
    計算機
    <div v-html="html"></div>
    <div>
      <label>
        數字A:
        <!-- v-model -->
        <input v-model="numA" type="number">
      </label>
    </div>
    <div>
      <label>
        數字B:
        <input v-model="numB" type="number">
      </label>
    </div>

    <div class="btns">
      <!-- <button class="btn" type="button" @click="add()">
        +
      </button> -->
      <!-- 如何將資料傳進components -->
      <!-- 如何從components取得資料 -->
      <MyButton @click="add()">
        <template #placeA>+</template>
        <template #placeB>我是另一個開孔</template>
      </MyButton>
      <MyButton @click="add()">-</MyButton>
      <MyButton @click="add()">*</MyButton>
      <MyButton @click="add()">/</MyButton>
    </div>
    <div class="output text-main-deep">
      輸出結果: {{ result }}
    </div>
  </div>
  <div class="box">

  </div>
  <div class="text-red-800">
    預設顏色
  </div>
</template>

<!-- scoped: 目的是為了不要影響到其他區塊的style -->
<style lang="scss" scoped>
  .btns {
    @apply flex gap-[30px];
  }
  .box {
    @apply w-[300px] h-[300px] bg-[wheat] sm:w-[100px] sm:h-[100px] tablet:w-[200px];
  }
</style>
