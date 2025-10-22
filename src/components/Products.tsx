import { ProductsSettings } from '../types/theme';

interface ProductsProps {
  settings: ProductsSettings;
}

const mockProducts = [
  {
    id: 1,
    name: 'Premium Product 1',
    price: '$99.99',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 2,
    name: 'Premium Product 2',
    price: '$149.99',
    image: 'https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 3,
    name: 'Premium Product 3',
    price: '$79.99',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 4,
    name: 'Premium Product 4',
    price: '$199.99',
    image: 'https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 5,
    name: 'Premium Product 5',
    price: '$129.99',
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  },
  {
    id: 6,
    name: 'Premium Product 6',
    price: '$89.99',
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1'
  }
];

export default function Products({ settings }: ProductsProps) {
  const displayedProducts = mockProducts.slice(0, settings.item_count);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          {settings.headline}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-xl font-bold text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
