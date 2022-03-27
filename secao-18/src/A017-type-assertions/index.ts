const typeAssertions = (): void => {
  // Condicional
  const body1 = document.querySelector('body');
  if (body1) body1.textContent = 'teste';

  // Non-null assertion (!) - não recomendado
  const body2 = document.querySelector('body')!;
  body2.textContent = 'teste';

  // Type assertion
  const body3 = document.querySelector('body') as HTMLBodyElement;
  body3.textContent = 'teste';

  // HTMLElements
  const article = document.querySelector('article') as HTMLElement;
  article.textContent = 'teste2';
};

typeAssertions();
