<template>
<div>
    <h1>{{name}}</h1>
    <button @click="onclick">click Me</button>
</div>
</template>
<script>
export default{
  data(){
      return {
         name:"About me is awsome" 
      };
  },
   methods:{
     onclick(){
         alert(this.name);
     }
 }
};

</script>
