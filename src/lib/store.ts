import type { Course } from "./types";
import { writable } from "svelte/store";

export let selected_courses = writable <Course[]>([]);

