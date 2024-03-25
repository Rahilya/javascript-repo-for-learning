function loginUserMessage(username) {
  if (username === undefined) {
    console.log("please enter a usernae");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage());
// console.log(loginUserMessage("Rahil"));
