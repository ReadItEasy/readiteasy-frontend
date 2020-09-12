import { onMounted, onBeforeUnmount } from "@vue/composition-api";
import { checkParentsHasClassname } from "@/utils/DOMhelper.js";

export function callbackOnClickAway(callbackFonction, clickawayClassList) {
  onMounted(() => {
    document.addEventListener("click", clickHandler);
  });
  onBeforeUnmount(() => {
    document.removeEventListener("click", clickHandler);
  });
  function clickHandler(e) {
    const parentHasId = checkParentsHasClassname(e.target, clickawayClassList);

    if (!parentHasId) {
      callbackFonction();
    }
  }
}