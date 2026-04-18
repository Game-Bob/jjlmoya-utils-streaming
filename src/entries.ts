export { sorteo } from './tool/sorteo/entry';
export type { SorteoLocaleContent } from './tool/sorteo/entry';
export { tebasCheck } from './tool/tebasCheck/entry';
export type { TebasCheckLocaleContent } from './tool/tebasCheck/entry';
export { streamingCategory } from './category';
import { sorteo } from './tool/sorteo/entry';
import { tebasCheck } from './tool/tebasCheck/entry';
export const ALL_ENTRIES = [sorteo, tebasCheck];
