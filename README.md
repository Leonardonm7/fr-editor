# FR Editor

[Português](#fr-editor) | [English](#english)

Aplicativo Android local-first para criar, organizar e executar planos de treino de academia.

O foco do app é permitir que o usuário monte a própria ficha, acompanhe seus treinos e mantenha os dados salvos no dispositivo.

## Funcionalidades

- Criação e edição de planos de treino.
- Organização de exercícios por dia da semana.
- Biblioteca de exercícios com suporte a exercícios personalizados.
- Configuração de séries, repetições, carga, metodologia e observações.
- Acompanhamento da sessão de treino e dos intervalos de descanso.
- Notificações, vibração e som para o fim do descanso.
- Persistência local com SQLite.
- Importação e exportação de backup em JSON.
- Tema claro e escuro, além de preferências de exibição.

## Tecnologias

- Expo
- React Native
- React
- TypeScript
- Expo Router
- Expo SQLite
- Expo Audio

Outras bibliotecas do ecossistema React Native são utilizadas para navegação, interface, notificações e integração com recursos do dispositivo.

## Estrutura

O projeto é organizado por responsabilidade:

- `app/`: rotas e telas da aplicação.
- `features/`: funcionalidades separadas por domínio, como treinos, exercícios e configurações.
- `components/ui/`: componentes compartilhados de interface.
- `theme/`: temas, tokens visuais e fontes.
- `database/`: configuração, migrações e acesso ao banco de dados local.
- `services/`: serviços compartilhados, como importação e exportação de dados.
- `assets/`: imagens, fontes, sons e outros recursos estáticos.
- `hooks/` e `utils/`: hooks e utilitários compartilhados.

## Dados locais

Os dados do aplicativo são armazenados localmente com SQLite. Isso inclui os planos de treino, o progresso das sessões e as preferências do usuário.

O aplicativo também permite importar e exportar backups em JSON.

## Como rodar

Instale as dependências:

```bash
npm install
```

Inicie o Expo:

```bash
npm run start
```

Para executar no Android:

```bash
npm run android
```

## Verificações

Execute o lint:

```bash
npm run lint
```

Verifique os tipos:

```bash
npx tsc --noEmit
```

---

## English

Local-first Android app for creating, organizing, and running gym workout plans.

The app focuses on allowing users to build their own workout plans, track training sessions, and keep their data saved on the device.

## Features

- Create and edit workout plans.
- Organize exercises by weekday.
- Exercise library with support for custom exercises.
- Configure sets, repetitions, load, training method, and notes.
- Track workout sessions and rest intervals.
- Notifications, vibration, and sound for rest completion.
- Local persistence with SQLite.
- JSON backup import and export.
- Light and dark themes, along with display preferences.

## Technologies

- Expo
- React Native
- React
- TypeScript
- Expo Router
- Expo SQLite
- Expo Audio

Other libraries from the React Native ecosystem are used for navigation, interface components, notifications, and device integrations.

## Structure

The project is organized by responsibility:

- `app/`: application routes and screens.
- `features/`: features separated by domain, such as workouts, exercises, and settings.
- `components/ui/`: shared interface components.
- `theme/`: themes, visual tokens, and fonts.
- `database/`: local database configuration, migrations, and data access.
- `services/`: shared services, such as data import and export.
- `assets/`: images, fonts, sounds, and other static resources.
- `hooks/` and `utils/`: shared hooks and utilities.

## Local data

Application data is stored locally with SQLite. This includes workout plans, session progress, and user preferences.

The application also supports importing and exporting backups in JSON format.

## How to run

Install the dependencies:

```bash
npm install
```

Start Expo:

```bash
npm run start
```

To run on Android:

```bash
npm run android
```

## Checks

Run lint:

```bash
npm run lint
```

Check the types:

```bash
npx tsc --noEmit
```
