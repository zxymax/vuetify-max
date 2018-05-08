 <template>
<v-layout row wrap>
    <v-flex xs12>
      
      <v-card>
        <v-toolbar color="pink" dark>
          
          <v-toolbar-title>JavaScript This 的六道坎</v-toolbar-title>
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
                      <div> {{item.subtitle}}</div>
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


  </v-layout>
</template>

<script>
  export default {
    data() {
      return {
         codeDatas: [
          {
            title: '第一层：世界尽头',
            subtitle: '权力最小的大佬是作为备胎的存在，在普通情况下就是全局，浏览器里就是window；在use strict的情况下就是undefined。',
            code: `function showThis() {
                  console.log(this)
                }
                function showStrictThis() {
                  'use strict'
                  console.log(this)
                }
                showThis()  // window
                showStrictThis() // undefined`

          },
          {
            title: '第二层：点石成金',
            subtitle: '如果用到this的那个函数是属于某个 context object 的，那么这个 context object 绑定到this。比如下面的例子，boss是returnThis的 context object ，或者说returnThis属于boss。',
            code: `let boss = {
                name: 'boss',
                returnThis() {
                  return this
                }
              }
               console.log(boss.returnThis() === boss) // true
               
               `

          },
          {
            title: '再往下看',
            subtitle: '在boss2.returnThis里，使用this的函数是boss1.returnThis，所以this绑定到boss1； 在boss3.returnThis里，使用this的函数是returnThis，所以this绑定到备胎。',
            code: `let boss = {
                name: 'boss',
                returnThis() {
                  return this
                }
              }
               console.log(boss.returnThis() === boss) // true
               //============================================
               //再往下看
               let boss1 = {
                name: 'boss1',
                returnThis () {
                  return this
                }
              }
              let boss2 = {
                name: 'boss2',
                returnThis() {
                  return boss1.returnThis()
                }
              }
              let boss3 = {
                name: 'boss3',
                returnThis() {
                  let returnThis = boss1.returnThis
                  return returnThis()
                }
              }
              boss1.returnThis() // boss1
              boss2.returnThis() // boss1
              boss3.returnThis() // window`
          },
          {
            title: '要想把this绑定到boss2怎么做呢？',
            subtitle: '没错，只要让使用this的函数是属于boss2就行。',
            code: `
              let boss1 = {
                name: 'boss1',
                returnThis() {
                  console.log(this)
                }
              }
              let boss2 = {
                name: 'boss2',
                returnThis: boss1.returnThis
              }
              boss2.returnThis() // boss2
            `
          },
          {
            title: '第三层：指腹为婚',
            subtitle: '第三层大佬是Object.prototype.call和Object.prototype.apply，它们可以通过参数指定this。（注意this是不可以直接赋值的哦，this = 2会报ReferenceError。）',
            code: `function returnThis() {
                return this
              }
              let boss1 = {
                name: 'boss1'
              }
              returnThis() // window
              returnThis.call(boss1) // boss1
              returnThis.apply(boss1) // boss1
            `
          },
          {
            title: '第四层：海誓山盟',
            subtitle: '第四层大佬是Object.prototype.bind，他不但通过一个新函数来提供永久的绑定，还会覆盖第三层大佬的命令。',
            code: `function returnThis() {
                return this
              }
              let boss1 = {
                name: 'boss1'
              }
              let boss1ReturnThis = returnThis.bind(boss1)
              boss1ReturnThis() // boss1

              let boss2 = {
                name: 'boss2'
              }
              boss1ReturnThis.call(boss2) // boss1`
          },
          {
            title: '第五层：内有乾坤',
            subtitle: '一个比较容易忽略的会绑定this的地方就是new。当我们new一个函数时，就会自动把this绑定在新对象上，然后再调用这个函数。它会覆盖bind的绑定。',
            code: `function showThis() {
                  return this
                }
                showThis() // window
                new showThis() // showThis
                let boss1 = {
                  name: 'boss1'
                }
                showThis.call(boss1) // boss1
                new showThis().call(boss1) // 报错TypeError
                let boss1ShowThis = showThis.bind(boss1)
                boss1ShowThis() // boss1
                new boss1ShowThis() // boss1ShowThis`
          },
          {
            title: '第六层：军令如山',
            subtitle: '最后一个法力无边的大佬就是 ES2015 的箭头函数。箭头函数里的this不再妖艳，被永远封印到当前词法作用域之中，称作 Lexical this ，在代码运行前就可以确定。没有其他大佬可以覆盖。这样的好处就是方便让回调函数的this使用当前的作用域，不怕引起混淆。所以对于箭头函数，只要看它在哪里创建的就行。如果对 V8 实现的词法作用域感兴趣可以看看这里。',
            code: `function callback(cb) {
                      cb()
                    }
                    callback(()=>{ console.log(this) })  // window
                    let boss1 = {
                      name: 'boss1',
                      callback: callback,
                      callback2(){
                        (()=>{
                          console.log(this)
                        })
                      }
                    }
                    boss1.callback(()=>{ console.log(this) }) // window
                    boss1.callback2(()=>{ console.log(this) }) // boss1`
          },
          {
            title: '下面这种奇葩的使用方式就需要注意：',
            subtitle: '如果你不知道最后为什么会是 boss2，继续理解“对于箭头函数，只要看它在哪里创建”这句话。',
            code: `let returnThis = () => this
                returnThis() // window
                new returnThis() //TypeError

                let boss1 = {
                  name: 'boss1',
                  returnThis() {
                    let func = () => this
                    return func()
                  }
                }
                returnThis.call(boss1) // window

                let boss1ReturnThis = returnThis.bind(boss1)
                  boss1ReturnThis() // window
                  boss1.returnThis() // boss1

                let boss2 = {
                  name: 'boss2',
                  returnThis: boss1.returnThis
                }
                boss2.returnThis() // boss2
          `
          }
        ]
      }
    }
  }
</script>