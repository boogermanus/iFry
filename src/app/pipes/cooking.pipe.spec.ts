import { CookingPipe } from './cooking.pipe';

describe('CookingPipe', () => {
  it('create an instance', () => {
    const pipe = new CookingPipe();
    expect(pipe).toBeTruthy();
  });
});
