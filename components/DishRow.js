import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Currency from 'react-currency-formatter';

const DishRow = ({id, name, description, price, image}) => {
  return (
    <TouchableOpacity className="">
      <View>
        <Text className="text-lg mb-1">{name}</Text>
        <Text className="text-gray-500">{description}</Text>
        <Text>
          <Currency quantity={price} currency="USD" />
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default DishRow;
