function kangaroo(x1, v1, x2, v2) {
  // Write your code here

  let kang1 = x1;
  let kang2 = x2;

  for (let i = 0; i < 10001; i++) {
    kang1 += v1;
    kang2 += v2;
    if (kang1 === kang2) return "YES";
  }

  return "NO";
}
