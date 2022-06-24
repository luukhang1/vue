<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <button @click.prevent="showMuiti">Muitiple order</button>
      <div v-if="ishow">
        <MuitiOrder
            @closeModel="closeModel"

        />
      </div>

    </div>
  </div>

</template>
<script>
  import MuitiOrder from "@/components/Muitiorder/MuitiOrder";
  export default {
    name: 'About',
    components: {MuitiOrder},
    data(){
      return {
        ishow : false
      }
    },
    methods: {
      showMuiti() {
        this.ishow = true
      },
      closeModel(value){
        this.ishow= value
      }
    }

  }
</script>
