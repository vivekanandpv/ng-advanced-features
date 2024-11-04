import { JsonClonePipe } from './json-clone.pipe';

describe('JsonClonePipe', () => {
  it('create an instance', () => {
    const pipe = new JsonClonePipe();
    expect(pipe).toBeTruthy();
  });
});
