import { ReverseUppercasePipe } from './reverse-uppercase.pipe';

describe('ReverseUppercasePipe', () => {
  it('create an instance', () => {
    const pipe = new ReverseUppercasePipe();
    expect(pipe).toBeTruthy();
  });
});
