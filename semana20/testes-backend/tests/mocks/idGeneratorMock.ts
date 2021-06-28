export class IdGeneratorMock {
  public generate(): string {
    return "id_mock";
  }
}

export default new IdGeneratorMock()
