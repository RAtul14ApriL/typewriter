const typeWriter = (sentence) => {
  let delay = 0;
  for (let i of sentence) {
    setTimeout(() => {
      if(i === sentence[sentence.length - 1]){
        process.stdout.write(i + '\n');
      } else {
        process.stdout.write(i);
      }
    }, delay +=50);
  }
}

typeWriter('hello there from lighthouse lab');