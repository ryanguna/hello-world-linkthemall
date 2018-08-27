<template>

  <el-container>
    <el-main>
      <el-row :gutter="20">
        <div  class="signup-container">
          <el-col :xs="24" :sm="24" :md="15" :lg="8" :xl="8" >
            <el-card>
              <div slot="header" class="clearfix">
                <span class="login-title">Signup</span>
              </div>

              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">

                <el-form-item label="Email"
                              prop="email">
                  <el-input
                    placeholder="Email Address"
                    suffix-icon="el-icon-message"
                    v-model="ruleForm.email"
                    auto-complete="off"
                    @keyup.enter.native="login"
                  >
                  </el-input>

                </el-form-item>


                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">Reset</el-button>
                  <el-button @click="resetForm('ruleForm')">Reset</el-button>
                </el-form-item>
              </el-form>


            </el-card>
          </el-col>
        </div>
      </el-row>
    </el-main>
  </el-container>






</template>


<script>
  export default {
    data() {
      return {
        ruleForm: {
          email : '',
        },
        rules: {
          email : [
            { required: true, message: 'Please input email address', trigger: 'blur' },
            { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        const self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {

            let send = {
              email : self.ruleForm.email
            };
            self.$http.post('api/password/create', send)
              .then((response) => {
                console.log('RESPONSE', response);
                self.$router.push('/login')

              })
              .catch(error => {
                console.log('ERROR TO', error);
              });


          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
  .signup-container {
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 180px auto;
  }
</style>



