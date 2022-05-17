import { writable } from 'svelte/store';
import { storeA } from './storeA';
import { storeB } from './storeB';

export const exampleStore = writable([storeA, storeB]);
