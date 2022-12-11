<template>
    <div>
        <h1>Log in and try your luck!</h1>
        <label for="userlogIn">User Email:</label>
        <input type="text" name="" id="userlogIn">
        <label for="userPassword">Password:</label>
        <input type="text" name="" id="userPassword">
        <button @click="userlogIn">Submit</button>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        name : "HomePage",

        methods : { 
            userlogIn(){}
        },
        mounted () {
            axios.request({
                // email: eve.holt@reqres.in password: cityslicka
                url : "https://reqres.in/api/login",
                method : "POST",
                email : document.getElementById("userlogIn").value,
                password : document.getElementById(`userPassword`).value
            }).then ((router) =>{
                router.push('@/views/GamePage');
            }).catch((error) => {
                console.log(error);
                alert(error.response.data.error);
            })
        }
    }

    
</script>

<style scoped>
div label{
    padding: 10px;
    margin-right: 5px
    
}
div button{
    margin-left: 15px;
    background-color: yellow;
}

</style>