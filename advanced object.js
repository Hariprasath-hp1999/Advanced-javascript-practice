//Advanced Object

//1.reference type
[]===[];
var obj1={value: 10};
var obj2=obj1;
var obj3={value: 10};

obj1===obj2; //true  reference to same memory space
obj1===obj3; //false

//2.context (this)
console.log(this);


//3.instantiation
class player
{
  constructor(name,type)
  {
    console.log('player',this);
    this.name=name;
    this.type=type;
  }
  introduce()
  {
    console.log("Hi I am "+this.name+", I'm a "+this.type);   
  }
}

class wizard extends player
{
    constructor(name,type)
    {
        super(name,type);
        console.log('wizard',this);

    }
    play()
    {
        console.log("WEEEE I'm a "+this.type);
    }
}

const wizard1 = new wizard('Shelly','Healer');
const wizard2 = new wizard('Shaw','Dark magic');
wizard1.introduce();
wizard2.play();