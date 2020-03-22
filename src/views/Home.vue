<template>
    <v-app>
      <v-layout row wrap>
        <v-flex xs12>
          <v-carousel align-center class="hidden-xs12" >
            <v-carousel-item xs12 class="text-sm-center"
              v-for="venture in ventures" :src="venture.imageurl" :key="venture.id">
              <div class="title">
                  {{venture.title}}
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
      <!-- ບໍລິການ -->
      <h1 class="text-center">ບໍລິການ</h1>
       <v-layout>
         <v-flex>
           <v-icon></v-icon>

         </v-flex>
     </v-layout>
     <!-- ກ່ຽວກັບບໍລິສັດ -->
     <v-layout row wrap color="primary" height="100px">
        <h1 class="text-center">ກ່ຽວກັບບໍລິສັດ</h1>
        <h3>ບໍລິສັດ ເວັນເຈີ ເນັດເວັກ</h3>
        <p>ບໍລິສັດ ເວນເຈີຣເນັທເວີຣຄ ຈໍາກັດ. ໃບທະບຽນເລກທີ່  0453/ຈທວ, ລົງວັນທີ່  15/05/2018, ທືນຈົດທະບຽນ560,000,000ກີບ.ບໍລິສັດໄດ້ສ້າງລະບົບເຕີ່ມມູນຄ້າໂທອອນໄລນຂື້ນ, ລະບົບຊື່ວ່າ ວີທອບອັບອອນໄລນ (V-Top up Online). ແລະ ໄດ້ເຊື່ອມຕ່ລະບົບ ກັບ ບັນດາ 03 ບໍລິສັດໂທລະຄົມຍັກໃຫຍ່ໃນ ສປປ ລາວ ເຊັນ:
          1. ບໍລິສັດ ລັດວິສາຫະກິດ ລາວໂທລະຄົມມະນາຄົມ.
          2.ບໍລິສັດ ສາຕາຣໂທລະຄົມ.
          3. ບໍລິສັດ ອີທີເອລ ຈໍາກັດ.
          ລະບົບຂອງພວກເຮົາຊຶ່ງເປັນລະບົບທີ່ທັນໄໝ ແລະ ມີຄວາມປອດໄພສູງຫຼາຍໃນຍຸກປັດຈຸບັນ ໃນ ສປປ ລາວ</p>
     </v-layout>
     <!-- ຜະລິດຕະພັນ -->
     <v-layout>
       <h1>ຜະລິດຕະພັນ</h1>
     </v-layout>
     
      <!-- ຂ່າວສານ  -->
      <v-container grid-list-md>
         <h1 class="text-center">ຂ່າວສານ</h1>
          <v-layout row wrap>
        <v-flex xs12 sm6>
          <v-card>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg">
              </v-img>
              <v-card-title>
                <h1>venture network</h1>
              </v-card-title>
              <v-card-text>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vitae saepe beatae itaque, ducimus, quae sequi non 
                  cupiditate adipisci, quas labore suscipit architecto optio amet autem recusandae quaerat possimus eos?</p>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary">ອ່ານເພີ່ມເຕີມ</v-btn>
              </v-card-actions>  
          </v-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg">
              </v-img>
              <v-card-title>
                <h1>venture network</h1>
              </v-card-title>
              <v-card-text>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vitae saepe beatae itaque, ducimus, quae sequi non 
                  cupiditate adipisci, quas labore suscipit architecto optio amet autem recusandae quaerat possimus eos?</p>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary">ອ່ານເພີ່ມເຕີມ</v-btn>
              </v-card-actions>
            
          </v-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg">
              </v-img>
              <v-card-title>
                <h1>venture network</h1>
              </v-card-title>
              <v-card-text>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vitae saepe beatae itaque, ducimus, quae sequi non 
                  cupiditate adipisci, quas labore suscipit architecto optio amet autem recusandae quaerat possimus eos?</p>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary">ອ່ານເພີ່ມເຕີມ</v-btn>
              </v-card-actions>
            
          </v-card>
        </v-flex>
        <v-flex xs12 sm6>
          <v-card>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg">
              </v-img>
              <v-card-title>
                <h1>venture network</h1>
              </v-card-title>
              <v-card-text>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vitae saepe beatae itaque, ducimus, quae sequi non 
                  cupiditate adipisci, quas labore suscipit architecto optio amet autem recusandae quaerat possimus eos?</p>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary">ອ່ານເພີ່ມເຕີມ</v-btn>
              </v-card-actions>
            
          </v-card>
        </v-flex>
      </v-layout>
      </v-container>
      <!-- ຕິດຕໍ່ -->
      <v-layout>
        <h1>ຕິດຕໍ່</h1>
      </v-layout>
      
        
           
    </v-app>
</template>

<script>
export default {
  data(){
    return{
      show: false,
        ventures:[{
          imageurl:'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',id:'venturenetwork',title:'slide1'
        },
        {
          imageurl:'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',id:'slide2',title:'venture Network'
        },
        {
          imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Paris_Night_f.jpg/1200px-Paris_Night_f.jpg',id:'slide3',title:'company'
        }
        
        ]
   
    }
  },
   
};
</script>

<style scoped>
    .title {
      position: absolute;
      bottom: 50px;
      background-color: #000;
      color: #fff;
      font-size: 5em;
    }
    h1 {
      font-size: 40px;
      margin-top: 80px;
    }
     ul li p{
      display: flex;
      padding: 10px;
    }
    
</style>