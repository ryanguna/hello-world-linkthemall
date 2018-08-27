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
                  <!--<div v-show="rules.checkCredentials.error"  class="el-form-item__error">-->
                    <!--{{ rules.checkCredentials.message }}-->
                  <!--</div>-->
                </el-form-item>
                <el-form-item label="Password"  prop="password">
                  <el-input
                    placeholder="Password"
                    v-model="ruleForm.password"
                    auto-complete="off"
                    @keyup.enter.native="submitForm('ruleForm')"
                    type="password">
                  </el-input>

                  <!-- FORGET PASSWORD END -->
                </el-form-item>


                <el-form-item label="First name" placeholder="First name" prop="firstname">
                  <el-input v-model="ruleForm.firstname"></el-input>
                </el-form-item>

                <el-form-item label="Last name" placeholder="Last name" prop="lastname">
                  <el-input v-model="ruleForm.lastname"></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
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
          firstname: '',
          lastname : '',
          email : '',
          password: ''
        },
        rules: {
          firstname: [
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          lastname: [
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          email : [
            { required: true, message: 'Please input email address', trigger: 'blur' },
            { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
          ],
          password : [
            { required: true, message: 'Please input password', trigger: 'blur' },
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        const self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {

            self.$http.post('api/signUp', self.ruleForm)
              .then((response) => {
                console.log('RESPONSE OF SIGNUP', response)
                self.$router.push('/login');
              })
              .catch(error => {
               console.log('ERROR');
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
