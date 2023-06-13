export abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(
      `${this.emoji} - ${this.nome} agora tem ${this.vida} de vida...`,
    );
  }

  abstract bordao(): void;
}

class Guerreira extends Personagem {
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(this.emoji + ' Guerreira ao Ataque');
  }
}

class Monster extends Personagem {
  protected emoji = '\u{1F9DD}';

  bordao(): void {
    console.log(this.emoji + ' Mostro ao Ataque');
  }
}

const guerreira = new Guerreira('Emily', 102, 1020);
const monster = new Monster('Ruan', 20, 100);

guerreira.atacar(monster);
guerreira.atacar(monster);
guerreira.atacar(monster);
