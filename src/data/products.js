export const products = [
  { id: 1, name: 'Arc Ceramic Pitcher', category: 'Ceramics', price: 48, tag: 'Bestseller', image: 'photo-1578749556568-bc2c40e68b61' },
  { id: 2, name: 'Still Life Linen Throw', category: 'Textiles', price: 118, tag: 'New', image: 'photo-1600210492486-724fe5c67fb0' },
  { id: 3, name: 'Sunday Serving Bowl', category: 'Ceramics', price: 64, tag: '', image: 'photo-1490312278390-ab64016e0aa9' },
  { id: 4, name: 'Field Notes Candle', category: 'Objects', price: 36, tag: '', image: 'photo-1603006905003-be475563bc59' },
  { id: 5, name: 'Morrow Glass Carafe', category: 'Glassware', price: 52, tag: 'Low stock', image: 'photo-1514228742587-6b1558fcca3d' },
  { id: 6, name: 'Soft Form Table Lamp', category: 'Objects', price: 189, tag: '', image: 'photo-1507473885765-e6ed057f782c' },
  { id: 7, name: 'Pebble Cotton Napkins', category: 'Textiles', price: 42, tag: '', image: 'photo-1604578762246-41134e37f9cc' },
  { id: 8, name: 'Daily Ritual Mug Set', category: 'Ceramics', price: 58, tag: 'Set of 2', image: 'photo-1514228742587-6b1558fcca3d' },
]

export const photo = (id, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`