import test from 'ava';

import { CORRECT } from './correctResult';
import { categoryTree } from './task';

test('check result from categoryTree', async (t) => {
  const result = await categoryTree();
  t.deepEqual(result, CORRECT);
});
