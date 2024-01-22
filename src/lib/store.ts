import type { Course, CourseResult } from "./types";
import { writable } from "svelte/store";

export let selected_courses = writable<Set<Course>>(new Set<Course>());

export let can_take = writable<CourseResult[]>([]);

