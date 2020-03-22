<template>
  <v-app>
     <v-navigation-drawer absolute temporary v-model="drawer" color="#0ABDE3">
       <v-list>
          <v-list-item
              v-for="item in menuItems"
              :key="item.title" :to="item.route"
              >
            <v-list-item-icon>
                <v-icon>{{ item.icons }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    
    <v-app-bar
      app
      color="#258AF2"
      dark
    >

    <v-app-bar-nav-icon v-if="checkDrawer" @click.native.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <div class="d-flex align-center">
            <v-img
              alt="Venture Network Logo"
              class="shrink mr-2"
              contain
              src="./assets/venture_network_logo.png"
              transition="scale-transition"
              width="55"
            />
            <v-img v-if="!checkDrawer"
              alt="Vuetify Name"
              class="shrink mt-1 hidden-sm-and-down"
              contain
              min-width="100"
              src="./assets/vn-text.png"
              width="250"
              height="150"
            />
        </div>
      <v-spacer></v-spacer>
      
        <div  v-if="!checkDrawer" class="HeadNavbar">
            <router-link class="Nav" v-for="item in menuItems" :key="item.title" :to="item.route"><v-icon left v-html="item.icons"></v-icon>
                  {{item.title}}
            </router-link>
            <v-btn icon v-if="!clicksearch" @click.stop="modalModel=true"><v-icon>mdi-magnify</v-icon></v-btn>
            <v-text-field v-if="clicksearch" type="search" placeholder="ຄົ້ນຫາ..." />
        </div>

    </v-app-bar>
    <v-content>
        <router-view/> 
    </v-content>
    <!-- backtotop -->
    <v-btn
            v-scroll="onScroll"
            v-show="fab"
            fab
            dark
            fixed
            bottom
            right
            color="#3C40C6"
            @click="toTop"
          >
            <v-icon>mdi-chevron-up</v-icon>
          </v-btn>
    <!-- footer -->
  <v-footer
    dark
    padless
  >
      <v-card
        class="flex"
        flat
        tile
      >
          <div class="Navbarfooter">
            <router-link class="Navfooter" v-for="item in menuItems" :key="item.title" :to="item.route">
                  {{item.title}}
            </router-link>
        </div>

          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>Venture Network</strong>
          </v-card-text>
      </v-card>
  </v-footer>
    
  </v-app>
</template>

<script>
export default {
     data(){
        return{
          checkDrawer: false,
          drawer:false,
          fab: false,
          checkboxModel:false,
          modalModel:false,
          clicksearch:false
        }
    },
    created(){
      window.onresize = ()=> {
        if(window.innerWidth < 700) {
          this.checkDrawer = true;
        } else {
          this.checkDrawer = false;
        }
      }
    },
    computed:{
       
        menuItems(){
            return[
            {
                icons:'home', title:'ໜ້າຫຼັກ',route:'/',
            },
             {
                icons:'account_circle',title:'ຂ່າວສານ', route:'/news',
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
                icons:'account_circle',title:'ຕິດຕໍ່',route:'/contact',
            }
            ]
            
        }
    },
      methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
}
</script>
<style lang="scss">
    .HeadNavbar .Nav {
      font-size: 16px;
      color: #fff;
      text-decoration: none;
      padding: 5px;
      
    }
    .HeadNavbar .Nav:hover{ 
      color: rgb(235, 223, 223);
      transition: .5s;
    }
    .Navbarfooter .Navfooter {
      font-size: 16px;
      color: #fff;
      text-decoration: none;
      padding: 5px;
      display: inline-block;

    }
    .Navbarfooter .Navfooter:hover{ 
      color: rgb(235, 223, 223);
      transition: .5s;
    }
</style>
