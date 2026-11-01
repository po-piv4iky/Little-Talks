module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-worklets/plugin"],
  };
};

// presets — наборы предварительных настроек Babel.
// plugins — дополнительные преобразования кода.
// react-native-worklets/plugin — преобразование Worklets.
// api.cache(true) — разрешает Babel кэшировать результат конфигурации.
