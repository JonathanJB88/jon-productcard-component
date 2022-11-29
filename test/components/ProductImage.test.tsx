import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('Should render the component with the personalized Image', () => {
    const wrapper = renderer.create(<ProductImage img="https://image.jpg" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Should show the default product image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
