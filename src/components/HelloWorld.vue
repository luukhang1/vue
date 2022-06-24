
<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <div style="padding-bottom: 40px" class="container">
      <table  class="table-center">
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Title</td>
          <td>Action</td>
        </tr>
        <tr v-for="ngoc in ngocs">
          <td>{{ngoc.id}}</td>
          <td>{{ngoc.name}}</td>
          <td>{{ngoc.title}}</td>
          <td  style="width: 30%">
            <button class="btn-default" @click="addItem">Add</button>
            <button  class="btn-default" @click="removeItem(ngoc.id)">Delete</button>
            <button  class="btn-default" @click="openEditModel(ngoc)">Edit</button>
            <button  class="btn-default" @click="getPrice">CheckPrice</button>
          </td>
        </tr>
      </table>
    </div>
    <editmodel
        :ishow="ishow"
        :datas="datas"
        @close="close"
        @save="saveData"
    />
<!--    <div v-if="isLoader">-->
<!--      <Loader/>-->
<!--    </div>-->
    <div>
      <div v-if="dataCheckprice.message ==='success'"  style="display: -webkit-box; background-color: #fff; border-radius: 3px; border-bottom: 1px solid #9d9b9b; margin-left: 40%; margin-right: 40%">
        <div v-if="isLoader" style="display: -webkit-box">
          <img :src='dataCheckprice.image' style="margin-top: 16%;"/>
          <Loader/>
        </div>
        <div v-else style="display: -webkit-box;" >
          <input type="radio">
          <img :src='dataCheckprice.image' />
          <p>{{dataCheckprice.description}}</p>
          <p style="font-size: 1.2rem;
          font-weight: 900;
          color: #0090DA;
          cursor: pointer;"
          >{{dataCheckprice.totalPrice}}</p>
        </div>
        </div>

    </div>
    <div v-if="!isShowSender" style="background-color: #fff; position: absolute; top: 320px; width: 500px;margin-left: 10px;height: 30px;border-radius: 3px;" @click.prevent="getList">
      <p >{{senderDefault.name}}-{{senderDefault.ward}}</p>
    </div>
    <div v-else style="margin-bottom: 10px; position: absolute; top: 320px;">
      <Sender
          :list-sender="listSender"
          :is-show-sender="isShowSender"
          @updateShowSender="updateShowSender"
      />
    </div>
  </div>
</template>

<script>
import Editmodel from "@/components/editModel.vue";
import Loader from "@/components/loader/Loader.vue";
import GetPrice from "@/components/Api/GetPrice.js";
import Sender from "@/components/Sender";
export default {
  name: 'HelloWorld',
  components: {Sender, Loader, Editmodel},
  props: {
    msg: String
  },

  data(){
    return {
      isLoader: false,
      ishow: false,
      datas: Object,
      dataCheckprice: Array,
      isShowSender : false,
      senderDefault :  {
        'id' : 34,
        'name': 'Ha Noi',
        'ward': 'phung khoang'
      },
      listSender: [
        {
          'id' : 34,
          'name': 'Ha Noi',
          'ward': 'Ho Hoan Kiem'
        },
        {
          'id' : 34,
          'name': 'Ha Noi',
          'ward': 'Nam Tu Liem'
        },
        {
          'id' : 34,
          'name': 'Ha Noi',
          'ward': 'Bac Tu Liem'
        },
        {
          'id' : 34,
          'name': 'Ha Noi',
          'ward': 'phung khoang'
        },
        {
          'id' : 34,
          'name': 'Ha Noi',
          'ward': 'Ha Dong'
        },
      ],
      ngocs: [
        {
          'id' : 1,
          'name': 'cien',
          'title': 'ngoc'
        },
        {
          'id' : 2,
          'name': 'ngoc',
          'title': 'haha'
        }
      ]
    }
  },
  methods: {
    updateShowSender(value,sender){
      this.isShowSender=value
      this.senderDefault = sender
      this.$forceUpdate()
    },
    getList() {
      this.isShowSender = true
    },
     async getPrice() {
       this.isLoader= true
       // setTimeout(()=>{
       //
       // },1000)
       let dataCheckPrice = await  GetPrice.getPrice().then(
           (res) => {
             return res.data
           }
       ).catch((err) =>{
         return err
       })
       setTimeout(() =>{
         this.isLoader= false
       },1500)

       this.dataCheckprice = dataCheckPrice


       console.log(dataCheckPrice,"sssssss")
    },
    saveData(data) {
      const index = this.ngocs.findIndex(function (e){
        return e.id == data.id
      })
      if (index != -1) {
        this.ngocs[index].name = data.name
        this.ngocs[index].title = data.title
        this.ishow = false
        this.$forceUpdate()
      }

    },
    close(value){
      this.ishow =value
      this.$forceUpdate()
    },
    openEditModel(ngoc) {
      setTimeout(()=>{
        this.datas= ngoc
        this.ishow = true
      },300)

    },
    addItem(){
      this.isLoader= true
      setTimeout(()=>{
        this.ngocs.push({
          'id' : 3,
          'name': 'long',
          'title': 'kaka'
        })
        this.isLoader= false
      },1000)

    },
    removeItem(id){
      // eslint-disable-next-line no-unused-vars
      const index = this.ngocs.filter(function (e){
       return e.id == id
      })
      if (index.length >0 ) {
        return this.ngocs.splice(index, 1);
      }
      // eslint-disable-next-line no-console
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  margin-bottom: 0px;
  margin-top: 0px;
  margin-left: 30px;
  margin-right: 30px;
}
.btn-default{
  border: 1px solid black;
  width: 100px;
  height: 30px;
  border-radius: 3px;
  background-color: #42b983;
  margin-left: 10px;
}
.container{
  align-self: center;
  justify-content: center;
  width: 96%;
  background-color: #ccced0;
  margin: auto;
  border-radius: 20px;
  transition-timing-function: ease-out;
  transition-duration: 3s;
}
.table-center {
  box-shadow: 0 5px 15px rgb(0 0 0 / 50%);
  border-collapse: collapse;
  align-self: center;
  justify-content: center;
  width: 96%;
  background-color: #ffffff;
  margin: auto;
  border-radius: 3px;
}
.table-center >tr {
  box-sizing: border-box;
  border-spacing: 2px;
  border-collapse: collapse;
  min-width: 100px;
  border-bottom-width: thin;
  border-bottom: 1px solid #e4e7e7;
  padding: 0;
}
.table > tr::before{
  width: 30px;
  background-color: #42b983;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
