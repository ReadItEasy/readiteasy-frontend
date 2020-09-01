<template>
  <div>
    <h1>ReadItEasy</h1>
    <p>
      Welcome to ReadItEasy, an app with the purpose of helping you read in a
      target language. Currently, we have just a few books in only chinese, but
      more content will arrive soon!!
    </p>
    <p>
      Start reading right now with one of my favorite chinese books:
      <router-link :to="{ path: '/mandarin/book/活着/1' }" class="primary-color">To Live</router-link> by Hua Yu.
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
    <button
      class="btn btn-outline-primary"
      v-on:click="$store.dispatch('notification/addNotification', {message: 'hello you', type:'success'})"
    >VuexNotif</button>&nbsp;
    <button
      class="btn btn-outline-primary"
      v-on:click="$toast.show('Welcome!', 'Hey', $notificationSystem.options.show)"
    >Show</button>&nbsp;
    <button
      class="btn btn-outline-secondary"
      v-on:click="$toast.show('Welcome!', 'Hey', $notificationSystem.options.ballon)"
    >Ballon</button>&nbsp;
    <button
      class="btn btn-outline-info"
      v-on:click="$toast.info('Welcome!', 'Hello', $notificationSystem.options.info)"
    >Info</button>&nbsp;
    <button
      class="btn btn-outline-success"
      v-on:click="$toast.success('Successfully inserted record!', 'OK', $notificationSystem.options.success)"
    >Success</button>&nbsp;
    <button
      class="btn btn-outline-warning"
      v-on:click="$toast.warning('You forgot important data', 'Caution', $notificationSystem.options.warning)"
    >Warning</button>&nbsp;
    <button
      class="btn btn-outline-danger"
      v-on:click="$toast.error('Illegal operation', 'Error', $notificationSystem.options.error)"
    >Error</button>&nbsp;
    <button
      class="btn btn-outline-dark"
      v-on:click="$toast.question('Are you sure about that?', 'Hey', $notificationSystem.options.question)"
    >Question</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notificationSystem: {
        options: {
          show: {
            theme: "dark",
            icon: "icon-person",
            position: "topCenter",
            progressBarColor: "rgb(0, 255, 184)",
            buttons: [
              [
                "<button>Ok</button>",
                function() {
                  alert("Hello world!");
                },
                true
              ],
              [
                "<button>Close</button>",
                function(instance, toast) {
                  instance.hide(
                    {
                      transitionOut: "fadeOutUp",
                      onClosing: function(instance, toast, closedBy) {
                        console.info("closedBy: " + closedBy);
                      }
                    },
                    toast,
                    "buttonName"
                  );
                }
              ]
            ],
            onOpening: function() {
              console.info("callback abriu!");
            },
            onClosing: function(instance, toast, closedBy) {
              console.info("closedBy: " + closedBy);
              console.log(instance, toast);
            }
          },
          ballon: {
            balloon: true,
            position: "bottomCenter"
          },
          info: {
            position: "bottomLeft"
          },
          success: {
            position: "bottomRight"
          },
          warning: {
            position: "topLeft"
          },
          error: {
            position: "topRight"
          },
          question: {
            timeout: 20000,
            close: false,
            overlay: true,
            toastOnce: true,
            id: "question",
            zindex: 999,
            position: "center",
            buttons: [
              [
                "<button><b>YES</b></button>",
                function(instance, toast) {
                  instance.hide({ transitionOut: "fadeOut" }, toast, "button");
                },
                true
              ],
              [
                "<button>NO</button>",
                function(instance, toast) {
                  instance.hide({ transitionOut: "fadeOut" }, toast, "button");
                }
              ]
            ],
            onClosing: function(instance, toast, closedBy) {
              console.info("Closing | closedBy: " + closedBy);
            },
            onClosed: function(instance, toast, closedBy) {
              console.info("Closed | closedBy: " + closedBy);
            }
          }
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
h1 {
  color: $primary-color;
}
</style>
