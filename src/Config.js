
class Config {
  static read = key => console.log(process.env) || process.env[key]
}


export default Config