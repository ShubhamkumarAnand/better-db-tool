# kysely-Prisma

Prisma for Schema + Migration
Kysely for querying the data from the database

## Instructions

### Setup

```bash
bun install

# Setup the .env file and fill the required field
cp .env.example .env

bun db:migrate init # (Your choice Name)
```

### Development Setup

```bash
 bun dev
```

### Production Environment

```bash
bun run build bun start
```
