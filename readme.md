# PipouColors

![Clowned Space](https://img.shields.io/badge/CLOWNED-SPACE-fca5a5?style=for-the-badge)
[![Github](https://img.shields.io/badge/PipouColors-SPACE-fca5a5?style=for-the-badge&logo=github)](https://github.com/Nobodyno-boop/pipoucolor)

Build with fastify

- Free to use on your local projet or online.

- [API](#api)
- [Params Properties](#params-properties)

## Api

All api routes

| route                                           | sample                                                             | result                                  |
| ----------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------- |
| `api/v1/:width/`                                | [api/v1/50/](api/v1/50/)                                           | ![api](api/v1/50/)                      |
| `api/v1/:width/:height/`                        | [api/v1/50/70/](api/v1/50/70/)                                     | ![api](api/v1/50/70/)                   |
| `api/v1/:width/:height/:color1/:color2/`        | [api/v1/50/50/C1FFD7/FCFFA6](api/v1/50/50/E36387/FCFFA6)           | ![api](api/v1/50/50/E36387/FCFFA6/)     |
| `api/v1/:width/:height/:color1/:color2/:angle/` | [api/v1/50/50/E36387/FCFFA6/180/](api/v1/50/50/E36387/FCFFA6/180/) | ![api](api/v1/50/50/E36387/FCFFA6/180/) |

## Params properties

| name   | type   | option            |
| ------ | ------ | ----------------- |
| height | number | min: 1, max: 1000 |
| width  | number | min: 1, max: 1000 |
| color1 | string | min: 1, max: 6    |
| color2 | string | min: 1, max: 6    |
| angle  | number | min: 0, max: 360  |
