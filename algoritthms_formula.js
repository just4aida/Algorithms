// 2, 0, 2/3, 0, 2/5, 0, 2/7, …. - постройте формулу для последовательности.

function count(n) {
  if (n % 2 === 0) {
    return 2 / (n + 1);
  } else {
    return 0;
  }
}

function formula(a) {
  for (let n = 0; n < a; n++) {
    const element = count(n);
    console.log(element);
  }
}

formula(6);
