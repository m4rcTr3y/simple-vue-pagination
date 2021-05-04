var study = new Vue({
  el: "#vue-app",
  data: {
    heading: "Vue.js",
    data:[
        {text:'python'},
        {text:'java'},
        {text:'javascript'},
        {text:'c#'},
        {text:'c++'},
        {text:'ruby'},
        {text:'R'},
        {text:'c'},
        {text:'golang'},
        {text:'dragon'},
        {text:'huskel'},
        {text:'go'},
      ],
      page:{},
      count:7,
      currentPage:'',
      cst:[2,3,4,5,6,7]
  },
  methods:{
      setPage(n,p){
          this.page = n
          this.currentPage = p+1;
      }
  },
  watch:{
      count:()=>{
        
      },
  },
  
  computed: {
    compEl(){
        var newd = [...this.data];
        return newd.splice(this.page.fro,this.page.to);
    },
    pageMap(){
        let len = this.data.length;
        let counter = 0;
        
        let Pmap = [];
        let dv = Math.ceil(len/this.count);
        for(var i=0; i<=dv; i++){
            if(Pmap.length!=dv){
             if(i == 0){
                 Pmap.push({page:i, range:{'fro':counter,'to':this.count}})
             }
             else{
                 counter+= parseInt(this.count);
                 Pmap.push({page:i,range:{'fro':counter,'to':this.count}})
             }
            }
        }
        return Pmap
    }
  },
  created(){
      this.setPage(this.pageMap[0].range,this.pageMap[0].page)
  }
  
});