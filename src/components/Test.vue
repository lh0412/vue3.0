<template>
    <div>
      <div>helloword</div>
      <div @click="fnFatherBubble">
        父元素
        <span @click="fnBubble">子元素</span>
      </div>
      <button @click="this.$router.push({path:'home'})">click me</button>
      <span v-once>{{num.count}}</span>
      <button v-on:click="fnAdd">dianwo</button>
      <span>{{store.state.count}}</span>
      <button @click="fnVuexAdd">vuex btn</button>
    </div>
</template>
<script setup>
import { reactive } from "@vue/reactivity";

import { useStore } from 'vuex';

const store = useStore();

const fnVuexAdd = () => {
  // store.commit('fnAdd',1);
  store.dispatch('fnAddActions',1).then()
}
let num = reactive({
  count:0
})
function fnAdd(){
  num.count = num.count+1
}
  //求1-100的和  递归
 function add(num1,num2){
  //  console.log(333333,__proto__)
    let count = num1 + num2;
    if(num2 + 1 > 100){
      return count;
    }else{
      return add(count,num2+1);
    }
    
  }
  add(1,2);
  const fnRecurence = (num1,num2) =>{
    let count = num1 + num2;
    if(num2 + 1 >100){
      return count;
    }else{
      return fnRecurence(count,num2+1);
    }
  }

  const fnBubble = (e) => {
    e.stopPropagation();
    console.log('子元素');
  }
  const fnFatherBubble = (e) => {
    console.log('父元素');
  }

  //创建对象 构造函数 此处的this指向调用该函数的对象
  function Person(){
    this.name = 'xiaoming';
    this.age = 24;
    console.log('my name is ' + this.name + ' and ' + this.age + " years old ");
  }
  let person = new Person();
  console.log('my name is ' + person.name + ' and ' + person.age + " years old");


//继承 原型链继承
function Father(name){
  this.name = name;
  this.sex = 'F';
}
Father.prototype.age = 10;

function Son(){
  this.name = '原型链继承';
}

Son.prototype = new Father();

function Son1(){
  this.name = "原型链继承1";
}
Son1.prototype = new Father();
let son = new Son();
let son1 = new Son1();
son.age = 12;
son1.age = 13;
console.log(3333,son.name,son.age,son.sex,Father.prototype.age);
console.log(3333,son1.name,son1.age,son1.sex,Father.prototype.age);

//继承 构造函数继承
function Son2(){
  Father.call(this,'构造函数继承');
  this.age = 12;
}
let son2 = new Son2();
console.log(111111,son2.name,son2.age,son2.sex);

//继承 组合继承
function Son3(name){
  //借用构造函数继承，用call或apply将父对象的构造函数绑定在子对象上
  Father.call(this,name);
  this.age = 14;
}
//借用原型链继承将子对象的原型prototype指向父对象的一个实例
Son3.prototype = new Father();
let son3 = new Son3('son3');
console.log(444444,son3.name,son3.age)

//this指向
function a() {
    var user = "追梦子";
    // console.log(this.user); //undefined
    console.log(this); //Window
}
a();
</script>
