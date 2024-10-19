import { assertEquals } from "@std/assert";
import { dayOfTheWeek } from "./main.ts";

Deno.test(function dayOfWeekDoesEqual() {
  assertEquals(dayOfTheWeek(2024, 10, 19), "Saturday");
});
