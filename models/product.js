// NOTE !All Functionalities working!
const db = require('../util/database');

const Cart = require('./cart');

module.exports = class Product {
  constructor(id,title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute('INSERT INTO products(title,price,description,imageUrl) values(?,?,?,?)',[this.title,this.price,this.description,this.imageUrl]);
  }
  
  static deleteProductById(prodId){
    return db.execute('DELETE FROM products WHERE id = ?',[prodId]);
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(prodId) {
    return db.execute('SELECT * FROM products WHERE id = ?',[prodId]);
  }
};
