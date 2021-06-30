import { mapState } from "vuex";

export default {
  name: "Cats",
  data() {
    return {};
  },
  computed: {
    ...mapState(["cats"]),
  },
};
