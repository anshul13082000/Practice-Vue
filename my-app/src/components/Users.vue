<template >
<div id="d1">
<div> Parameters {{$route.params.id}}</div>
    <div v-for="rec in records" :key="rec.id">
        <p>{{rec.name}}</p>
        <p>{{rec.email}}</p>
        <p>{{rec.dateOfBirth}}</p>
    </div>
</div>    
</template>

<script>
export default{
    name:'Users',
    data()
    {
        return{
            records:[
                {
                    id:1,
                    name:'Eshan Madake',
                    email:'Eshan@gmail.com',
                    dateOfBirth:'12/2/2000'
                },
                {
                    id:2,
                    name:'Tanish Madake',
                    email:'tanish@gmail.com',
                    dateOfBirth:'3/5/2004'
                }
            ]

        }
    z}
}
</script>

<style>

d1{
    border: 1px solid;
    width: 200px;
    height:100px;
}
h1{
    background-color:antiquewhite;
    font-size:40px;


}
</style>


