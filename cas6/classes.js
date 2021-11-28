// class Rectangle {
//     constructor(width, height){
//         this.width=width
//         this.height=height
//     }
//     calculateArea () {
//         const area = this.width * this.height
//         return area
//     }
// }

// const Rect1 = new Rectangle (30,21)
// const area1 = Rect1.calculateArea()
// console.log(area1)



class Car{
    constuctor(model, color, length, year, maxspeed, currspeed){
        this.model=model
        this.color=color
        this.length=length
        this.year=year
        this.maxspeed=maxspeed
        this.currspeed=currspeed
    }
    goFaster (acceleration){
        this.currspeed += acceleration
        if (this.currspeed >= this.maxspeed){
            console.log('Max spead reached no more acceleration possible')
        }else {
            console.log(`Accelerating by ${acceleration} km/h`)
        }
    }
    goSlower (deceleration){
        this.currspeed -= deceleration
        if (this.currspeed<1){
            console.log('Car is stopping')
        }else{
            console.log(`Slowing down by ${deceleration} km/h`)
        }
    }
}

const Jeep = new Car (
    'Fiat',
    'Black',
    4,
    2021,
    110,
    20
)

class Product {
    constuctor(name, price){
        this.name=name
        this.price=price
    }
}

class ShopingCart{
    constuctor(products){
        this.products=products
    }
    totalPrice(){
        const total=0
        this.products.forEach(product =>{
            total=total=product.price
            console.log(total)
        })
    }
}

const Milk = new Product ('milk', 40)
const Bread = new Product ('bread', 20)

const Breakfast = new ShopingCart([Milk, Bread])
