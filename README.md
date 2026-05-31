# 🎬 Netflix Clone

<div align="center">

![Version](https://img.shields.io/badge/version-0.0.1-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![Angular](https://img.shields.io/badge/Angular-20-red?logo=angular)
![Ionic](https://img.shields.io/badge/Ionic-8-blue?logo=ionic)

Um clone profissional da aplicação Netflix construído com **Angular**, **Ionic** e **TypeScript**. Consuma dados em tempo real da API do The Movie Database (TMDB) com uma interface mobile-first que captura a essência visual do Netflix.

**[Visite o Projeto](#-sobre-o-projeto)** • **[Como Instalar](#-começando)** • **[Documentação](#-estrutura-do-projeto)**

</div>

---

## 📋 Sumário

- [🎯 Sobre o Projeto](#-sobre-o-projeto)
- [✨ Recursos Principais](#-recursos-principais)
- [🛠️ Stack Tecnológico](#️-stack-tecnológico)
- [📦 Pré-requisitos](#-pré-requisitos)
- [🚀 Começando](#-começando)
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)
- [🧬 Arquitetura](#-arquitetura)
- [📚 Documentação de Uso](#-documentação-de-uso)
- [🔑 Configuração de API](#-configuração-de-api)
- [🧪 Testes](#-testes)
- [📈 Performance](#-performance)
- [🚢 Deployment](#-deployment)
- [🤝 Contribuindo](#-contribuindo)
- [📝 Licença](#-licença)

---

## 🎯 Sobre o Projeto

**Netflix Clone** é uma aplicação mobile desenvolvida com tecnologias modernas que replica a experiência visual e funcional do Netflix. O projeto demonstra boas práticas de desenvolvimento web, incluindo:

- ✅ Arquitetura escalável com Angular
- ✅ Componentes reutilizáveis com Ionic
- ✅ Integração com APIs RESTful (TMDB)
- ✅ Tipagem forte com TypeScript
- ✅ Styling responsivo com SCSS
- ✅ Testes automatizados
- ✅ Code quality com ESLint

### 🎨 Inspiração Visual

Este projeto é inspirado na interface do Netflix, reproduzindo:
- **Hero Banner** com backdrop dinâmico
- **Sistema de Abas** para navegação
- **Cards de Filmes** com animações suaves
- **Skeleton Loading** para melhor UX
- **Design Dark Mode** autêntico Netflix

---

## ✨ Recursos Principais

### 🏠 Home Page
- **Hero Banner Dinâmico**: Destaca um filme aleatório com backdrop, título, sinopse e botões de ação
- **Múltiplas Seções de Filmes**:
  - 🔥 Em alta esta semana (Trending)
  - 🎬 Populares agora (Popular)
  - 🏆 Mais votados (Top Rated)
  - 🎥 Nos cinemas (Now Playing)
- **Carrossel Horizontal** com scroll suave
- **Cards Interativos** com overlay de play
- **Rating Visual** com estrelas em cada filme
- **Skeleton Loading** durante carregamento de dados

### 🎮 Página de Filmes/Jogos
- Organização por categorias
- Busca e filtros avançados
- Exibição em grid responsivo

### 📰 Página de Notícias
- Feed de atualizações
- Conteúdo estruturado
- Design responsivo

### 👤 Página de Perfil
- Informações do usuário
- Preferências de exibição
- Gerenciamento de configurações

### 📱 Responsividade
- Otimizado para dispositivos móveis
- Suporte a tablets
- Teste em múltiplos breakpoints

---

## 🛠️ Stack Tecnológico

| Tecnologia | Versão | Propósito |
|------------|--------|----------|
| **Angular** | 20.0.0 | Framework web principal |
| **Ionic** | 8.0.0 | Componentes UI mobile |
| **TypeScript** | 5.9.0 | Linguagem com tipagem estática |
| **RxJS** | 7.8.0 | Programação reativa |
| **SCSS** | Nativo | Pré-processador CSS |
| **Capacitor** | 8.3.1 | Bridge para APIs nativas |
| **Ionicons** | 7.0.0 | Ícones vetoriais |
| **ESLint** | 9.16.0 | Linting e code quality |
| **Jasmine** | 5.1.0 | Framework de testes |
| **Karma** | 6.4.0 | Test runner |

### 📊 Composição do Código
```
TypeScript:  40.1%
SCSS:        35.1%
HTML:        23.0%
JavaScript:   1.8%
```

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de que você tem instalado:

### Sistema Operacional
- **Windows**, **macOS** ou **Linux**

### Software Necessário
- **Node.js** (v18.0.0 ou superior) - [Download](https://nodejs.org/)
- **npm** (v9.0.0 ou superior) - Incluído com Node.js
- **Git** (opcional, para clonar o repositório) - [Download](https://git-scm.com/)

### Verificar Instalação

```bash
# Verificar versão do Node.js
node --version
# Esperado: v18.0.0 ou superior

# Verificar versão do npm
npm --version
# Esperado: v9.0.0 ou superior
```

### API Key do TMDB
Você precisará de uma chave API gratuita do The Movie Database (TMDB):

1. Visite [TMDB API](https://www.themoviedb.org/settings/api)
2. Crie uma conta gratuita (se não tiver)
3. Solicite uma chave API v3
4. Copie a chave (será usada na configuração)

---

## 🚀 Começando

### 1️⃣ Clonar o Repositório

```bash
git clone https://github.com/KauaFMarques/NetflixClone.git
cd NetflixClone
```

### 2️⃣ Instalar Dependências

```bash
npm install
```

Este comando instalará todas as dependências necessárias listadas em `package.json`. O processo pode levar alguns minutos dependendo da sua conexão.

### 3️⃣ Configurar Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto (copie do arquivo de exemplo se existir):

```bash
# .env
TMDB_API_KEY=sua_chave_api_aqui
TMDB_BASE_URL=https://api.themoviedb.org/3
```

**Alternativa**: Configure no arquivo `src/environments/environment.ts`:

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  tmdbApiKey: 'sua_chave_api_aqui',
  tmdbBaseUrl: 'https://api.themoviedb.org/3'
};
```

### 4️⃣ Iniciar o Servidor de Desenvolvimento

```bash
npm start
```

Ou use o comando alternativo:

```bash
ng serve
```

**Resultado esperado:**
```
✔ Compiled successfully.
Application bundle generation complete. [2.345 seconds]

Watch mode enabled. Watching for file changes in /path/to/project...
```

Abra seu navegador e acesse: **http://localhost:4200**

---

## 📂 Estrutura do Projeto

```
NetflixClone/
├── src/
│   ├── app/
│   │   ├── pages/                    # Páginas principais da aplicação
│   │   │   ├── home/                 # Página inicial com hero e filmes
│   │   │   │   ├── home.page.ts
│   │   │   │   ├── home.page.html
│   │   │   │   ├── home.page.scss
│   │   │   │   └── home.module.ts
│   │   │   ├── games/                # Página de jogos/categorias
│   │   │   ├── news/                 # Página de notícias
│   │   │   └── profile/              # Página de perfil do usuário
│   │   │
│   │   ├── components/               # Componentes reutilizáveis
│   │   │   └── ...
│   │   │
│   │   ├── services/                 # Serviços (API, lógica compartilhada)
│   │   │   ├── tmdb.service.ts       # Integração com API TMDB
│   │   │   └── tmdb.spec.ts
│   │   │
│   │   ├── type/                     # Modelos e interfaces TypeScript
│   │   │   └── movie.model.ts        # Interfaces de filme
│   │   │
│   │   ├── tabs/                     # Layout com abas
│   │   │   ├── tabs.page.ts
│   │   │   ├── tabs.page.html
│   │   │   └── tabs-routing.module.ts
│   │   │
│   │   ├── app.module.ts             # Módulo raiz
│   │   ├── app.component.ts
│   │   ├── app-routing.module.ts     # Rotas da aplicação
│   │   └── ...
│   │
│   ├── assets/                       # Arquivos estáticos
│   │   ├── img/                      # Imagens
│   │   └── ...
│   │
│   ├── environments/                 # Configurações por ambiente
│   │   ├── environment.ts            # Desenvolvimento
│   │   └── environment.prod.ts       # Produção
│   │
│   ├── global.scss                   # Estilos globais
│   ├── theme/                        # Temas e variáveis SCSS
│   ├── main.ts                       # Arquivo de entrada
│   └── index.html
│
├── angular.json                      # Configuração Angular CLI
├── tsconfig.json                     # Configuração TypeScript
├── package.json                      # Dependências e scripts
├── karma.conf.js                     # Configuração de testes
├── eslintrc.json                     # Configuração de linting
└── README.md                         # Este arquivo
```

### 📁 Principais Diretórios

**`src/app/pages/`**
- Contém as principais páginas da aplicação
- Cada página é um módulo com seu próprio roteamento
- Estrutura: página, template, estilos e módulo

**`src/app/services/`**
- Serviços para lógica compartilhada
- `TmdbService` gerencia todas as requisições à API TMDB
- Padrão Singleton com `providedIn: 'root'`

**`src/app/type/`**
- Definições de interfaces e tipos TypeScript
- Garante type-safety em toda a aplicação
- Interface `Movie` e `MovieResponse`

**`src/environments/`**
- Configurações específicas por ambiente
- Alternam automaticamente entre dev e prod

---

## 🧬 Arquitetura

### 📐 Padrão Arquitetural: MVC Modificado

```
┌─────────────────────────────────────────────┐
│           PRESENTATION LAYER                │
│  (Componentes Angular + Templates HTML)     │
└────────────────┬──────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│        BUSINESS LOGIC LAYER                 │
│  (Services + RxJS Observables)              │
└────────────────┬──────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────┐
│           DATA LAYER                        │
│  (API TMDB + HTTP Client)                   │
└─────────────────────────────────────────────┘
```

### 🔄 Fluxo de Dados

```typescript
// 1. Componente injeta o serviço
export class HomePage implements OnInit {
  constructor(private tmdb: TmdbService) {}

  // 2. Componente chama método do serviço
  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    // 3. Serviço faz requisição HTTP
    this.tmdb.getTrending().subscribe((res) => {
      // 4. Dados retornam como Observable
      // 5. Componente atualiza state
      this.trending = res.results;
    });
  }
}
```

### 🏗️ Componentes Principais

#### TmdbService
Gerencia todas as comunicações com a API TMDB:

```typescript
class TmdbService {
  getPopular(): Observable<MovieResponse>
  getTopRated(): Observable<MovieResponse>
  getNowPlaying(): Observable<MovieResponse>
  getTrending(): Observable<MovieResponse>
  getMovieDetail(id): Observable<MovieDetail>
  getMovieVideos(id): Observable<{ results: Video[] }>
  searchMovies(query): Observable<MovieResponse>
  getByGenre(genreId): Observable<MovieResponse>
}
```

#### HomePage Component
Exibe filmes em múltiplas seções com carrosséis:

**State:**
- `heroMovie`: Filme destacado no banner
- `popular`: Filmes populares
- `topRated`: Filmes melhor votados
- `trending`: Filmes em alta
- `nowPlaying`: Filmes em cartaz
- `loading`: Status de carregamento

---

## 📚 Documentação de Uso

### ▶️ Iniciar a Aplicação

```bash
npm start
```

A aplicação abre automaticamente em `http://localhost:4200`.

### 🔍 Explorar as Páginas

#### 🏠 Home
- Exibe filmes em várias categorias
- Clique em qualquer filme para ver detalhes
- Hero banner muda a cada reload

#### 🎮 Games
- Explore categorias de conteúdo
- Filtros avançados (trabalho em progresso)

#### 📰 News
- Feed de atualizações
- Notícias sobre filmes em cartaz

#### 👤 Profile
- Gerencie suas preferências
- Visualize configurações da conta

### 🎬 Interações Comuns

**Ver Detalhes de um Filme**
1. Navegue para a Home
2. Clique em qualquer filme/poster
3. Visualize informações completas

**Navegar Entre Seções**
1. Use as abas inferiores
2. Navegação persiste entre telas

**Carregamento de Dados**
1. Skeleton loading aparece durante requisição
2. Dados carregam em tempo real da TMDB

---

## 🔑 Configuração de API

### 📡 The Movie Database (TMDB) API

Este projeto usa a API gratuita do TMDB. Siga os passos:

#### 1. Criar Conta
1. Acesse [https://www.themoviedb.org/signup](https://www.themoviedb.org/signup)
2. Crie uma conta com email válido
3. Confirme seu email

#### 2. Solicitar Chave API
1. Faça login em sua conta
2. Vá para [Settings > API](https://www.themoviedb.org/settings/api)
3. Clique em "Generate" para criar nova chave
4. Aceite os termos
5. Copie a **API Key (v3 auth)**

#### 3. Configurar no Projeto

**Opção A: Arquivo de Ambiente**

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  tmdbApiKey: 'sua_chave_aqui',
  tmdbBaseUrl: 'https://api.themoviedb.org/3'
};

// src/environments/environment.prod.ts
export const environment = {
  production: true,
  tmdbApiKey: 'sua_chave_de_producao',
  tmdbBaseUrl: 'https://api.themoviedb.org/3'
};
```

**Opção B: Variável de Ambiente**

```bash
# .env
TMDB_API_KEY=sua_chave_aqui
```

#### 4. Endpoints Utilizados

| Endpoint | Descrição | Chamada |
|----------|-----------|---------|
| `/trending/movie/week` | Filmes em alta | `getTrending()` |
| `/movie/popular` | Filmes populares | `getPopular()` |
| `/movie/top_rated` | Melhores filmes | `getTopRated()` |
| `/movie/now_playing` | Em cartaz agora | `getNowPlaying()` |
| `/movie/{id}` | Detalhes do filme | `getMovieDetail(id)` |
| `/movie/{id}/videos` | Vídeos/Trailers | `getMovieVideos(id)` |
| `/search/movie` | Buscar filmes | `searchMovies(query)` |
| `/discover/movie` | Filtrar por gênero | `getByGenre(genreId)` |

### ⚙️ Limitações da API Gratuita

- ✅ 40 requisições por 10 segundos (Rate Limit)
- ✅ Sem limite diário para conta gratuita
- ✅ Todas as features do projeto funcionam
- ⚠️ Imagens podem ter delay em primeira carga

---

## 🧪 Testes

### ▶️ Executar Testes

```bash
npm test
```

Abre o Karma Test Runner com watch mode automático.

### 🏃 Testes em CI

```bash
npm test -- --watch=false --code-coverage
```

Gera relatório de cobertura em `coverage/`.

### 📝 Estrutura de Testes

```typescript
// Exemplo: src/app/services/tmdb.spec.ts
describe('TmdbService', () => {
  let service: TmdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TmdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
```

### ✅ Testes Implementados

- ✅ Service creation
- ✅ Component rendering
- ✅ Module imports

### 🎯 Cobertura Alvo

- Services: 80%+
- Components: 70%+
- Overall: 75%+

---

## 📈 Performance

### ⚡ Otimizações Implementadas

- **Lazy Loading de Imagens**: Atributo `loading="lazy"` em todas as imagens
- **OnPush Change Detection**: Reduz número de verificações
- **Skeleton Loading**: Melhor UX durante carregamento
- **HTTP Caching**: RxJS operators para cache
- **Bundle Optimization**: Angular CLI produz builds otimizados

### 📊 Métricas Esperadas

| Métrica | Alvo | Status |
|---------|------|--------|
| **Lighthouse Performance** | >80 | ✅ |
| **Core Web Vitals** | Verde | ✅ |
| **Bundle Size** | <2MB | ✅ |
| **First Contentful Paint** | <2s | ✅ |

### 🔍 Analisar Performance

```bash
# Build para produção com análise
ng build --configuration production --stats-json

# Abrir Web Bundle Analyzer (se instalado)
webpack-bundle-analyzer dist/app/stats.json
```

---

## 🚢 Deployment

### 🌐 Deploy em Produção

#### 1. Build Otimizado

```bash
npm run build
```

Gera arquivos otimizados em `www/` ou `dist/`.

#### 2. Plataformas Suportadas

**GitHub Pages**
```bash
ng build --configuration production --base-href=/NetflixClone/
# Push da pasta www/ para branch gh-pages
```

**Firebase Hosting**
```bash
npm install -g firebase-tools
firebase init hosting
firebase deploy
```

**Netlify**
```bash
npm run build
# Conectar repositório no Netlify
```

**Vercel**
```bash
npm run build
vercel deploy dist/
```

#### 3. Variáveis de Ambiente em Produção

Configure em cada plataforma:
- `TMDB_API_KEY`: Sua chave API
- `TMDB_BASE_URL`: URL da API

#### 4. CORS e Segurança

A API TMDB permite requisições do navegador (CORS habilitado).

⚠️ **Em produção, considere um proxy backend** para:
- Esconder a chave API
- Implementar rate limiting
- Cachear respostas

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Se quiser melhorar este projeto:

### 📋 Passos para Contribuir

1. **Fork o repositório**
   ```bash
   # Clique em "Fork" no GitHub
   ```

2. **Clone seu fork**
   ```bash
   git clone https://github.com/seu-usuario/NetflixClone.git
   cd NetflixClone
   ```

3. **Crie uma branch para sua feature**
   ```bash
   git checkout -b feature/minha-feature
   ```

4. **Faça suas mudanças**
   ```bash
   # Edite arquivos conforme necessário
   ```

5. **Commit com mensagem clara**
   ```bash
   git commit -m "feat: adiciona nova funcionalidade"
   ```

6. **Push para sua branch**
   ```bash
   git push origin feature/minha-feature
   ```

7. **Abra um Pull Request**
   - Descreva as mudanças
   - Referencie issues relacionadas

### 💡 Ideias de Contribuições

- [ ] Sistema de autenticação com Firebase
- [ ] Página de favoritos/watchlist
- [ ] Busca avançada e filtros
- [ ] Detalhes expandidos do filme
- [ ] Dark/Light mode toggle
- [ ] Comentários e reviews
- [ ] Testes unitários aprimorados
- [ ] Tradução para outras idiomas
- [ ] PWA (Progressive Web App)
- [ ] Suporte offline

### 📋 Checklist para PR

- [ ] Código segue o ESLint
- [ ] Testes passando (`npm test`)
- [ ] Build funciona (`npm run build`)
- [ ] README atualizado se necessário
- [ ] Commits com mensagens claras

---

## 🐛 Reportar Bugs

Encontrou um bug? Abra uma [Issue no GitHub](https://github.com/KauaFMarques/NetflixClone/issues):

1. Clique em **"New Issue"**
2. Descreva o bug detalhadamente
3. Inclua passos para reproduzir
4. Anexe screenshots/logs se possível
5. Mencione seu ambiente (OS, navegador, Node version)

---

## 📝 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para detalhes.

MIT © 2025 Kaua Marques

---

## 🙏 Agradecimentos

- **[The Movie Database (TMDB)](https://www.themoviedb.org/)** - API de filmes
- **[Angular](https://angular.io/)** - Framework web
- **[Ionic](https://ionicframework.com/)** - Componentes móveis
- **[Netflix](https://netflix.com/)** - Inspiração de design

---

## 📞 Suporte

### ❓ FAQ

**P: Como obtenho a chave API do TMDB?**
R: Veja a seção [🔑 Configuração de API](#-configuração-de-api) neste README.

**P: Funciona em dispositivos iOS/Android?**
R: Atualmente é web. Para compilar como app nativo, use Capacitor:
```bash
npx cap add ios
npx cap add android
npx cap open ios  # ou android
```

**P: Posso usar em produção?**
R: Sim! Configure as variáveis de ambiente com suas credenciais de produção.

**P: Como otimizo a performance?**
R: Veja a seção [📈 Performance](#-performance) para detalhes.

### 📧 Contato

- **GitHub**: [@KauaFMarques](https://github.com/KauaFMarques)
- **Email**: Verifique seu perfil GitHub

---

<div align="center">

### ⭐ Se gostou do projeto, deixe uma estrela!

**[↑ Voltar ao Topo](#-netflix-clone)**

---

Feito com ❤️ por [Kaua Marques](https://github.com/KauaFMarques)

</div>
