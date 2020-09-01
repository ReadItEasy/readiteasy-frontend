import Vue from "vue";
import VueIziToast from "vue-izitoast";

// import 'izitoast/dist/css/iziToast.css';
import "izitoast/dist/css/iziToast.min.css";

const notificationSystem = {
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
          true,
        ],
        [
          "<button>Close</button>",
          function(instance, toast) {
            instance.hide(
              {
                transitionOut: "fadeOutUp",
                onClosing: function(instance, toast, closedBy) {
                  console.info("closedBy: " + closedBy);
                },
              },
              toast,
              "buttonName"
            );
          },
        ],
      ],
      onOpening: function() {
        console.info("callback abriu!");
      },
      onClosing: function(instance, toast, closedBy) {
        console.info("closedBy: " + closedBy);
        console.log(instance, toast);
      },
    },
    ballon: {
      balloon: true,
      position: "bottomCenter",
    },
    info: {
      position: "bottomLeft",
    },
    success: {
      position: "bottomRight",
    },
    warning: {
      position: "topLeft",
    },
    error: {
      position: "topRight",
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
          true,
        ],
        [
          "<button>NO</button>",
          function(instance, toast) {
            instance.hide({ transitionOut: "fadeOut" }, toast, "button");
          },
        ],
      ],
      onClosing: function(instance, toast, closedBy) {
        console.info("Closing | closedBy: " + closedBy);
      },
      onClosed: function(instance, toast, closedBy) {
        console.info("Closed | closedBy: " + closedBy);
      },
    },
  },
};

Vue.prototype.$notificationSystem = notificationSystem;

Vue.use(VueIziToast);
