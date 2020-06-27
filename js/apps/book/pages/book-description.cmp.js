



export default {
    props: ['txt'],
    template: `
        <section class="book-desc">
            <h2 class="helper-h2">{{Desc}}</h2>
            <button class="button-helper" @click="isMoreTxt"> Read More Less </button>
        </section>
    `,
    data() {
        return {
           isTxtLess: true
        }
    },
    methods:{
        isMoreTxt(){
            this.isTxtLess = !this.isTxtLess
        }
    },
    computed: {
       Desc(){
          if (this.isTxtLess){
              return this.txt.substring(0, 100);
          }else return this.txt
       }
    }
};
