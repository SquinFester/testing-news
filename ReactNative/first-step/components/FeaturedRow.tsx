import { View, Text, ScrollView } from "react-native";
import { ArrowSmallRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({
  title,
  id,
  description,
  featuredCategory,
}: {
  id: string;
  title: string;
  description: string;
  featuredCategory: string;
}) => {
  return (
    <View
      style={{
        paddingTop: 15,
        paddingHorizontal: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: 10,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
          <Text style={{ fontSize: 12, color: "gray" }}>{description}</Text>
        </View>
        <ArrowSmallRightIcon color="#00CCBB" size={30} />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 15,
        }}
      >
        <RestaurantCard
          id={"2131"}
          imgUrl={"https://links.papareact.com/gn7"}
          title={"Yo! Shushi"}
          rating={4.5}
          genre={"Japanese"}
          address={"123 Main St"}
          short_description={"This is a Test asd"}
          dishes={[""]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={"2131"}
          imgUrl={"https://links.papareact.com/gn7"}
          title={"Yo! Shushi"}
          rating={4.5}
          genre={"Japanese"}
          address={"123 Main St"}
          short_description={"This is a Test asd"}
          dishes={[""]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={"2131"}
          imgUrl={"https://links.papareact.com/gn7"}
          title={"Yo! Shushi"}
          rating={4.5}
          genre={"Japanese"}
          address={"123 Main St"}
          short_description={"This is a Test asd"}
          dishes={[""]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={"2131"}
          imgUrl={"https://links.papareact.com/gn7"}
          title={"Yo! Shushi"}
          rating={4.5}
          genre={"Japanese"}
          address={"123 Main St"}
          short_description={"This is a Test asd"}
          dishes={[""]}
          long={20}
          lat={0}
        />
        <RestaurantCard
          id={"2131"}
          imgUrl={"https://links.papareact.com/gn7"}
          title={"Yo! Shushi"}
          rating={4.5}
          genre={"Japanese"}
          address={"123 Main St"}
          short_description={"This is a Test asd"}
          dishes={[""]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};
export default FeaturedRow;
