const products = [
{id:'1', name:'Sillón Didactico Unicornio', price:'$8000' , stock:10 , category: 'sillones', description:'lalala' , foto: 'https://i.postimg.cc/t1dvBBY1/sun.webp'},
{id:'2', name:'Sillón Didactico Panda',price:'$8000' , stock:20 , category:'sillones ', description:'Body bebe del PSG varios colores' , foto:'https://i.postimg.cc/0McWsrGP/sillon-panda-nene.webp'} ,
{id:'3', name:'Sillón Didáctico Hipo', price:'$8000' , stock:30 , category:'sillones', description:'Body bebe del PSG varios colores' , foto: 'https://i.postimg.cc/f3Qg7GTn/sillon-hipo-nene.webp'} ,
{id:'4', name:'Sillón Didáctico Panda (rosa)', price: '$8000', stock:15 , category:'sillones', description:'Body bebe del PSG varios colores' , foto: 'https://i.postimg.cc/CBFPXbqc/sillon-panda-nenas.webp'} ,
{id:'5', name:'Body mangas largas', price:'$850' , stock:25 , category:'RopaBebe', description:'Body bebe del PSG varios colores' , foto: 'https://dtcpublicidad.es/wp-content/uploads/2018/10/body-de-manga-larga-para-personalizar-azul-marino-750x808.jpg'} ,
{id:'6', name:'Body mangas cortas', price:'$850' , stock:35 , category:'RopaBebe', description:'Body bebe del PSG varios colores' , foto: 'https://images.footballfanatics.com/paris-saint-germain/paris-saint-germain-core-crest-2-pack-bodies-blue/red-baby-boy_ss4_p-13310759+u-r2lyd41moqsztoirrky0+v-8c294249b8b54ea795f3e716e90597ba.jpg?_hv=2&w=900'} ,
]
export const gFetch = (id) => {
    return new Promise ((res, rej )=> {
        setTimeout(()=>{
            res(id ? products.find(prod => prod.id === id) : products)
        }, 3000)        

     
    //  rej("Nooo Noooo")
    })
}