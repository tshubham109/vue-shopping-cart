<template>
  <form style="border:1px solid #ccc" @submit.prevent="newSignUp(userDetails)">
    <div class="container">
      <h1>Sign Up Page</h1>
      <p>Please fill in this form to create an account.</p>
      <hr />

      <label for="email"><b>Username</b></label>
      <input
        type="text"
        v-model="userDetails.username"
        placeholder="username"
        name="username"
        required
      />

      <label for="psw"><b>Password</b></label>
      <input
        type="password"
        v-model="userDetails.password"
        placeholder="Enter Password"
        name="psw"
        required
      />
       <label for="role"><b>role</b></label>
      <input
        type="text"
        v-model="userDetails.role"
        placeholder="select 1 for admin 0 for user "
        name="role"
        required
      />

      <div class="clearfix">
        
        <button type="submit" class="signupbtn">Sign Up</button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SignUp",
  data() {
    return {
        userDetails:{
            username: "",
            password: "",
            role:""

        }
      
    };
  },
  methods: {
    ...mapActions(['signUp']),
    newSignUp(userDetails) {
        console.log("sign up user details: ",userDetails)
      this.signUp( userDetails);
     this.userDetails={}
    },
  },
};
</script>
