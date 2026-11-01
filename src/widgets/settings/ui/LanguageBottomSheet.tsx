import { Language } from "@/shared/i18n";
import { useAppTheme } from "@/shared/theme";
import { AppColors } from "@/shared/theme/types/theme.types";
import { StyledIcon, StyledText } from "@/shared/ui";

import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

import { forwardRef, useCallback, useMemo } from "react";

import { Pressable, StyleSheet, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

interface LanguageBottomSheetProps {
  selectedLanguage: Language;
  onSelect: (language: Language) => void;
  onClose: () => void;
}

const LANGUAGE_OPTIONS: {
  value: Language;
  label: string;
  nativeLabel: string;
}[] = [
  {
    value: "ru",
    label: "Русский",
    nativeLabel: "Russian",
  },
  {
    value: "en",
    label: "English",
    nativeLabel: "English",
  },
];

export const LanguageBottomSheet = forwardRef<
  BottomSheetModal,
  LanguageBottomSheetProps
>(({ selectedLanguage, onSelect, onClose }, ref) => {
  const { colors } = useAppTheme();
  const styles = createStyles(colors);
  const insets = useSafeAreaInsets();

  const snapPoints = useMemo(() => ["50%"], []);

  const renderBackdrop = useCallback(
    (props: React.ComponentProps<typeof BottomSheetBackdrop>) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        pressBehavior="close"
        opacity={0.5}
      />
    ),
    [],
  );

  const handleSelect = (language: Language) => {
    onSelect(language);
    ref && typeof ref !== "function" && ref.current?.dismiss();
  };

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      enableDynamicSizing={false}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
      onDismiss={onClose}
      backgroundStyle={styles.background}
      handleIndicatorStyle={styles.handleIndicator}
    >
      <BottomSheetView
        style={[
          styles.content,
          {
            paddingBottom: Math.max(insets.bottom, 20),
          },
        ]}
      >
        <View style={styles.header}>
          <StyledText variant="headlineMd">Choose language</StyledText>

          <StyledText
            variant="bodySm"
            color="secondary"
            style={styles.subtitle}
          >
            Select your preferred interface language
          </StyledText>
        </View>

        <View style={styles.options}>
          {LANGUAGE_OPTIONS.map((language) => {
            const isSelected = selectedLanguage === language.value;

            return (
              <Pressable
                key={language.value}
                onPress={() => handleSelect(language.value)}
                accessibilityRole="radio"
                accessibilityState={{
                  checked: isSelected,
                }}
                style={[styles.option, isSelected && styles.selectedOption]}
              >
                <View style={styles.optionText}>
                  <StyledText variant="bodyMd">{language.label}</StyledText>

                  <StyledText variant="bodySm" color="secondary">
                    {language.nativeLabel}
                  </StyledText>
                </View>

                {isSelected && (
                  <StyledIcon
                    name="checkmark-circle"
                    color={colors.primary}
                    size={22}
                  />
                )}
              </Pressable>
            );
          })}
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

LanguageBottomSheet.displayName = "LanguageBottomSheet";

const createStyles = (colors: AppColors) =>
  StyleSheet.create({
    background: {
      backgroundColor: colors.surface,
    },

    handleIndicator: {
      backgroundColor: colors.textMuted,
      width: 36,
    },

    content: {
      flex: 1,
      paddingHorizontal: 24,
      paddingTop: 12,
    },

    header: {
      marginBottom: 24,
    },

    subtitle: {
      marginTop: 6,
    },

    options: {
      gap: 10,
    },

    option: {
      minHeight: 68,
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderRadius: 14,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.surfaceSecondary,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    selectedOption: {
      borderColor: colors.primary,
      backgroundColor: colors.surfaceTertiary,
    },

    optionText: {
      gap: 4,
    },
  });
