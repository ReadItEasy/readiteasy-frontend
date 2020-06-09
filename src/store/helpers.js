import { mapGetters, mapState } from "vuex";

export const authComputed = {
  ...mapGetters(["loggedIn"])
};

export const bookState = {
  ...mapState({
    targetLanguage: state => state.book.targetLanguage
  })
};
