import { mapActions, mapGetters } from "vuex";

export default {
  name: "home",
  data() {
    return {
      showPetForm: false,
      formData: {
        name: "",
        age: 0,
        species: null,
      },
    };
  },
  computed: {
    ...mapGetters(["animalsCount", "getAllCats", "getAllDogs"]),
  },
  methods: {
    ...mapActions(["addPet"]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    handleSubmit() {
      const { species, age, name } = this.formData;
      const payload = {
        species,
        pet: {
          name,
          age,
        },
      };
      this.addPet(payload);
      // reset form after submit
      this.formData = {
        name: "",
        age: 0,
        species: null,
      };
    },
  },
};
