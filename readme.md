# PipouColors v1.0.1

![Clowned Space](https://img.shields.io/badge/CLOWNED-SPACE-fca5a5?style=for-the-badge)
[![Github](https://img.shields.io/badge/PipouColors-SPACE-fca5a5?style=for-the-badge&logo=github)](https://github.com/Nobodyno-boop/pipoucolor)

Your beautifull gradient placeholder !

- [Getting started](#getting-started)
  - [Environements variables](#environement-variable)
  - [Required](#required)
- [Routes](#samples-routes)
- [Routes Properties](#routes-properties)

## Getting started

fastify server is served at port 3000 by default, you can change it in the `.env` file. You can check [other variable](#environement-variable)

You want to start a PipouColors server ? Follow this instruction.

Before check if you have already install all [tools with need](#required)

```bash
git clone https://github.com/Nobodyno-boop/pipoucolor
```

Don't forget to enter in the folder and install node libraries.

You can run the server and enjoy

```bash
npm run start
```

You can also edit the server with hot-reload

```bash
npm run dev
```

### Environement variable

| name | type   | default |
| ---- | ------ | ------- |
| PORT | number | 3000    |
| HOST | string | 0.0.0.0 |

### Required

| name   | version                    | infos                                                            |
| ------ | -------------------------- | ---------------------------------------------------------------- |
| nodejs | >=6.0.0                    | tested with v16.13.2                                             |
| python | v3.7, v3.8, v3.9, or v3.10 | [see here why ](https://github.com/nodejs/node-gyp#installation) |

## Samples routes

| route used                              | url                                                                                                        | result                                                                    |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `api/v1/:width/`                        | [api/v1/50/](pipoucolors.clownerie.space/api/v1/50/)                                                       | ![api](pipoucolors.clownerie.space/api/v1/50/)                            |
| `api/v1/:width/:height/`                | [api/v1/50/70/](pipoucolors.clownerie.space/api/v1/50/70/)                                                 | ![api](pipoucolors.clownerie.space/api/v1/50/70/)                         |
| `api/v1/:width/:height/:colors/`        | [api/v1/50/50/E36387,FCFFA6/](pipoucolors.clownerie.space/api/v1/50/50/E36387,FCFFA6/)                     | ![api](pipoucolors.clownerie.space/api/v1/50/50/E36387,FCFFA6/)           |
| `api/v1/:width/:height/:colors/:angle/` | [api/v1/50/50/E36387,FCFFA6/180/](pipoucolors.clownerie.space/api/v1/50/50/E36387,FCFFA6/180/)             | ![api](pipoucolors.clownerie.space/api/v1/50/50/E36387,FCFFA6/180/)       |
| `api/v1/:width/:height/:colors/`        | [api/v1/50/50/FA8BFF,2BD2FF,2BFF88/](pipoucolors.clownerie.space/api/v1/50/50/FA8BFF,2BD2FF,2BFF88/)       | ![api](pipoucolors.clownerie.space/api/v1/50/50/FA8BFF,2BD2FF,2BFF88/)    |
| `api/v1/:width/:height/:colors/:angle/` | [api/v1/50/50/FA8BFF,2BD2FF,2BFF88/90/](pipoucolors.clownerie.space/api/v1/50/50/FA8BFF,2BD2FF,2BFF88/90/) | ![api](pipoucolors.clownerie.space/api/v1/50/50/FA8BFF,2BD2FF,2BFF88/90/) |

## Routes properties

| name   | type   | option                            |
| ------ | ------ | --------------------------------- |
| height | number | min: 1, max: 1000                 |
| width  | number | min: 1, max: 1000                 |
| colors | string | min: 12, max: 60 (10 hex color !) |
| angle  | number | min: 0, max: 360                  |

> Thanks to [cssgradient.io](https://cssgradient.io/gradient-backgrounds/) ♥
