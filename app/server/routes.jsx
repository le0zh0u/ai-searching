import productRoutes from 'server/controller/product-controller';

export default function routes(app) {
    app.use('/products', productRoutes);
}
