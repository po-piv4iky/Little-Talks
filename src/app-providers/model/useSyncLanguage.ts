import { useEffect } from "react";

import { useSettingsStore } from "@/entities/settings";
import { i18n, i18nReady } from "@/shared/i18n";

// Синхронизация языка при загрузке приложения
export function useSyncLanguage() {
  // Получаем выбранный язык из Zustand
  const language = useSettingsStore((state) => state.language);

  // Проверяем, восстановились ли настройки из AsyncStorage
  const hasHydrated = useSettingsStore((state) => state.hasHydrated);

  useEffect(() => {
    // Пока Zustand не восстановил сохранённые настройки,
    // синхронизацию не выполняем.
    if (!hasHydrated) return;

    // Флаг определяет, актуален ли текущий запуск эффекта
    let isActive = true;

    const syncLanguage = async () => {
      try {
        // Ждём завершения инициализации i18next
        await i18nReady;

        // Проверяем, что эффект всё ещё актуален.
        // Если язык уже совпадает, ничего менять не нужно.
        if (!isActive || i18n.language === language) return;

        // Применяем выбранный пользователем язык
        await i18n.changeLanguage(language);
      } catch (error) {
        console.error("Language synchronization error:", error);
      }
    };

    // Запускаем асинхронную синхронизацию,
    // не заставляя useEffect возвращать Promise
    void syncLanguage();

    // Очистка эффекта при повторном запуске или размонтировании
    return () => {
      isActive = false;
    };
  }, [language, hasHydrated]);
}
