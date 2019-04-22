
<template>
  <div class="register-teacher height-100">
    <div class="content-block-center">
      <b-row class="justify-content-center p-4">
        <b-col cols="12" class>
          <h4 class="text-center">Proszę wypełnić poniższy formularz:</h4>
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <div class="d-flex flex-wrap">
              <div class="box-form">
                <b-form-group id="input-group-name" label="Imię:" label-for="input-name">
                  <b-form-input
                    id="input-name"
                    v-model="form.firstName"
                    type="text"
                    required
                    placeholder="Wprowadź imię"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-last-name"
                  label="Nazwisko:"
                  label-for="input-last-name"
                >
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
              </div>
              <div class="box-form">
                <b-form-group id="input-group-3" label="Stopień naukowy:" label-for="degree">
                  <b-form-select
                    id="degree"
                    v-model="form.degree"
                    :options="degreeOptions"
                    required
                  ></b-form-select>
                </b-form-group>

                <!-- <b-form-group id="scientific-label" label="Przedmiot:" label-for="scientific">
            <b-form-select
              id="scientific"
              v-model="form.scientific"
              :options="scientificOptions"
              required
            ></b-form-select>
                </b-form-group>-->
                <b-form-group label="Przedmiot(y):" label-for="degree" >
                  <multi-select
                  style="min-height: 38px;"
                  id="multi-select"
                    :options="scientificOptions"
                    :selected-options="form.scientific"
                    placeholder="wybierz przedmiot"
                    @select="onSelect"
                  ></multi-select>
                </b-form-group>

                <b-form-group id="faculty-input" label="Wydział:" label-for="faculty-input" >
                  <b-form-select
                    id="faculty-input"
                    v-model="form.faculty"
                    :options="facultyOptions"
                    required
                  ></b-form-select>
                </b-form-group>
              </div>
            </div>
            <div class="box-form" style="widht: 100%;float: right;">
              <b-button type="submit"  variant="primary">Dalej</b-button>
            </div>

            
            <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
          </b-form>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

import { MultiSelect } from "vue-search-select";
export default {
  name: "Register-teacher",
  components: {
    MultiSelect
  },
  data() {
    return {
      form: {
        email: "",
        firstName: "",
        lastName: "",
        numberAl: null,
        scientific: [],
        faculty: null,
        degree: ""
      },
      searchText: "", // If value is falsy, reset searchText & searchItem
      lastSelectItem: {},
      show: true,
      degreeOptions: [
        { text: "Wybirz jedno", value: null },
        "LICEŃCIAT",
        "IŻYNIER",
        "MAGISTER",
        "DOKTOR",
        "DOKTOR HAB",
        "PROFESOR"
      ],
      scientificOptions: [
        { value: "kdjfkdfjk", text: "Język obcy" },
        {
          value: "Ochrona własności intelektualnej",
          text: "Ochrona własności intelektualnej"
        },
        {
          value: "Wychowanie fizyczne (tylko studia stacjonarne",
          text: "Wychowanie fizyczne (tylko studia stacjonarne"
        },
        { value: "Szkolenie BHP", text: "Szkolenie BHP" },
        { value: "Proseminarium", text: "Proseminarium" },
        { value: "Podstawy ekonomii", text: "Podstawy ekonomii" },
        { value: "Filozofia", text: "Filozofia" },
        { value: "Logika z retoryką", text: "Logika z retoryką" },
        {
          value: "Komunikacja międzykulturowa",
          text: "Komunikacja międzykulturowa"
        },
        { value: "Technologia informacyjna", text: "Technologia informacyjna" },
        {
          value: "Myślenie projektowe (tylko studia stacjonarne",
          text: "Myślenie projektowe (tylko studia stacjonarne"
        },
        {
          value: "Komunikacja w biznesie (tylko studia stacjonarne",
          text: "Komunikacja w biznesie (tylko studia stacjonarne"
        },
        {
          value: "Przedsiębiorczość innowacyjna (tylko studia stacjonarne",
          text: "Przedsiębiorczość innowacyjna (tylko studia stacjonarne"
        },
        { value: "Matematyka", text: "Matematyka" },
        { value: "Matematyka dyskretna", text: "Matematyka dyskretna" },
        { value: "Fizyka", text: "Fizyka" },
        {
          value: "Podstawy elektrotechniki i elektroniki",
          text: "Podstawy elektrotechniki i elektroniki"
        },
        {
          value: "Algorytmy i struktury danych",
          text: "Algorytmy i struktury danych"
        },
        { value: "Podstawy programowania", text: "Podstawy programowania" },
        { value: "Programowanie", text: "Programowanie" },
        {
          value: "Architektura systemów komputerowych",
          text: "Architektura systemów komputerowych"
        },
        { value: "Systemy operacyjne", text: "Systemy operacyjne" },
        {
          value: "Technologie sieciowe (CCNA)",
          text: "Technologie sieciowe (CCNA)"
        },
        {
          value: "Języki i paradygmaty programowania",
          text: "Języki i paradygmaty programowania"
        },
        {
          value: "Języki i paradygmaty programowania",
          text: "Języki i paradygmaty programowania"
        },
        {
          value: "Komunikacja człowiek-komputer",
          text: "Komunikacja człowiek-komputer"
        },
        { value: "Grafika komputerowa", text: "Grafika komputerowa" },
        { value: "Sztuczna inteligencja", text: "Sztuczna inteligencja" },
        { value: "Bazy danych", text: "Bazy danych" },
        {
          value: "Inżynieria oprogramowania",
          text: "Inżynieria oprogramowania"
        }
      ],
      facultyOptions: [
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
      ]
    };
  },
  methods: {
    ...mapMutations("user", ["createdUser"]),
    onSubmit(evt) {
      evt.preventDefault();
      console.log(this.form);
      this.createdUser(this.form);
      this.$router.push("/registration/options/teacher/finished");
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
    },
    onSelect(items, lastSelectItem) {
      this.form.scientific = items;
      this.lastSelectItem = lastSelectItem;
    },
    // deselect option
    reset() {
      this.form.scientific = []; // reset
    },
    // select option from parent component
    selectFromParentComponent() {
      this.form.scientific = _.unionWith(
        this.form.scientific,
        [this.scientificOptions[0]],
        _.isEqual
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.content-register {
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
        margin-bottom: 0 !important;
      }
    }
  }
  &__item:first-child {
    margin-right: 20px;
  }
}
</style>
<style lang="scss">
.register-teacher {
  padding-top: 5em;
  background: $green;
  // min-height: 100%;
  label {
    padding-bottom: 2px !important;
  }
}

</style>