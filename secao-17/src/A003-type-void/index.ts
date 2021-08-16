const semRetorno = (...args: string[]): void => console.log(args.join(' '));

const pessoa = {
  nome: 'André',
  sobrenome: 'Rodrigues',
  exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

semRetorno('olá', 'tudo', 'bem?');
pessoa.exibirNome();

export { semRetorno, pessoa };
