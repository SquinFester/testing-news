import { View, Text, Image, TouchableOpacity } from "react-native";
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";

type RestaurantCardProps = {
  id: string;
  imgUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: string[];
  long: number;
  lat: 0;
};

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}: RestaurantCardProps) => {
  return (
    <TouchableOpacity
      key={id}
      style={{
        borderRadius: 15,
      }}
    >
      <Image
        source={{
          uri: imgUrl,
          width: 250,
          height: 150,
        }}
      />
      <View
        style={{
          backgroundColor: "#fff",
          width: "100%",
          paddingHorizontal: 5,
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {title}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <StarIcon color="#00CCBB" size={20} />

          <Text style={{ fontSize: 14 }}>
            <Text style={{ color: "#00CCBB" }}>{rating}</Text> • {genre}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <MapPinIcon color={"gray"} size={20} />

          <Text style={{ fontSize: 14 }}>Nearby • {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default RestaurantCard;
