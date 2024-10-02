import { taskFirst, taskNext } from './0-constants';

test('taskFirst should return the correct string', () => {
  expect(taskFirst()).toBe('I prefer const when I can.');
});

test('taskNext should return the correct concatenated string', () => {
  expect(taskNext()).toBe('But sometimes let is okay');
});
