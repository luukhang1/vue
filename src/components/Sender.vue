<template>
    <div class="sender">
          <ul  class="reset" >
            <li v-for="value in listSender" class="list" @click="chooseSender(value)">
              {{value.name}} - {{value.ward}}
            </li>
          </ul>
    </div>
</template>
<script>
export default {
  'name' : 'Sender',
  props: {
    // eslint-disable-next-line vue/require-prop-type-constructor
    listSender : Array | Function,
    isShowSender: Boolean
  },
  data() {
    return {
      senderDefaul : Object,
    }
  },
  methods: {
    chooseSender(value){
      console.log(value)
      this.$emit('updateShowSender',false,value)
    }
  }

}
</script>
<style scoped>
.reset{
  width: 500px;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  text-decoration: none;
  font-size: 100%;
  list-style: none;
  border-radius: 3px;
}

.sender{
  width: 500px;
  border-radius: 3px;
  background-color: #fff;
  margin-left: 10px;
  margin-bottom: 10px;
  z-index: 10000;
  box-shadow: 3px 3px 3px 3px rgb(0 0 0 / 50%);
}
.list{
  line-height: 40px;
  min-height: 0;
  border: none;
  color: #111;
  white-space: inherit!important;
  cursor: pointer;
}
.list:hover{
  background-color: #ccced0;
}
</style>