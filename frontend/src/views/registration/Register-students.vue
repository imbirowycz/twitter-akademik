<template>
  <div class="container register-student height-100">
    <b-row class="justify-content-center height-100 p-4">
      <b-col cols="8" class>
        <h4 class="text-center">Proszę wypełnić poniższą formę:</h4>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-name" label="Imię:" label-for="input-name">
            <b-form-input
              id="input-name"
              v-model="form.firstName"
              type="text"
              required
              placeholder="Wprowadź imię"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-last-name" label="Nazwisko:" label-for="input-last-name">
            <b-form-input
              id="input-last-name"
              v-model="form.lastName"
              type="text"
              required
              placeholder="Wprowadź nazwisko"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-1" label="Email:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Wprowadź email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-number" label="Numer albumu:" label-for="input-number">
            <b-form-input
              id="input-number"
              v-model="form.numberAl"
              type="number"
              required
              placeholder="Wprowadź numer albumu"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-4">
            <div class="block-radio">
              <div class="block-radio__item">
                <p>Stopień studiów:</p>
                <div class="block-radio__item--box">
                  <label for="radio-1">
                    <input v-model="form.degree" value="engineer" type="radio" id="radio-1">
                    Inżynierskie
                  </label>
                  <label for="radio-2">
                    <input
                      v-model="form.degree"
                      value="holderOfUniversityDegree"
                      type="radio"
                      id="radio-2"
                    >
                    Magisterskie
                  </label>
                </div>
              </div>

              <div class="block-radio__item">
                <p>Tryb studiów:</p>
                <div class="block-radio__item--box">
                  <label for="radio-mode-1">
                    <input v-model="form.mode" value="stationary" type="radio" id="radio-mode-1">
                    Stacjonarne
                  </label>
                  <label for="radio-mode-2">
                    <input v-model="form.mode" value="notStationary" type="radio" id="radio-mode-2">
                    Nie stacjonarne
                  </label>
                </div>
              </div>
            </div>
          </b-form-group>

          <b-form-group id="input-group-3" label="Kierunek studiów:" label-for="input-3">
            <b-form-select
              id="input-3"
              v-model="form.fieldOfStudy"
              :options="fieldsOfStudy"
              required
            ></b-form-select>
          </b-form-group>

          <b-form-group id="input-group-4" label="Data rozpoczęcia studiów:" label-for="input-rok">
            <b-form-select id="input-rok" v-model="form.year" :options="years" required></b-form-select>
          </b-form-group>

          <b-button type="submit" block variant="primary">Submit</b-button>
          <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
        </b-form>
        <button @click="onSubmit">Click</button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: "Register-students",
  data() {
    return {
      form: {
        email: "",
        firstName: "",
        lastName: "",
        numberAl: null,
        fieldOfStudy: null,
        degree: "",
        mode: "",
        year: null
      },
      fieldsOfStudy: [
        { text: "Wybirz jedno", value: null },
        "WYDZIAŁ ROLNICTWA I BIOLOGII",
        "WYDZIAŁ MEDYCYNY WETERYNARYJNEJ",
        "WYDZIAŁ LEŚNY",
        "WYDZIAŁ OGRODNICTWA, BIOTECHNOLOGII I ARCHITEKTURY KRAJOBRAZU",
        "WYDZIAŁ BUDOWNICTWA I INŻYNIERII ŚRODOWISKA",
        "WYDZIAŁ TECHNOLOGII DREWNA",
        "WYDZIAŁ NAUK O ZWIERZĘTACH",
        "WYDZIAŁ NAUK O ŻYWNOŚCI",
        "WYDZIAŁ NAUK O ŻYWIENIU CZŁOWIEKA I KONSUMPCJI",
        "WYDZIAŁ INŻYNIERII PRODUKCJI",
        "WYDZIAŁ NAUK EKONOMICZNYCH",
        "WYDZIAŁ NAUK SPOŁECZNYCH",
        "WYDZIAŁ ZASTOSOWAŃ INFORMATYKI I MATEMATYKI"
      ],
      years: [
        { text: "Wybirz jedno", value: null },
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019"
      ],
      show: true
    };
  },
  methods: {
      ...mapMutations('user',['createdUser']),
    onSubmit(evt) {
      evt.preventDefault();
      console.log(this.form)
    this.createdUser(this.form)
    this.$router.push({ name: 'Home' })
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.fieldOfStudy = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
    width: 80%;
}
.content-register {
  height: 100%;
  overflow-y: auto;
}
.block-radio {
  display: flex;
  &__item {
    flex: 1;
    flex-basis: 200px;
    p {
        margin-bottom: 2px;
    }
    &--box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      padding: 6px 12px;
      label {
        margin-bottom: 0!important;
      }
    }
  }
  &__item:first-child {
    margin-right: 20px;
  }
}
</style>
<style lang="scss">
    .register-student {
        label {
            padding-bottom: 2px!important;
        }
    }
</style>