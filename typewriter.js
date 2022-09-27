const sentence = "hello there from lighthouse labs";
let timer = 50
for (const char of sentence) {
  timer += 50
  setTimeout(() => {
    process.stdout.write(char);
    // print the char here
  }, timer) // <= 1s delay to make it noticeable. Can dial it down later.
}