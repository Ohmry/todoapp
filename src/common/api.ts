export abstract class API {
  private static getFunctions(): Array<string> {
    const functions = Reflect.ownKeys(this.prototype) as Array<string>
    return functions.filter((name) => name != 'constructor')
  }

  public static toJSON(): JSON {
    const json = {}
    this.getFunctions().forEach((func) => {
      json[func] = this.prototype[func]
    })
    return json as JSON
  }
}
