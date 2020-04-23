<template>
  <div>
    <h1>ReadItEasy</h1>
    <p>
      Welcome to ReadItEasy, an app with the purpose of helping you read in a
      target language. Currently, we have just a few books in only chinese, but
      more content will arrive soon!
    </p>
    <p>
      Start reading right now with one of my favorite chinese books:
      <router-link :to="{ path: '/mandarin/book/活着/1' }">To Live</router-link>
      by Hua Yu.
    </p>
    <br />
    <p>
      If you create an account, you can save your known words. Unknown words
      will then appear in red, so you can see at a glance the words you don't
      yet know in a book.
    </p>
    <p>
      With this information, you can then evaluate if a particular book suits
      your level. This level is up to you. Some people like to have a smooth
      reading experience, so they target books where they know at least 98% of
      the words. Others are more obstinate and choose books where they barely
      know half of the words. For both cases, ReadItEasy can help you quickly
      look up definitions and statistics for a given word.
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
