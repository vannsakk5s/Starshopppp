import { Component, inject, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { AdsComponent } from '../ads/ads.component';
import { ProductComponent } from '../product/product.component';
import { CopyrightComponent } from '../copyright/copyright.component';
import { CardComponent } from '../card/card.component';
import { RouterLink } from '@angular/router';
import { RuntxtComponent } from '../runtxt/runtxt.component';
// import { DataserviceService } from '../../service/dataservice.service';

@Component({
  selector: 'app-home',
  imports: [AdsComponent, ProductComponent, CopyrightComponent, CardComponent, RouterLink, RuntxtComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
product: any = [
  {
    "id": 2,
    "title": "Prime Colletor Series",
    "price": 10,
    "quantity": 1,
    "description": "ភេសជ្ជៈ Prime Hydration គឺជាភេសជ្ជៈដែលល្បីសម្រាប់រសជាតិទំពាំងបាយជូរ បំបាត់ការស្រេកទឹក និងអត្ថប្រយោជន៍មុខងារ។ វាត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ជាតិទឹកជាមួយនឹងអេឡិចត្រូលីត BCAAs វីតាមីន B និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម ខណៈពេលដែលមិនមានពណ៌សិប្បនិម្មិត ឬរសជាតិ។ ភេសជ្ជៈនេះគឺគ្មានជាតិកាហ្វេអ៊ីន និងគ្មានជាតិស្ករ ដែលទាក់ទាញដល់អត្តពលិក និងបុគ្គលដែលស្វែងរកជម្រើសជាតិទឹកដែលស្រស់ស្រាយ និងមានមុខងារ។",
    "images": [
      "https://drinkprime.com/cdn/shop/files/PRIME_hydration_1serve_16.9oz_US_CollectorSeries_00000_2000x.png?v=1748550723"
    ],
    "creationAt": "2025-10-10",
    "updatedAt": "2025-10-10"
  },
  {
    "id": 3,
    "title": "Sournova",
    "price": 9,
    "quantity": 1,
    "description": "ភេសជ្ជៈ Prime Hydration គឺជាភេសជ្ជៈដែលល្បីសម្រាប់រសជាតិទំពាំងបាយជូរ បំបាត់ការស្រេកទឹក និងអត្ថប្រយោជន៍មុខងារ។ វាត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ជាតិទឹកជាមួយនឹងអេឡិចត្រូលីត BCAAs វីតាមីន B និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម ខណៈពេលដែលមិនមានពណ៌សិប្បនិម្មិត ឬរសជាតិ។ ភេសជ្ជៈនេះគឺគ្មានជាតិកាហ្វេអ៊ីន និងគ្មានជាតិស្ករ ដែលទាក់ទាញដល់អត្តពលិក និងបុគ្គលដែលស្វែងរកជម្រើសជាតិទឹកដែលស្រស់ស្រាយ និងមានមុខងារ។",
    "images": [
      "https://drinkprime.com/cdn/shop/files/Sournova_Web_DropBanner_PDP_Front_2000x2000_ffba587e-02f2-491a-a375-5f5b3e7f2eb8_1200x.png?v=1744126206"
    ],
    "creationAt": "2025-10-10",
    "updatedAt": "2025-10-10"
  },
  {
    "id": 4,
    "title": "Peso Pluma",
    "price": 9,
    "quantity": 1,
    "description": "ភេសជ្ជៈ Prime Hydration គឺជាភេសជ្ជៈដែលល្បីសម្រាប់រសជាតិទំពាំងបាយជូរ បំបាត់ការស្រេកទឹក និងអត្ថប្រយោជន៍មុខងារ។ វាត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ជាតិទឹកជាមួយនឹងអេឡិចត្រូលីត BCAAs វីតាមីន B និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម ខណៈពេលដែលមិនមានពណ៌សិប្បនិម្មិត ឬរសជាតិ។ ភេសជ្ជៈនេះគឺគ្មានជាតិកាហ្វេអ៊ីន និងគ្មានជាតិស្ករ ដែលទាក់ទាញដល់អត្តពលិក និងបុគ្គលដែលស្វែងរកជម្រើសជាតិទឹកដែលស្រស់ស្រាយ និងមានមុខងារ។",
    "images": [
      "https://drinkprime.com/cdn/shop/files/Prime_hydration_1serve_16.9oz_US_PesoPluma_00000_1200x.png?v=1742393763"
    ],
    "creationAt": "2025-10-10",
    "updatedAt": "2025-10-10"
  },
  {
    "id": 5,
    "title": "Future Freeze",
    "price": 10,
    "quantity": 1,
    "description": "ភេសជ្ជៈ Prime Hydration គឺជាភេសជ្ជៈដែលល្បីសម្រាប់រសជាតិទំពាំងបាយជូរ បំបាត់ការស្រេកទឹក និងអត្ថប្រយោជន៍មុខងារ។ វាត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ជាតិទឹកជាមួយនឹងអេឡិចត្រូលីត BCAAs វីតាមីន B និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម ខណៈពេលដែលមិនមានពណ៌សិប្បនិម្មិត ឬរសជាតិ។ ភេសជ្ជៈនេះគឺគ្មានជាតិកាហ្វេអ៊ីន និងគ្មានជាតិស្ករ ដែលទាក់ទាញដល់អត្តពលិក និងបុគ្គលដែលស្វែងរកជម្រើសជាតិទឹកដែលស្រស់ស្រាយ និងមានមុខងារ។",
    "images": [
      "https://drinkprime.com/cdn/shop/files/PrimeHydration_US_1serve_FutureFreeze_00000_1200x.png?v=1738603072"
    ],
    "creationAt": "2025-10-10",
    "updatedAt": "2025-10-10"
  },
  {
    "id": 6,
    "title": "Ice Pop",
    "price": 5,
    "quantity": 1,
    "description": "ភេសជ្ជៈ Prime Hydration គឺជាភេសជ្ជៈដែលល្បីសម្រាប់រសជាតិទំពាំងបាយជូរ បំបាត់ការស្រេកទឹក និងអត្ថប្រយោជន៍មុខងារ។ វាត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ជាតិទឹកជាមួយនឹងអេឡិចត្រូលីត BCAAs វីតាមីន B និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម ខណៈពេលដែលមិនមានពណ៌សិប្បនិម្មិត ឬរសជាតិ។ ភេសជ្ជៈនេះគឺគ្មានជាតិកាហ្វេអ៊ីន និងគ្មានជាតិស្ករ ដែលទាក់ទាញដល់អត្តពលិក និងបុគ្គលដែលស្វែងរកជម្រើសជាតិទឹកដែលស្រស់ស្រាយ និងមានមុខងារ។",
    "images": [
      "https://drinkprime.com/cdn/shop/products/PrimeHydration_1serve_IcePop_0000_1200x.png?v=1656076690"
    ],
    "creationAt": "2025-10-10",
    "updatedAt": "2025-10-10"
  },
  {
    "id": 7,
    "title": "Cherry Freeze",
    "price": 6,
    "quantity": 1,
    "description": "ភេសជ្ជៈ Prime Hydration គឺជាភេសជ្ជៈដែលល្បីសម្រាប់រសជាតិទំពាំងបាយជូរ បំបាត់ការស្រេកទឹក និងអត្ថប្រយោជន៍មុខងារ។ វាត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ជាតិទឹកជាមួយនឹងអេឡិចត្រូលីត BCAAs វីតាមីន B និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម ខណៈពេលដែលមិនមានពណ៌សិប្បនិម្មិត ឬរសជាតិ។ ភេសជ្ជៈនេះគឺគ្មានជាតិកាហ្វេអ៊ីន និងគ្មានជាតិស្ករ ដែលទាក់ទាញដល់អត្តពលិក និងបុគ្គលដែលស្វែងរកជម្រើសជាតិទឹកដែលស្រស់ស្រាយ និងមានមុខងារ។",
    "images": [
      "https://drinkprime.com/cdn/shop/files/Prime_hydration_1serve_16.9oz_US_CherryFreeze_Fortis_00000_1200x.png?v=1745589968"
    ],
    "creationAt": "2025-10-10",
    "updatedAt": "2025-10-10"
  },
  {
    "id": 8,
    "title": "Lemon Lime",
    "price": 18,
    "quantity": 1,
    "description": "ភេសជ្ជៈ Prime Hydration គឺជាភេសជ្ជៈដែលល្បីសម្រាប់រសជាតិទំពាំងបាយជូរ បំបាត់ការស្រេកទឹក និងអត្ថប្រយោជន៍មុខងារ។ វាត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ជាតិទឹកជាមួយនឹងអេឡិចត្រូលីត BCAAs វីតាមីន B និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម ខណៈពេលដែលមិនមានពណ៌សិប្បនិម្មិត ឬរសជាតិ។ ភេសជ្ជៈនេះគឺគ្មានជាតិកាហ្វេអ៊ីន និងគ្មានជាតិស្ករ ដែលទាក់ទាញដល់អត្តពលិក និងបុគ្គលដែលស្វែងរកជម្រើសជាតិទឹកដែលស្រស់ស្រាយ និងមានមុខងារ។",
    "images": [
      "https://drinkprime.com/cdn/shop/files/lemonlimecombo_600x.png?v=1689355922"
    ],
    "creationAt": "2025-10-10",
    "updatedAt": "2025-10-10"
  },
  {
    "id": 9,
    "title": "Blue Raspberry",
    "price": 18,
    "quantity": 1,
    "description": "ភេសជ្ជៈ Prime Hydration គឺជាភេសជ្ជៈដែលល្បីសម្រាប់រសជាតិទំពាំងបាយជូរ បំបាត់ការស្រេកទឹក និងអត្ថប្រយោជន៍មុខងារ។ វាត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ជាតិទឹកជាមួយនឹងអេឡិចត្រូលីត BCAAs វីតាមីន B និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម ខណៈពេលដែលមិនមានពណ៌សិប្បនិម្មិត ឬរសជាតិ។ ភេសជ្ជៈនេះគឺគ្មានជាតិកាហ្វេអ៊ីន និងគ្មានជាតិស្ករ ដែលទាក់ទាញដល់អត្តពលិក និងបុគ្គលដែលស្វែងរកជម្រើសជាតិទឹកដែលស្រស់ស្រាយ និងមានមុខងារ។",
    "images": [
      "https://drinkprime.com/cdn/shop/files/blueraspberrycombo_600x.png?v=1689355792"
    ],
    "creationAt": "2025-10-10",
    "updatedAt": "2025-10-10"
  },
  {
    "id": 10,
    "title": "Tropical Punch",
    "price": 18,
    "quantity": 1,
    "description": "ភេសជ្ជៈ Prime Hydration គឺជាភេសជ្ជៈដែលល្បីសម្រាប់រសជាតិទំពាំងបាយជូរ បំបាត់ការស្រេកទឹក និងអត្ថប្រយោជន៍មុខងារ។ វាត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ជាតិទឹកជាមួយនឹងអេឡិចត្រូលីត BCAAs វីតាមីន B និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម ខណៈពេលដែលមិនមានពណ៌សិប្បនិម្មិត ឬរសជាតិ។ ភេសជ្ជៈនេះគឺគ្មានជាតិកាហ្វេអ៊ីន និងគ្មានជាតិស្ករ ដែលទាក់ទាញដល់អត្តពលិក និងបុគ្គលដែលស្វែងរកជម្រើសជាតិទឹកដែលស្រស់ស្រាយ និងមានមុខងារ។",
    "images": [
      "https://drinkprime.com/cdn/shop/files/tropicalpunchcombo_600x.png?v=1689355979"
    ],
    "creationAt": "2025-10-10",
    "updatedAt": "2025-10-10"
  },
  {
    "id": 11,
    "title": "Strawberry Watermelon",
    "price": 18,
    "quantity": 1,
    "description": "ភេសជ្ជៈ Prime Hydration គឺជាភេសជ្ជៈដែលល្បីសម្រាប់រសជាតិទំពាំងបាយជូរ បំបាត់ការស្រេកទឹក និងអត្ថប្រយោជន៍មុខងារ។ វាត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ជាតិទឹកជាមួយនឹងអេឡិចត្រូលីត BCAAs វីតាមីន B និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម ខណៈពេលដែលមិនមានពណ៌សិប្បនិម្មិត ឬរសជាតិ។ ភេសជ្ជៈនេះគឺគ្មានជាតិកាហ្វេអ៊ីន និងគ្មានជាតិស្ករ ដែលទាក់ទាញដល់អត្តពលិក និងបុគ្គលដែលស្វែងរកជម្រើសជាតិទឹកដែលស្រស់ស្រាយ និងមានមុខងារ។",
    "images": [
      "https://drinkprime.com/cdn/shop/files/Prime_HydrationStick_combo_StrawberryWatermelon_0000_600x.png?v=1689354710"
    ],
    "creationAt": "2025-10-10",
    "updatedAt": "2025-10-10"
  },
  {
    "id": 12,
    "title": "Lemonade",
    "price": 18,
    "quantity": 1,
    "description": "ភេសជ្ជៈ Prime Hydration គឺជាភេសជ្ជៈដែលល្បីសម្រាប់រសជាតិទំពាំងបាយជូរ បំបាត់ការស្រេកទឹក និងអត្ថប្រយោជន៍មុខងារ។ វាត្រូវបានបង្កើតឡើងដើម្បីផ្តល់ជាតិទឹកជាមួយនឹងអេឡិចត្រូលីត BCAAs វីតាមីន B និងសារធាតុប្រឆាំងអុកស៊ីតកម្ម ខណៈពេលដែលមិនមានពណ៌សិប្បនិម្មិត ឬរសជាតិ។ ភេសជ្ជៈនេះគឺគ្មានជាតិកាហ្វេអ៊ីន និងគ្មានជាតិស្ករ ដែលទាក់ទាញដល់អត្តពលិក និងបុគ្គលដែលស្វែងរកជម្រើសជាតិទឹកដែលស្រស់ស្រាយ និងមានមុខងារ។",
    "images": [
      "https://drinkprime.com/cdn/shop/files/Side_c721f2a4-4cf7-4a82-819e-91495f647aa7_600x.png?v=1684162721"
    ],
    "creationAt": "2025-10-10",
    "updatedAt": "2025-10-10"
  }
]

// private dataService = inject(DataserviceService)
private cdr = inject(ChangeDetectorRef)

  listCard: any[] = [];

  ngOnInit() {
    const savedList = localStorage.getItem('listCard') ?? '[]';
    this.listCard = JSON.parse(savedList);
    console.log(this.listCard);
  }

  event_(product: any) {
    const existingProduct = this.listCard.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      const newItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        images: product.images,
        quantity: 1,
        creationAt: product.creationAt,
      };
      this.cdr.detectChanges()
      console.log(newItem);
      console.log(this.listCard);
      this.listCard.push(newItem);
    }
    localStorage.setItem('listCard', JSON.stringify(this.listCard));
  }

  findcard(product_id:any){
    return this.listCard.find(x => x.id == product_id)
  }


  listDetail:any [] = []
  detailEv_ (product:any) {
    this.listDetail.push(product)
    localStorage.setItem('listDetail', JSON.stringify(this.listDetail))
  }
  

  // product:any [] = []

  // loadProduct() {
  //   this.dataService.getproducts().subscribe({
  //     next:(res:any)=>{
  //       this.product = res
  //          console.log(this.product)

  //     },
  //     error: err => console.error('Error:', err)
  //   })
  // }
}
