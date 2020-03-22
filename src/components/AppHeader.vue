<template>
  <v-app>
      <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
            <v-list>
                <v-list-tilte v-for="(item) in menuItems" :key="item.title">
                    <v-list-title-action>
                        <v-list-title-content>
                            <v-list-title-title v-text="item.title"></v-list-title-title>
                        </v-list-title-content>
                        
                    </v-list-title-action>
                </v-list-tilte>
            </v-list>
        </v-navigation-drawer>
    <v-app-bar
      app
      color="#258AF2"
      dark
    >
      <v-toolbar-side-icon
        @click.native.stop="drawer = !drawer"
        class="hidden-sm-and-up "></v-toolbar-side-icon>
      <v-toolbar-title>
        <div class="d-flex align-center">
        <v-img
          alt="Venture Network Logo"
          class="shrink mr-2"
          contain
          src="./assets/venture_network_logo.png"
          transition="scale-transition"
          width="60"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="./assets/vn-text.png"
          width="250"
          height="150"
        />
      </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      
        <div>
          <v-btn color="#258AF2" v-for="(item) in menuItems" flat :key="item.title" :to="item.route"><v-icon left v-html="item.icon"></v-icon>
                {{item.title}}
                </v-btn>
        </div>
     
    </v-app-bar>
    
  </v-app>
</template>

<script>
export default {
     data(){
            return{
                drawer:false
            }
        },
    computed:{
       
        menuItems(){
            return[
            {
                icons:'home', title:'ໜ້າຫຼັກ',route:'/',
            },
             {
                icons:'extension',title:'ຂ່າວສານ', route:'/news',
            },
             {
                icons:'account_circle',title:'ອົງກອນ',route:'/about',
            },
              {
                icons:'account_circle',title:'ແຈ້ງການ',route:'/notice',
            },
              {
                icons:'account_circle', title:'ຄູ່ມື',route:'manual',
            },
               {
                icons:'account_circle',title:'ຕິດຕໍ່',route:'/Contact',
            },
             {
                icons:'exit_to_up',title:'ເຂົ້າສູ່ລະບົບ',route:'/signin',
            },
             {
                icons:'lock_open',title:'ສະໝັກສະມາຊິກ',route:'/signup',
            }
            ]
            
        }
    }
}
</script>
