export function checkParentsHasClassname(target, idsToCheck) {
  if (idsToCheck.includes(target.id)) {
    return true;
  } else {
    if (target.parentElement) {
      if (checkParentsHasClassname(target.parentElement, idsToCheck)) {
        return true;
      }
    }
  }
  return false;
};