import { PipeTransform, Pipe } from '@angular/core';
import { Products } from 'src/app/models/products';

@Pipe({
name:'productFilter'
})

export class ProductFilterPipe implements PipeTransform {
    transform(products: Products[], searchTerm: string):Products[] {
        if (!products || !searchTerm) {
            return products;
        }

        return products.filter(product => 
            product.descripcion.toLowerCase().indexOf(searchTerm.toLowerCase()) !==-1);

    }
}