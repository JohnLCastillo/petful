class _Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
    }
  
    inqueue(data) {
      const animal = new _Node(data);
      if (this.first === null) {
        this.first = animal;
      }
      if (this.last) {
        animal.next = this.last;
        this.last.prev = animal;
      }
      this.last = animal;
    }
  
    remove() {
      if (this.first === null) {
        return;
      }
      const animal = this.first;
      this.first = animal.prev;
  
      if (animal === this.last) {
        this.last = null;
      }
      return animal.data;
    }
  }
  
  let catQueue = new Queue();
  let dogQueue = new Queue();
  
  const helpers = {
    peek: queue => {
      if (queue.first) {
        return queue.first.data;
      }
    }
  };
  
  const theDogs = [
    
    { imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
      imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
      name: 'Zeus',
      sex: 'Male',
      age: 3,
      breed: 'Golden Retriever',
      story: 'Owner Passed away'
    },
    {
      imageURL: 'https://i.imgur.com/xyPtn4m.jpg',
      imageDescription: 'Sleeping retreiver.',
      name: 'Bailey',
      sex: 'Female',
      age: 0,
      breed: 'Labrador Retriever',
      story: 'Abandoned'
    },
    {
      imageURL: 'https://i.imgur.com/JR6noxf.jpg',
      imageDescription: 'A confused lab with head cocked to the side',
      name: 'Hunter',
      sex: 'Male',
      age: 1,
      breed: 'Labrador Retriever',
      story: 'Owner passed away'
    },
    {
      imageURL: 'https://i.imgur.com/f6nA4Zz.png',
      imageDescription: 'A husky looking into the camera',
      name: 'Lonnie',
      sex: 'Male',
      age: 1,
      breed: 'Siberian Husky',
      story: 'Owner passed away'
    }
  ];
  
  const theCats = [{
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'https://i.imgur.com/RdextKT.jpg',
    imageDescription: 'A suspicious cat.',
    name: 'Princess',
    sex: 'Female',
    age: 5,
    breed: 'Persian',
    story: 'Found in an alley'
  },
  {
    imageURL: 'https://i.imgur.com/UHYngUA.jpg',
    imageDescription: 'An orange cat with his mouth open',
    name: 'Night',
    sex: 'Male',
    age: 1,
    breed: 'Orange',
    story: 'Found in an alley'
  }
  ];
  
  module.exports = { catQueue, theCats, dogQueue, theDogs, helpers };