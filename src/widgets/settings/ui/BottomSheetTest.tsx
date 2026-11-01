import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { Button, Text, View } from "react-native";

export function BottomSheetTest() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  return (
    <View style={{ padding: 20 }}>
      <Button
        title="Open test Bottom Sheet"
        onPress={() => {
          console.log("TEST: present()");
          bottomSheetRef.current?.present();
        }}
      />

      <BottomSheetModal
        ref={bottomSheetRef}
        index={0}
        snapPoints={["50%"]}
        enableDynamicSizing={false}
        backgroundStyle={{ backgroundColor: "#FFFFFF" }}
        handleIndicatorStyle={{ backgroundColor: "#000000" }}
        onChange={(index) => console.log("TEST: onChange", index)}
        onDismiss={() => console.log("TEST: dismissed")}
      >
        <BottomSheetView
          style={{
            flex: 1,
            padding: 24,
            backgroundColor: "#FFFFFF",
          }}
        >
          <Text style={{ color: "#000000", fontSize: 24 }}>
            Bottom Sheet works!
          </Text>
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
}
