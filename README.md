# Desafio FrontEnd - Attus (Angular 17+)

Este projeto é a solução prática do desafio FrontEnd da Attus. A aplicação consiste em um sistema de listagem e cadastro de usuários, construída seguindo todas as diretrizes solicitadas, focando em performance, boas práticas e organização de código.

## Links úteis
- **Repositório Frontend**: [github.com/GustavoKoglin/desafioattus-front](https://github.com/GustavoKoglin/desafioattus-front)
- **Repositório Backend**: [github.com/GustavoKoglin/desafioattus-back](https://github.com/GustavoKoglin/desafioattus-back)
- **Demo local**: [http://localhost:4200/](http://localhost:4200/)
- **Demo em produção**: [https://desafioattus-front.vercel.app](https://desafioattus-front.vercel.app)

## 🚀 Tecnologias Utilizadas
- **Angular 17** (Standalone Components)
- **Angular Material** (Estilização de componentes, Modal)
- **RxJS** (Operadores aplicados: `debounceTime`, `distinctUntilChanged`, `switchMap`, `catchError`, `tap`, `map`)
- **Signals** (Gerenciamento de Estado Reativo)
- **Jest** (Testes Unitários)
- **Mock de API** (Simulando uma API real com Observables e `delay`)

## ⚙️ Pré‑requisitos
- **Node.js** (versão mínima: 18.x)
- **NPM** (versão mínima: 9.x)

## 📦 Instalação e Execução Local
```bash
# Clone e entre no diretório
git clone https://github.com/GustavoKoglin/desafioattus-front.git
cd attus-frontend

# Instale as dependências
npm ci
```

### Scripts de Ambiente
| Script | O que faz |
|--------|-----------|
| `npm start` | Inicia o servidor de desenvolvimento (modo **development**) – equivalente a `npm run start:dev`. |
| `npm run build` | Compila a aplicação para produção (modo **production**). |
| `npm run build:dev` | Compila a aplicação em modo **development**. |
| `npm run build:stage` | Compila a aplicação com a configuração usada para **staging**. |
| `npm run build:prod` | Compila a aplicação com a configuração usada para **produção**. |
| `npm run start:dev` | Serve a aplicação localmente em modo **development**. |
| `npm run start:stage` | Serve a aplicação em modo **production** para validação de **staging**. |
| `npm run start:prod` | Serve a aplicação em modo **production**. |

> **Acesse a aplicação demo através do link da Vercel, utilize o email e senha abaixo:** <br>
> Email: `gustavo.koglin@teste.com` <br>
> Senha: `Teste@teste123!` <br>

#### Uso típico
```bash
# Desenvolvimento rápido (auto‑reload)
npm run start:dev

# Testar build de staging
npm run build:stage
npm run start:stage

# Build e start para produção
npm run build:prod
npm run start:prod
```

## 🧪 Testes Unitários
```bash
npm run test
```
Um diretório `coverage/` será criado com o relatório detalhado dos testes.

## 🧪 Testes E2E
Não há script de e2e configurado neste projeto no momento. Os testes automatizados disponíveis são os unitários via Jest.

## 🏗️ Estrutura e Decisões Técnicas
- **Estado com Signals:** Para o gerenciamento de estado local da aplicação, foi adotada a abordagem com `Signals`, nativa e recomendada a partir do Angular 16+, oferecendo extrema performance comparada ao Zone.js tradicional.
- **Debounce:** O filtro por nome na listagem utiliza o operador RxJS `debounceTime(300)` aliado ao `switchMap` para cancelar fluxos de pesquisa anteriores caso novas digitações ocorram rapidamente.
- **Validação de CPF:** Criou‑se um validator estrito na modal que avalia CPFs puros (11 dígitos) e CPFs com máscara.

## 📦 Deploy na Vercel
1. **Configure as variáveis de ambiente** no painel da Vercel:
   - `VITE_API_URL` → URL pública da API backend (ex.: `https://desafioattus-back.vercel.app/api`).
2. **Faça o deploy** via interface da Vercel ou com `vercel --prod`.
3. A aplicação ficará disponível no domínio fornecido pela Vercel.

---
