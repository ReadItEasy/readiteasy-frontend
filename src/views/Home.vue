<template>
  <div>
    <h1>ReadItEasy</h1>
    <p>
      Welcome on ReadItEasy, an app that purpuse is to help you reading in one
      of your target languages. We currently just have few books and only for
      chinese, but more content will soon arrive !
    </p>
    <p>
      Start reading right now with one of my favorite chinese book :
      <router-link :to="{ path: '/mandarin/book/活着/1' }">To Live</router-link>
      from Hua Yu
    </p>
    <br />
    <p>
      If you create an account, you can save your known words. Unknown words
      will then lighten in red so you can see in a glimpse words you don't know
      yet in a book.
    </p>
    <p>
      With this information, you can then evaluate if a word is too complex to
      read, or if it suits your level. This level is up to you. Some people like
      to have a smooth reading so they target books which they already know at
      least 98% of the words. Some others are more obstinate and barely know
      half of the words from a book. For both cases, ReadItEasy can help you
      quickly look up definitions and statistics about a given word
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  max-width: 80%;
  margin: auto;
}
</style>
