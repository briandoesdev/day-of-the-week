# Day of the Week Calculator

A simple module that calculates the day of the week for any given date, using the **Zeller's Congruence** algorithm. This project was developed to explore Deno 2 runtime features and experiment with publishing a package on [jsr.io](https://jsr.io).

Feel free to use it for any purpose — it was primarily built for personal experimentation with Deno 2.

## Installation

To use this module, you can import it directly from [jsr.io](https://jsr.io) into your Deno 2 project:

```ts
import { dayOfTheWeek } from "jsr:@briandoesdev/day-of-the-week";
```

## Usage

Here's a quick example:

```ts
import { dayOfTheWeek } from "jsr:@briandoesdev/day-of-the-week";

const year = 1971;
const month = 1;
const day = 1;

const result = dayOfTheWeek(year, month, day);

console.log(`The day of the week is: ${result}`);
```

This will output the day of the week as a string (e.g., "Saturday", "Sunday").

## API

### `dayOfTheWeek(year: number, month: number, day: number): string`

- **year**: The full year (e.g., 2024).
- **month**: The month as a number (1 for January, 2 for February, ..., 12 for December).
- **day**: The day of the month.

Returns the day of the week as a string.

### Important Notes

- For calculation purposes, January and February are treated as the 13th and 14th months of the previous year, according to the algorithm's requirements.
- The algorithm is derived from **Zeller's Congruence**.

## Contributing

This project was created as an experiment, but if you're interested in contributing, feel free to fork the repo and submit a pull request!

## License

This project is licensed under **Unlicense**. See the [LICENSE](./LICENSE.md) file for details.

---

Enjoy experimenting with this module as much as I did!