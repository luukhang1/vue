import axios from "axios";
axios.create({
    baseURL: 'http://api.kiotviet-shipping.local/',
    withCredentials: true,
    timeout: 5000,
})
 export default {
    data: {
        "ACTIVE_KSHIP": true,
        "SENDER_LOCATION_ID": "243",
        "SENDER_WARD_ID": "16",
        "SENDER_ADDRESS": "",
        "RECEIVER_LOCATION_ID": "245",
        "RECEIVER_WARD_ID": "45",
        "RECEIVER_ADDRESS": "",
        "PRODUCT_WIDTH": "1",
        "PRODUCT_HEIGHT": "1",
        "PRODUCT_LENGTH": "1",
        "PRODUCT_WEIGHT": "500",
        "PRODUCT_QUANTITY": "1",
        "MONEY_COLLECTION": "1000000",
        "SERVICES": [
            {
                "CODE": "2"
            }
        ],
        "SERVICE_EXTRA": [
            {
                "Code": "PaymentBy",
                "Value": "NGUOIGUI",
                "ViewType": "Radio",
                "Name": "Người gửi trả phí"
            },
            {
                "Code": "CONN",
                "Value": "true",
                "ViewType": "Radio",
                "Name": "Người gửi trả phí"
            },
            {
                "Code": "ShipperNote",
                "Value": "KHONGCHOXEMHANG",
                "ViewType": "DropdownList",
                "Name": "ShipperNote"
            }
        ]

    },

      getPrice() {
          const config = {
              headers: {
                  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6IjJYViJ9.eyJpc3MiOiJrdnNzand0Iiwic3ViIjo2NzY3MiwiaWF0IjoxNjUzMjc0MjM2LCJleHAiOjE2NTU4NjYyMzYsInByZWZlcnJlZF91c2VybmFtZSI6ImFkbWluIiwicm9sZXMiOlsiVXNlciJdLCJrdnNlcyI6IjM2YzZhYzA4ZDc0ZDRjZTFhNmQzODBlMjVkNDA0ODc1Iiwia3Z1aWQiOjY3NjcyLCJrdnV0eXBlIjowLCJrdnVsaW1pdCI6IkZhbHNlIiwia3Z1YWRtaW4iOiJUcnVlIiwia3Z1YWN0IjoiVHJ1ZSIsImt2dWxpbWl0dHJhbnMiOiJGYWxzZSIsImt2dXNob3dzdW0iOiJUcnVlIiwia3ZiaWQiOjcyNDAsImt2cmluZGlkIjo3LCJrdnJjb2RlIjoiYmluaGR0NiIsImt2cmlkIjoxMDE2MTc2LCJrdnVyaWQiOjEwMTYxNzYsImt2cmdpZCI6MSwicGVybXMiOiIifQ.j0fBAm5kOEvYiXEEjRVbvwUguUhQ1QDXnBp8LYIPRro'
              },
              timeout: 10000
          }
          return axios.post('http://api.ngoc.local/api/getPrice/ghn',this.data,config)
      }
 }