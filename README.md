# Travel Log Github Project Creator

A tool to create all the labels, issues and project cards for the Travel Log project.

## Setup

### Repo / Project Setup

1. Create a repo on github
2. Add a project to the repo and choose the "Kanban" template

### Tool Setup

Create a .env file and update with your values.

You can create a github token with the "repo" and "project" scope [here](https://github.com/settings/tokens/new).

```sh
cp .env.example .env
```

Install dependencies:

```sh
pnpm install
```

## Run

Run the tool to create the labels, issues and project cards.

```sh
pnpm start
```

## Use this tool for other projects

- The stories are in the [./data](./data) folder as markdown files.
  - Epics are in [./data/epics/](./data/epics/)
  - User stories are in [./data/stories/](./data/stories/)
    - Each story file name should start with the corresponding epic story number.
- The priority / order of stories on the board is in [./data/priority.json](./data/priority.json)
- The code in [./src/index.ts](./src/index.ts) reads the markdown files in and creates the labels, issues and project cards accordingly.
