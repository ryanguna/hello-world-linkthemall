<template>
    <div v-if="errorMessage">
      <el-alert
        :title="errorMessage"
        type="error"
        center
        show-icon>
      </el-alert>
    </div>
</template>

<script>
    export default {
        name: "SocialLogin",
        data: () => ({
          errorMessage: ''
        }),
        mounted(){
            const self = this;

            console.log('QUERY CODE', this.$route.query.code);


            self.$http.get(`api/googleLoginCallback/?code=${this.$route.query.code}`)
                .then(response => {
                    console.log('PUTANG INA NIYO! ', response)

                    self.$auth.setToken(response.body.nexus.access_token, response.body.nexus.expires_in + Date.now(),'nexus');
                    // self.$auth.setToken(response.body.tesi.access_token, response.body.tesi.expires_in + Date.now(), 'tesi');

                    self.$router.push("/");

                }).catch(err => {
                  console.log('Error ', err);
                  self.errorMessage = `${err.body.data} Redirecting to log in page.`;

                  if(self.errorMessage) {
                    setTimeout(() => {
                      self.$router.push("/login");
                    }, 1000);
                  }

            })
        }
    }
</script>

<style scoped>

</style>
