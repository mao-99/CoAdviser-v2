import type { Course, CourseResult } from "./types";
import { writable } from "svelte/store";

export let can_take = writable<CourseResult[]>([]);
