<template>
  <div class="about">
    <h1>This is an about page</h1>
    <KButton @click="back">回去</KButton>
  </div>
</template>
<script>
export default {
  methods:{
    back(){
      this.$Route.back(-1)
    }
  }
}
</script>