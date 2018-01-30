import { DefaultPipe } from './default.pipe';

describe('Pipe: Default', () => {
  let pipe: DefaultPipe;

  beforeEach(() => {
    pipe = new DefaultPipe;
  });

  it('providing no value return fallback', () => {
    expect(pipe.transform('', 'http://place-hold-it/300', false))
      .toBe('http://place-hold-it/300');
  });
});
