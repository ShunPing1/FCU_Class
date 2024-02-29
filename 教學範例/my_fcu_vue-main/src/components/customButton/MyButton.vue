<script>
export default {
  
};
</script>

<template>
  <section id="myBtn">
    <button class="btn" type="button">
      <slot name="placeA" />
    </button>
    <div>
      <slot name="placeB" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
#myBtn {
  .btn {
    @apply border-[black] border-[3px] py-[5px] px-[10px] hover:text-[blue] bg-main-deep;
  }
}
</style>