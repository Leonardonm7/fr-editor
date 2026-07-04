# FR Editor

Aplicativo mobile local-first para criar, organizar e executar planos de treino de academia.

O foco atual do app é o aluno: montar a própria ficha, acompanhar a sessão ativa, controlar descanso e manter tudo salvo no dispositivo.

## Funcionalidades

- Criação e edição de planos de treino por nome livre.
- Organização dos exercícios por dia da semana.
- Biblioteca de exercícios em Português (Brasil), com categorias normalizadas e prévia visual quando há imagem disponível.
- Exercícios personalizados sem depender da biblioteca.
- Campos por exercício para descrição, metodologia, séries, repetições, carga e vínculo em bloco.
- Exercícios vinculados compartilhando a mesma tabela de séries na sessão ativa.
- Visualização da ficha com botão para iniciar ou retomar treino.
- Sessão ativa compacta, com expansão de apenas um bloco por vez.
- Controle de descanso com timer no cabeçalho, notificação, vibração e som no Android.
- Áudio padrão de fim de descanso, com opção de importar áudio personalizado.
- Persistência local com SQLite.
- Importação e exportação de backup em JSON.
- Tema claro/escuro e ajuste de tamanho da fonte.

## Stack

- Expo SDK 54
- React Native 0.81
- React 19
- TypeScript
- Expo Router
- React Native Paper
- Expo SQLite
- Expo Audio
- Expo Document Picker
- React Native Notify Kit
- React Native Keyboard Controller

## Estrutura

O projeto está separado por responsabilidade:

- `app/`: rotas do Expo Router. As telas ficam finas e conectam hooks + componentes.
- `features/home`: listagem de treinos, busca, seleção, importação e exportação.
- `features/note`: criação, edição e visualização do plano de treino.
- `features/workout`: sessão ativa, séries, descanso, notificações e som.
- `features/settings`: preferências de tema, fonte e áudio do descanso.
- `features/exercise`: prévia visual de exercícios.
- `features/navigation`: tab bar customizada.
- `components/ui`: componentes globais de interface, como `GlobalContainer`, modal e diálogos.
- `database`: client SQLite, migrations, tipos e repositories.
- `services/backup`: criação e leitura do backup JSON.
- `assets/exercises`: biblioteca de exercícios e imagens.
- `hooks`: hooks globais do app.
- `utils`: utilitários globais.

## Rotas Principais

- `app/(tabs)/index.tsx`: Home com lista de treinos.
- `app/(tabs)/settings.tsx`: Configurações.
- `app/(main)/Note/index.tsx`: edição e visualização de um plano de treino.
- `app/(main)/Workout/index.tsx`: execução da sessão ativa.

## Dados Locais

O app usa SQLite local. As tabelas atuais são:

- `notes`: planos de treino.
- `workout_state`: progresso salvo da sessão ativa.
- `app_settings`: preferências do app.

O backup JSON exporta treinos, configurações e estados de treino. O arquivo de áudio personalizado do descanso não é embutido no backup; ele pode ser importado novamente nas configurações.

## Como Rodar

Instale as dependências:

```bash
npm install
```

Inicie o Expo:

```bash
npm run start
```

Rodar direto no Android:

```bash
npm run android
```

Rodar no iOS:

```bash
npm run ios
```

Rodar no navegador:

```bash
npm run web
```

## Scripts

- `npm run start`: inicia o Expo.
- `npm run android`: gera/roda o app no Android.
- `npm run ios`: gera/roda o app no iOS.
- `npm run web`: inicia o app no navegador.
- `npm run lint`: executa o lint do Expo.

Para checagem de tipos:

```bash
npx tsc --noEmit
```

## Observações

- O comportamento de notificação, vibração e som de descanso é voltado principalmente para Android.
- O app usa edge-to-edge e centraliza o esqueleto visual das telas em `GlobalContainer`.
- A biblioteca de exercícios está em PT-BR em `assets/exercises/data/exerciseLibrary.ts`.
- O projeto não mantém compatibilidade com formatos antigos de banco ou backup; a base esperada é o formato atual.
