function isEmailValido(email) {
  return email.includes("@") && email.includes(".");
}

test("valida email correto", () => {
  expect(isEmailValido("teste@email.com")).toBe(true);
});

test("valida email inválido", () => {
  expect(isEmailValido("semarroba")).toBe(false);
});
