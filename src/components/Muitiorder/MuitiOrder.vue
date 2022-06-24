<template>
  <div class="muiti">

    <div class="muiti-content">
      <div style="padding: 30px">
        <div style="text-align: left; float: left"> Tạo vận đơn hàng loạt qua cổng vận chuyển KShip</div>
        <div style="float: right; cursor: pointer; color: #9d9b9b;font-family: monospace;text-shadow: 0 0 black;" @click.prevent="closeModel">x</div>
      </div>
      <div class="title">
        <div class="left">
          <div style="display: -webkit-box;" >
            <div >
              <div style="display: -webkit-box; " >
                <p style="margin-right: 20px">Hãng vận chuyển</p>
                <div style="position: relative ; " v-clickoutside="closeListClent">
                  <div style="width: 200px; margin-right: 20px; height: 20px; border-bottom: 1px solid #9d9b9b;" @click="showClient">
                    <div >
                        <p style="font-size: 13px;">{{ clientDefaut }}</p>
                        <div class="icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                          </svg>
                        </div>
                    </div>
                  </div>
                  <div v-if="isShowClient"
                       style="position: absolute;
                       width: 200px;
                       background-color: #ffffff;
                       z-index: 1000;
                       box-shadow: 1px 3px 1px 1px rgb(0,0,0,0.5);
                       border-radius: 3px;"

                  >
                      <ul class="reset" >
                      <li v-for="client in clientList" @click="changeClient(client)">
                        {{client}}
                      </li>
                    </ul>
                  </div>
                </div>

              </div>

             <div >

             </div>
            </div>
            <div style="display: -webkit-box">
              <p style="margin-right: 20px">Dich vu</p>
              <div style="position: relative"  v-clickoutside="closeListService">
                  <div  style="border-bottom: 1px solid #9d9b9b; width: 200px; margin-right: 20px; height: 20px" @click="showService">
                    <p  style="font-size: 13px;">{{serviceDefault}}</p>
                    <div class="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                      </svg>
                    </div>
                  </div>
                <div v-if="isShowService"
                     style="position: absolute;
                       width: 200px;
                       background-color: #ffffff;
                       z-index: 1000;
                       box-shadow: 1px 3px 1px 1px rgb(0,0,0,0.5);
                       border-radius: 3px;"

                >
                  <ul class="reset">
                    <li v-for="service in listServiceDefault" @click="changeService(service)">
                      {{service}}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <input type="checkbox" style="float: left; margin-right: 10px" >
              <p  style="float: right; font-size: 13px; margin-top: 2px">Thu hộ tiền</p>
            </div>
          </div>
          <div class="extra-class" style="margin-top: 10px">
            <div
              style="display: flex;
                     flex-wrap: wrap;
                     background-color: #ffffff;
                     border-radius: 3px " >
              <div  v-for="extraService in listExtraSerVice" style="width: 25%; height: 25px; align-items: center">
                <input :type='extraService.type' style="float: left" name="radio" :checked="extraService.name =='Nguoi Nhan Tra Phi'" />
                <p style="font-size: 13px;margin-top: 2px;">{{extraService.name}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="sender">
            <div  class="sender-default" >
              <div class="senderdefault" @click="showList" v-clickoutside="closeListSender">
                <p  style="font-size: 13px;">Dia chi lay hang</p>
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                  </svg>
                </div>
              </div>
              <div class="list-sender" v-if="isShowList">
                <ul class="reset">
                  <li v-for="Sender in listSender" @click="clickSender(Sender)">
                    {{Sender.id}}-{{Sender.name}}-{{Sender.ward}}
                  </li>
                </ul>
              </div>
              <div v-else>
                <p style=" font-size: 13px;"> {{senderDefault.id}}-{{senderDefault.name}}-{{senderDefault.ward}}</p>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div class="main">
       <div class="title-table">
        <table style="width: 100%">
          <thead>
          <th>Ma Hoa Don</th>
          <th>Người nhận</th>
          <th>SĐT</th>
          <th> Địa chỉ</th>
          <th>Tiền thu hộ</th>
          <th> Giá trị hàng</th>
          <th>Thông tin hàng</th>
          <th>Ghi chú</th>
          <th>Tổng phí</th>
          <th></th>
          </thead>
        </table>
       </div>
        <div >
          <table style="width: 100%">
          <tbody>
          <tr v-for="data in dataInit">
          <td>{{data.MHD}}</td>
            <td>{{data.people}}</td>
            <td>{{data.SĐT}}</td>
            <td ref="key">{{data.address}}</td>
            <td>{{data.fee}}</td>
            <td>{{data.money}}</td>
            <td>{{data.codfee}}</td>
            <td>{{data.GHICHU}}</td>
            <td style="color: #337ab7;">{{ price }}</td>
            <td><div @click="editRow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg></div></td>
          </tr>
          </tbody>
          </table>
        </div>

      </div>

      <div v-if="isShowLoader">
        <loader1/>
      </div>

      <div class="muiti-footer">
        <button class="btn btn-primary"><b-icon-layout-sidebar-inset /> Tao Don</button>
        <button class="btn btn-success" @click.prevent="getPrice"><b-icon-eraser/> Xem Truoc Phi</button>

      </div>
    </div>

  </div>
</template>
<script>
import GetPrice from "@/components/Api/GetPrice.js";
import loader1 from "@/components/loader/loader";
  export default {
    name : 'muitiOrder',
    components: {loader1},
    data(){
      return{
        isShowLoader: false,
        price: '' ,
        isShowService: false,
        isShowClient : false,
        clientDefaut: 'Chon Hang Van Chuyen',
        serviceDefault: 'Chon dich vu',
        listExtraSerVice: [
          {
            'name': 'Khai Gia',
            'type': 'CheckBox',
          },
          {
            'name': 'Gui Tai Buu Cuc',
            'type': 'CheckBox',
          },
          {
            'name': 'Nguoi Nhan Tra Phi',
            'type': 'radio',
          },
          {
            'name': 'Doi Soat Sieu Toc',
            'type': 'CheckBox',
          },
          {
            'name': 'Nguoi Gui Tra Phi',
            'type': 'radio',
          }
        ],
        listServiceDefault: ['Chon dich vu', 'Tieu chuan','Trong ngay'],
        clientList :['Chon Hang Van Chuyen','GHN','GHTK','AHAMOVE','GHNFW'],
         dataInit :[
          {
            'MHD':'Hd122323',
            "people":'Ngoc',
            "SĐT":'0912345678',
            "address":'Ha noi , ha Dong',
            "money":20000,
            "fee": 120000,
            "codfee": "dang de vo",
            "GHICHU":'nhan hang giao tien',
            "totalFee":12323232131
          },
          {
            "MHD":'Hd122323',
            "people":'Ngoc',
            "SĐT":'0912345678',
            "address":'Ha noi , ha Dong',
            "money":20000,
            "fee": 120000,
            "codfee": "dang de vo",
            "GHICHU":'nhan hang giao tien',
            "totalFee":12323232131
          },
          {
            "MHD":'Hd122323',
            "people":'Ngoc',
            "SĐT":'0912345678',
            "address":'Ha noi , ha Dong',
            "money":20000,
            "fee": 120000,
            "codfee": "dang de vo",
            "GHICHU":'nhan hang giao tien',
            "totalFee":12323232131
          },
          {
            "MHD":'Hd122323',
            "people":'Ngoc',
            "SĐT":'0912345678',
            "address":'Ha noi , ha Dong',
            "money":20000,
            "fee": 120000,
            "codfee": "dang de vo",
            "GHICHU":'nhan hang giao tien',
            "totalFee":12323232131
          },
          {
            "MHD":'Hd122323',
            "people":'Ngoc',
            "SĐT":'0912345678',
            "address":'Ha noi , ha Dong',
            "money":20000,
            "fee": 120000,
            "codfee": "dang de vo",
            "GHICHU":'nhan hang giao tien',
            "totalFee":12323232131
          },
          {
            "MHD":'Hd122323',
            "people":'Ngoc',
            "SĐT":'0912345678',
            "address":'Ha noi , ha Dong',
            "money":20000,
            "fee": 120000,
            "codfee": "dang de vo",
            "GHICHU":'nhan hang giao tien',
            "totalFee":12323232131
          },
        ],
        isShowList : false,
        senderDefault: {
          'id' : 34,
          'name': 'Ha Noi',
          'ward': 'Ho Hoan Kiem'
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
      }
    },
    methods:{
      editRow(){
        let input = document.createElement("input")
        let td = document.createElement('td')
        console.log(this.$refs.key[0].appendChild(input))
      },
      closeListSender(){
        this.isShowList = false
      },
      async getPrice(){
          this.isShowLoader = true
          await GetPrice.getPrice().then((res) => {
            this.price = res.data.totalPrice
          }).catch((err) => {
            this.price =err.response.data.message
          })
          this.isShowLoader = false
      },
      changeService(value){
        this.isShowService = false
        this.serviceDefault = value
      },
      changeClient(value){
        this.isShowClient = false
        this.clientDefaut = value
      },
      showClient(){
        this.isShowClient = !this.isShowClient
      },
      showService(){
        this.isShowService = true
      },
      closeModel(){
        this.$emit('closeModel',false)
      },
      clickSender(value){
        this.senderDefault= value
        this.isShowList = false
      },
      showList(){
        this.isShowList = true
      },
      closeListClent(){
        this.isShowClient= false
      },
      closeListService(){
        this.isShowService = false
      }
    },
    // directives:{
    //   'click-out-side':ClickOutSize.CLICK_OUTSIDE
    // }

  }
</script>
<style scoped>
@import '../../assets/style.css';
.muiti-footer{
  text-align: right;
  padding-right: 20px;
  position: absolute;
  bottom: 2px;
  right: 0;

}
.senderdefault{
  height: 30px;
}
.title-table{
  padding: 0.3rem 0 0.2rem;
  background: #dcf4fc;
  border: 1px solid #99d6f5;
}
table >thead>th,td{
  width: 4%;
  border: none;
  padding: 5px;
  font-weight: bold;
  vertical-align: middle;
  font-size: 13px;

}
table {
  border-collapse: collapse;
}
table >tbody>tr{
border-bottom: 1px solid black;

}
.muiti{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0,0.5);
}
.muiti-content{
  position: relative;
  border-radius: 6px;
  width: 80%;
  height: 80%;
  background-color: #e4e7e7;
  align-self: center;
  margin: auto;
  margin-top: 5%;
  animation-name: openmodel;
  animation-duration: 1s;
}
.title{
  padding: 14px;
  height: 150px;
  display: -webkit-box;
}
.left{
  width: 60%;
  height: 100%;
}
.right{
  margin-left: 20px;
  width: 38%;
  height: 100%;
  border-left: 1px dashed rgba(0,0,0,.25);

}
p{
  margin: 0;
  text-align: left;
  float: left;
}
.icon{
  float: right;
}
.list-sender{

  background-color: #ffffff;
  position: relative;
  z-index: 10000;
  box-shadow: 3px 3px 3px 3px rgb(0 0 0 / 50%);
  border-radius: 4px;
}
.sender-default{
  position: relative;
}
ul>li{
  text-align: left;
  cursor: pointer;
  height: 30px;
  vertical-align: middle;
  font-size: 13px;
}
ul>li:hover{
  background-color: #9d9b9b;
}
@keyframes openmodel {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
</style>