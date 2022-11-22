let animationArray = "|/-\\|/-\\|";

const spinner = () => {
  let timer = 100;

  for (const frame of animationArray) {
    setTimeout(() => {
      process.stdout.write(`\r${frame}   `);
    }, timer += 200);
  }

};

spinner();
