<template>
    <div>
        <h1>Log in and try your luck!</h1>
        <label for="userlogIn">User Email:</label>
        <input type="text" name="" id="userlogIn">
        <label for="userPassword">Password:</label>
        <input type="text" name="" id="userPassword">
        <button id="submitLogin">Submit</button>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        name : "HomePage",

        methods (userlogIn){

        }
    }

    
</script>

<style scoped>
div label{
    padding: 10px,
    
}
div button{
    margin-left: 15px;
    background-color: yellow;
}
template{
    background-color: bisque;
}

</style>