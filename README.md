## Vutify validator in easy way 
Don't need to create any common rules when working with vutify form validations


simply import packa and use as rule


```



  created() {
    this.validator = new VuetifyValidator(this)
  },
  


  created() {
    this.validator = new VuetifyValidator(this,i18n)
  },
 ```


 ```
            <v-text-field
              v-model="model"
              :counter="max"
              :rules="[this.validator.required()]"
              label="First name"
            ></v-text-field>


            <v-text-field
              v-model="model"
              :counter="max"
              :rules="[this.validator.required('First name is required')]"
              label="First name"
            ></v-text-field>
 ```