import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';


const products = [
  {
    id: 1,
    title: 'Oud Majesty',
    price: '399,99 DH',
    description:
      'Un parfum oriental boisé riche en oud, ambre et musc. Une fragrance élégante et noble.',
    image:
      'https://princeparfums.com/cdn/shop/files/MajesticOUDH_1200x.jpg?v=1710862010',
  },
  {
    id: 2,
    title: 'Bloom Essence',
    price: '259,99 DH',
    description:
      'Un parfum floral doux avec des notes de jasmin, rose et vanille. Parfait pour un usage quotidien.',
    image:
      'https://www.frenchessence.com/cdn/shop/files/BLOOM-_-AURA-WOMEN-PERFUMES.jpg?v=1760695059&width=1024',
  },
  {
    id: 3,
    title: 'Night Shadow',
    price: '299,99 DH',
    description:
      'Une fragrance intense mêlant cuir, patchouli et épices pour une touche mystérieuse.',
    image:
      'https://legrandparfum.ma/storage/products/ae853b1a-1786-404f-9bb8-d7fc21e7cc6c.webp',
  },
  {
    id: 4,
    title: 'Crystal Fresh',
    price: '189,99 DH',
    description:
      'Un parfum frais et énergisant avec des notes d’agrumes, menthe et musc blanc.',
    image:
      'https://www.tomhill.in/cdn/shop/files/DSC04218_811721f4-cac2-4f51-aeea-19bcc50692d6.jpg?v=1760288633&width=1400',
  },
];


export default function ProductList() {
  return (
    <ScrollView>
      {products.map((product) => (
        <View key={product.id} style={styles.card}>
          <Image
            source={{ uri: product.image }}
            style={{ width: '100%', height: 200 }}
          />

          <View style={styles.row}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
          </View>

          <Text style={styles.description}>{product.description}</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Acheter maintenant</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    margin: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },

  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e63946',
  },

  description: {
    color: '#555',
    marginVertical: 8,
  },

  button: {
    backgroundColor: '#1fbf57',
    paddingVertical: 12,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});