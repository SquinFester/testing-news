import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  StatusBar,
  ScrollView,
} from "react-native";
import { useLayoutEffect } from "react";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <StatusBar backgroundColor="#000" />
      <View
        style={{
          paddingBottom: 15,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          paddingHorizontal: 15,
        }}
      >
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          style={{
            height: 30,
            width: 30,
            backgroundColor: "lightgray",
            borderRadius: 9999,
          }}
        />
        <View
          style={{
            flex: 1,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "lightgray",
              fontSize: 12,
            }}
          >
            Deliver Now!
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 10,
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            backgroundColor: "#e5e7eb",
            padding: 5,
            flex: 1,
          }}
        >
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Search..."
            keyboardType="default"
            style={{
              width: "100%",
            }}
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      <ScrollView
        style={{
          backgroundColor: "#f3f4f6",
        }}
        contentContainerStyle={{
          paddingBottom: 10,
        }}
      >
        <Categories />

        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
        <FeaturedRow
          id="1234"
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
        <FeaturedRow
          id="1235"
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
