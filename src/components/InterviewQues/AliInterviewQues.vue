<template>
<v-layout row wrap>
    <v-flex xs12>
    	
      <v-card>
        <v-toolbar color="pink" dark>
          
          <v-toolbar-title>阿里前端面试总结</v-toolbar-title>
          <v-spacer></v-spacer>
          
        </v-toolbar>
       
      </v-card>
    </v-flex>
		

        
          <v-flex xs12 pa-1  v-for="(item, index) in codeDatas"
          :key="index">
            <v-card color="blue-grey darken-2" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex>
                    <div>
                      <div class="headline">{{item.title}}</div>
                      <div>	{{item.subtitle}}</div>
                      <div v-if="item.code">
                      	<codemirror 
	          :value="item.code" 
	          >
		  </codemirror>
                      </div>
                      <div v-if="item.characteristic">
                      	<v-list two-line subheader  v-if="item.characteristic.advantage" >
							          <v-subheader  class="teal--text">优点</v-subheader>
							          <v-card>
    <v-card-text class="pl-5">
      
      <p class="text-sm-left"  v-for="(advantage, i) in item.characteristic.advantage">{{advantage}}</p>
      
    </v-card-text>
  </v-card>
							        </v-list>

							        <v-divider></v-divider>
							         <v-list two-line subheader  v-if="item.characteristic.defect">
							          <v-subheader class="red--text">缺点</v-subheader>
							         

							          <v-card-text class="pl-5">
      
      <p class="text-sm-left"    v-for="(defect, i) in item.characteristic.defect">{{defect}}</p>
      
    </v-card-text>
							        </v-list>


                      </div>

                       
                    </div>
                  </v-flex>
                  
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>

          <v-flex xs12 pa-1>
            <v-card color="purple" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">2</div>
                      <div>2</div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      src="/static/doc-images/cards/halcyon.png"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
       

  
    
</v-layout>
</template>
<script>
  export default {
    data () {
      return {
        selected: [2],
        items: [
          { action: '15 min', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" }
        ],
        // code1: `a.length === 0 ? a.push(1) : a.shift();`,

        codeDatas: [
        	{
        		title: '1.有一个长度未知的数组a，如果它的长度为0就把数字1添加到数组里面，否则按照先进先出的队列规则让第一个元素出队。',
        		subtitle: '分析：这道题主要是考核了数组的队列方法和栈方法。我们可以使用三目运算符（： ？）来减少字数。代码如下：',
        		code: `a.length === 0 ? a.push(1) : a.shift();`

         	},
        	{
        		title: '2.下面代码会输出什么：',
        		subtitle: '分析：这道题考了与函数有关的的两个非常重要的概念：自执行函数和闭包。',
        		code: `var test = (function(a) {    
										this.a = a;    
										return function(b) {        
										return this.a + b;
										    }
										} (function(a, b) {    
										return a;
										}(1, 2))); 

										console.log(test(4)); `,
        	},
        	{
        		title: '3.请把<ul><li>第1行</li><li	>第2行</li	>...</ul>（ul之间有10个li元素）插入body里面，注意：需要考虑到性能问题。',
        		subtitle: '分析：这题主要考察了dom操作。插入节点操作的可以使用insertBefore和appendChild方法，随便用一个都行。但是，题目要求要考虑性能问题，这才是关键，因为，JavaScript操作dom的开销是很大的！提高性能就要减少dom操作。因此，我当时使用了下面的方法，只操作一次dom就够的了：',
        		code: `var lis = "",
							ul = document.createElement("ul");
							//把li以字符串形式生成
							for(var i = 1; i <= 10; i++) {
							    lis += "<li>第" + i + "行</li>";
							}// 最后通过innerHTML插入ul里面
							ul.innerHTML = lis;
							//这里才操作dom，把ul插入到body
							document.body.appendChild(ul); `
		      },
		      
		      {
		      	title: '4.不使用loop循环，创建一个长度为100的数组，并且每个元素的值等于它的下标。',
		      	subtitle: '分析：当时看到题目要求不使用loop循环时，“聪明过头”的我马上就想到了使用间歇性定时器setInterval，代码如下：',
		      	code: `var arr = [],
		  			i = 0;
		  		var interval = setInterval(()=>{
		  			i < 100 ? arr.push(i++) : clearInterval(interval);
		  		}, 0);`},
		{
			title: '另一种做法',
			subtitle: '分析：  先创建一个新数组，然后通过join方法把它转化为字符串，然后再通过split方法把字符串转化为数组，这时候，它就拥有100个值为空的元素了，然后再通过map函数改变这些元素值即可。',
			code: `
			var arr = Array(100).join(',').split(',').map((item, index)=>index)
			console.log(arr)
			`},
		{
			title: '5.实现对数组进行乱序',
			subtitle: '分析： 使用sort对数组进行排序，因为是乱序，还需要用到Math.random()产生随机数，用来打乱排序规律！代码如下：',
			code: `
			var arr = [1,4,2,100,99,5,6,7,120,28,88],
				flag = 1;
			arr.sort((a, b)=>{
				flag = (Math.random() > 0.5) ? 1 : -1;
				return (a - b) * flag;
			})
			console.log(arr)
		`},
		{
			title: '6.有一个长度为100的数组，或者随机生成一个1-100的数组，请以优雅的方式求出该数组的前10个元素之和',
			subtitle: '分析：其实，对于数组求和有很多种方法。但是，这题有两个限制条件：优雅的方式、前10个元素。对于“前10个元素”这个限制条件可以使用Array.prototype.slice()方法来截取，对于"优雅的方式"，我的理解是应该尽可能使用数组自带的方法，最好可以使用高阶函数！所以我觉得应该是Array.prototype.reduce()方法。代码如下：',
			code: `let sum = 0;
	  		sum = Array(100).join(',').split(',').map((item, index)=>{
	  			index++;
	  			return index;
	  		}).reduce((prev, cur)=>prev+cur)`
		},
		{
			title: '7.JavaScript实现继承的常用方法有哪些？你推荐的是哪一种？',
			subtitle: '既然要实现继承，那么首先我们得有一个父类，代码如下：'
			},
		{
			title: '1、原型链继承',
			subtitle: '核心： 将父类的实例作为子类的原型',
			code: `
			function Animal(name) {
  			// 属性
  			this.name = name || 'Animal'

  			//实例方法
  			this.sleep = () => this.name + 'is sleeping now'
	  		}

	  		Animal.prototype.eat = food => this.name + 'is eating ' + food + ' now!'

	  		function Cat() {
	  		}
	  		Cat.prototype = new Animal()
	  		Cat.prototype.name = 'cat'

	  		let cat = new Cat()
	  		console.log(cat.name) // cat
	  		console.log(cat.eat('fish')) // is eating fish now!
	  		cat.sleep()  // catis sleeping now
	  		console.log(cat instanceof Animal); //true 
			console.log(cat instanceof Cat); //true
		`,
			characteristic: {
				advantage: [
					'非常纯粹的继承关系，实例是子类的实例，也是父类的实例',
					'父类新增原型方法/原型属性，子类都能访问到',
					'简单，易于实现'
				],
				defect: [
					'要想为子类新增属性和方法，必须要在new Animal()这样的语句之后执行，不能放到构造器中',
					'无法实现多继承',
					'来自原型对象的引用属性是所有实例共享的',
					'创建子类实例时，无法向父类构造函数传参'
				]
			}
		},
		{
			title: '2、构造继承',
			subtitle: '核心：使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）',
			code: `
			function Animal(name) {
	  			this.name = name || 'Animal'
	  			this.sleep = () => this.name + ' sleeping now'
	  		}

	  		function Cat(name) {
	  			Animal.call(this)
	  			this.name = name || 'Bom'
	  		}
	  		let cat = new Cat()
	  		console.log(cat) // cat
	  		cat.sleep()	// Bom is sleeping now
	  		console.log(cat instanceof Animal); // false
			console.log(cat instanceof Cat); // true
		`,
		characteristic: {
		advantage: [
					'解决了1中，子类实例共享父类引用属性的问题',
					'创建子类实例时，可以向父类传递参数',
					'可以实现多继承（call多个父类对象）'
				],
				defect: [
					'实例并不是父类的实例，只是子类的实例',
					'只能继承父类的实例属性和方法，不能继承原型属性/方法',
					'无法实现函数复用，每个子类都有父类实例函数的副本，影响性能'
				]}},
		{
			title: '3、实例继承',
			subtitle: '核心：为父类实例添加新特性，作为子类实例返回',
			code: `
			function Animal(name) {
  			this.name = name || 'Animal'
  			this.sleep = () => this.name + ' is sleeping now'
	  		}
	  		function Cat(name) {
	  			let ins = new Animal()
	  				ins.name = name || 'Gom'
	  				return ins
	  		}

	  		let cat = new Cat()
	  		console.log(cat.name)	// Gom
	  		console.log(cat.sleep()); // Gom is sleeping now
			console.log(cat instanceof Animal); // true
			console.log(cat instanceof Cat); // false
		`,
		characteristic: {
		advantage: [
					'不限制调用方式，不管是new 子类()还是子类(),返回的对象具有相同的效果',
				
				],
				defect: [
					'实例是父类的实例，不是子类的实例',
					'不支持多继承'
				]}},
		{
			title: '4、拷贝继承',
			subtitle: '',
			code: `
			function Animal(name) {
	  			this.name = name || 'Animal'
	  			this.sleep = () => this.name + ' is sleeping now'
	  		}
	  		function Cat(name) {
	  			let cat = new Animal()
	  			for(let c in cat){
	  				Cat.prototype[c] = cat[c]
	  			}
	  			Cat.prototype.name = name || 'Fom'
	  		}
	  		let cat = new Cat()
	  		console.log(cat.name) // Fom
	  		console.log(cat.sleep())
	  		console.log(cat instanceof Animal); // false
			console.log(cat instanceof Cat); // true`,
			characteristic: {
		advantage: [
					'支持多继承'
				
				],
				defect: [
					'效率较低，内存占用高（因为要拷贝父类的属性）',
					'无法获取父类不可枚举的方法（不可枚举方法，不能使用for in 访问到）'
					]}},
		{
			title: '5、组合继承',
			subtitle: '核心：通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用',
			code: `
			function Animal(name) {
	  			this.name = name || 'Animal'
	  			this.sleep = () => this.name + ' is sleeping now'
	  		}
	  		function Cat(name) {
	  			Animal.call(this)
	  			this.name = name || 'Hom'
	  		}
	  		Cat.prototype = new Animal
	  		let cat = new Cat()
	  		console.log(cat.name) // Hom
	  		console.log(cat.sleep()) // Hom is sleeping now
	  		console.log(cat instanceof Animal); // false
			console.log(cat instanceof Cat); // true`,
			characteristic: {
		advantage: [
					'弥补了方式2的缺陷，可以继承实例属性/方法，也可以继承原型属性/方法',
					'既是子类的实例，也是父类的实例',
					'不存在引用属性共享问题',
					'可传参',
					'函数可复用'
				
				],
				defect: [
					'调用了两次父类构造函数，生成了两份实例（子类实例将子类原型上的那份屏蔽了）'
					
					]}},
		{
			title: '6、寄生组合继承',
			subtitle: '核心：通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点',
			code: `
			function Animal(name) {
	  			this.name = name || 'Animal'
	  			this.sleep = () => this.name + ' is sleeping now'
	  		}
	  		function Cat(name) {
				Animal.call(this)
	  			this.name = name || 'Pom'
	  		}
	  		(()=>{
	  			function Super() {}
	  			Super.prototype = Animal.prototype
	  			 Cat.prototype = new Super()	
	  		})()
	  		let cat = new Cat()
	  		console.log(cat.name) // Pom
	  		console.log(cat.sleep()) // Pom is sleeping now
	  		console.log(cat instanceof Animal); // false
			console.log(cat instanceof Cat); // true
			`,
			characteristic: {
			advantage: [
					'堪称完美'
				
				],
				defect: [
					'实现较为复杂'
					
					]
      
    }},
    {
        		title: '8.在项目开发完成之后，根据雅虎性能优化规则，需要对html，JS，CSS，图片需要做出怎样的处理？是否可以借助构建工具实现自动化？',
        		subtitle: '提示：从减少http请求、减少带宽、提高加载速度等方面进行答题即可。',
        		
        	
        	characteristic: {
        		advantage: [
					
						'1. 尽可能的减少 HTTP 的请求数 [content]',

'2. 使用 CDN（Content Delivery Network） [server]',

'3. 添加 Expires 头(或者 Cache-control ) [server]',

'4. Gzip 组件 [server]',

'5. 将 CSS 样式放在页面的上方 [css]',

'6. 将脚本移动到底部（包括内联的） [javascript]',

'7. 避免使用 CSS 中的 Expressions [css]',

'8. 将 JavaScript 和 CSS 独立成外部文件 [javascript] [css]',

'9. 减少 DNS 查询 [content]',

'10. 压缩 JavaScript 和 CSS (包括内联的) [javascript] [css]',

'11. 避免重定向 [server]',

'12. 移除重复的脚本 [javascript]',

'13. 配置实体标签（ETags） [css]',

'14. 使 AJAX 缓存'
				]
        	}
        }	

        ]
      }
    },

    methods: {
      toggle (index) {
        const i = this.selected.indexOf(index)

        if (i > -1) {
          this.selected.splice(i, 1)
        } else {
          this.selected.push(index)
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/styls">
	
	
</style>