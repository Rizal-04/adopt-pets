import { mapState } from "vuex";

export default {
  name: "Dogs",
  data() {
    return {};
  },
  computed: {
    ...mapState(["dogs"]),
  },
};
