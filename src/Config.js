class Config {
  static read = key => process.env[key];
}

export default Config;
