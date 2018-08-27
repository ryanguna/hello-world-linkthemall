<template>
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="120px" class="demo-ruleForm">
    <el-form-item label="Email">
      <el-input  v-model="ruleForm2.email" :disabled="true" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="pass">
      <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="Confirm" prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">Submit</el-button>
      <el-button @click="resetForm('ruleForm2')">Reset</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('Two inputs don\'t match!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          email : '',
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    mounted(){
      const self = this;
      self.$http.get('api/password/find/' + self.$route.query.token)
        .then((response) => {
          self.ruleForm2.email =  response.body.email;
          console.log('RESPONSE', response);
        })
        .catch(error => {
          console.log('ERROR TO', error);
        });

    },
    methods: {
      submitForm(formName) {
        const self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');

            let send = {
              email : self.ruleForm2.email,
              password : self.ruleForm2.pass,
              password_confirmation : self.ruleForm2.checkPass,
              token :  self.$route.query.token
            }

            console.log('TO SEND', send);

            self.$http.post('api/password/reset', send)
              .then((response) => {
                self.ruleForm2.email =  response.body.email;
                console.log('RESPONSE', response);
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
