<template>
  <form style="border:1px solid #ccc" @submit.prevent="newSignIn(userDetails)">
    <div class="container">
      <h1>Sign  In Page</h1>
      
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

      <div class="clearfix">
        
        <button type="submit" class="signupbtn">Sign In</button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SignIn",
  data() {
    return {
      userDetails:{ username: "",
      password: "",}
     
    };
  },
  methods: {
    ...mapActions(['signIn']),
    newSignIn(userDetails) {
      console.log("sign in user details:" ,userDetails)
      this.signIn(userDetails);
      this.userDetails={};
    },
  },
};
</script>
