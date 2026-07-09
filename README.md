# FR Editor

[Português](#fr-editor) | [English](#english)

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
- Componentes próprios em `components/ui`
- Fonte Inter via Expo Font
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
- `features/exercise`: biblioteca, prévia visual e utilitários de exercícios.
- `features/navigation`: tab bar customizada.
- `components/ui`: componentes globais de interface, como `GlobalContainer`, inputs, modal e diálogos.
- `theme`: tema claro/escuro, tokens visuais, fonte Inter e escala de fonte.
- `database`: client SQLite, migrations, tipos e repositories.
- `services/backup`: criação e leitura do backup JSON.
- `assets/exercises`: biblioteca de exercícios e imagens.
- `hooks`: hooks globais do app.
- `utils`: utilitários globais compartilhados, como vínculos, séries e ids de exercício.

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
- A biblioteca de exercícios está em PT-BR em `assets/exercises/data/exerciseLibrary.ts`.

---

## English

Local-first mobile app for creating, organizing, and running gym workout plans.

The current focus of the app is the trainee experience: building a personal workout plan, tracking the active session, controlling rest time, and keeping everything saved on the device.

## Features

- Create and edit workout plans with free-form names.
- Organize exercises by weekday.
- Exercise library in Brazilian Portuguese, with normalized categories and visual previews when an image is available.
- Custom exercises without depending on the library.
- Per-exercise fields for description, methodology, sets, repetitions, load, and block linking.
- Linked exercises sharing the same sets table during the active session.
- Workout plan view with a button to start or resume training.
- Compact active session, expanding only one block at a time.
- Rest control with a header timer, notification, vibration, and sound on Android.
- Default rest-finished audio, with an option to import a custom audio file.
- Local persistence with SQLite.
- JSON backup import and export.
- Light/dark theme and font size adjustment.

## Stack

- Expo SDK 54
- React Native 0.81
- React 19
- TypeScript
- Expo Router
- Custom components in `components/ui`
- Inter font via Expo Font
- Expo SQLite
- Expo Audio
- Expo Document Picker
- React Native Notify Kit
- React Native Keyboard Controller

## Structure

The project is split by responsibility:

- `app/`: Expo Router routes. Screens stay thin and connect hooks + components.
- `features/home`: workout list, search, selection, import, and export.
- `features/note`: workout plan creation, editing, and viewing.
- `features/workout`: active session, sets, rest, notifications, and sound.
- `features/settings`: theme, font, and rest audio preferences.
- `features/exercise`: exercise library, visual preview, and exercise utilities.
- `features/navigation`: custom tab bar.
- `components/ui`: global interface components, such as `GlobalContainer`, inputs, modal, and dialogs.
- `theme`: light/dark theme, visual tokens, Inter font, and font scale.
- `database`: SQLite client, migrations, types, and repositories.
- `services/backup`: JSON backup creation and parsing.
- `assets/exercises`: exercise library and images.
- `hooks`: global app hooks.
- `utils`: shared global utilities, such as links, sets, and exercise ids.

## Main Routes

- `app/(tabs)/index.tsx`: Home with workout list.
- `app/(tabs)/settings.tsx`: Settings.
- `app/(main)/Note/index.tsx`: workout plan editing and viewing.
- `app/(main)/Workout/index.tsx`: active session execution.

## Local Data

The app uses local SQLite. The current tables are:

- `notes`: workout plans.
- `workout_state`: saved active session progress.
- `app_settings`: app preferences.

The JSON backup exports workouts, settings, and workout states. The custom rest audio file is not embedded in the backup; it can be imported again from settings.

## How to Run

Install dependencies:

```bash
npm install
```

Start Expo:

```bash
npm run start
```

Run directly on Android:

```bash
npm run android
```

Run on iOS:

```bash
npm run ios
```

Run in the browser:

```bash
npm run web
```

## Scripts

- `npm run start`: starts Expo.
- `npm run android`: builds/runs the app on Android.
- `npm run ios`: builds/runs the app on iOS.
- `npm run web`: starts the app in the browser.
- `npm run lint`: runs Expo lint.

For type checking:

```bash
npx tsc --noEmit
```

## Notes

- Rest notification, vibration, and sound behavior is mainly focused on Android.
- The exercise library is in PT-BR at `assets/exercises/data/exerciseLibrary.ts`.
