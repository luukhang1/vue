<template>

  <div id="editMode" class="model" v-if="ishow" :style="{visibility: ishow ? 'visible' : 'hidden'}">
    <div class="model-content">
      <div style="display: flex; padding: 20px; border-bottom: 1px solid #e4e7e7">
        <div style="width: 97%; text-align: left">Edit Item</div>
        <div class="btnClose" style="right: 0; position: relative" id="closeModel" @click="close"></div>
      </div>
      <div style="margin-top: 10px">
        <input type="text" placeholder="name" :value="datas.name" id="name" class="form-control" />
        <input type="text" placeholder="title" :value="datas.title" id="title" class="form-control">
      </div>
      <div class="model-footer">
        <button @click="saveData" class="btn-default">Save</button>
        <button class="btn-default" @click="close">Close</button>
      </div>
    </div>

  </div>
</template>



<script>

export default {
  'name': 'editmodel',
  props: {
    // eslint-disable-next-line vue/require-prop-type-constructor
    datas: Object | Function,
    ishow: Boolean,
  },
  data() {
    return {
      show: this.ishow,
      dataSave: Object
    }
  },
  methods: {
    saveData(){
      this.dataSave = {
        'id': this.datas.id,
        'name': document.getElementById('name').value,
        'title': document.getElementById('title').value
      }
      this.$emit('save',this.dataSave)
    },
    close() {
      this.show = false
      this.$emit('close',this.show)
    }
  }
}
</script>
<style  scoped>
.model{

  justify-self: center;
  align-self: center;
  margin: auto !important;
  width: 100%;
  height: 100%;
  background-color: rgb(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  padding: 50px;
}
.model-content{
  border-radius: 10px;
  margin: auto;
  width: 500px;
  height: 300px;
 background-color: #ffffff;
}
.btnClose::before{
  content: 'x';
  color: #090808;
  font-weight: 300;
  font-family: Arial, sans-serif;
}
.model-footer{
  margin-top: 60px;
  float: right;
  padding-right: 5%;
  margin-bottom: 10px;
}
.btn-default{
  border: 1px solid black;
  width: 100px;
  height: 30px;
  border-radius: 3px;
  background-color: #42b983;
  margin-left: 10px;

}
.form-control{
  width: 80%;
  height: 30px;
  border-radius: 5px;
  margin-bottom: 20px;
}
</style>