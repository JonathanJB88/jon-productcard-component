# Jon-ProductCard-Component

This is a product card component.

### Jonathan Bracho

## Example

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'jon-productcard-component'
```

```
 <ProductCard
    product={product}
    initialValues={{
      count: 4,
      maxCount: 10,
    }}
  >
    {({ reset, increaseBy, isMaxCountReached, count }) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </>
      )}
  </ProductCard>
```
