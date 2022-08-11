<template>
  <div class="hello">
    <div id="binding-text">
      <div id="using-moustache-syntax">
        <!-- <h1>Hello Diego</h1> -->
        <h1>Hello {{ name }}</h1>
        <h1>{{ name }}</h1>
        <h1>{{ greet }} {{ name }}</h1>
      </div>
      <!-- using a directive -->
      <div id="using-v-text-directive">
        <h1 v-text="band"></h1>
        <div v-text="band"></div>
        <!-- <h1 v-text="band">Fleetwood Mac is the best band ever!</h1> -->

        <!-- IMPORTANTE -->
        <!-- 1. Cuando usamos la directva de v-text siempre sobreEscriberemos el texto o el contenido que contenga de hijos el elemento donde estes apuntando.  -->
        <!-- 2. Si queremos trabajar dinamicamente con nuestra data por favor acatarse a usar el syntax de bigotes :)  -->
      </div>
    </div>
    <div id="binding-html">
      <div v-html="balma"></div>
      <div v-html="bindingHtmlCrossSide"></div>
    </div>
    <div id="binding-attributes">
      <div id="binding-attributes-1">
        <!-- Si queremos bindear atributos dentro de nuestro codigo no podemos usar el syntax de los bigotes!, El euqipo de vue a creado tags especificos para poder bindear esto tipos de atributos.  -->

        <!-- Binding with an ID Attribute -->
        <h1 v-bind:id="headingIdExample">
          Heading - with Binding ID Attribute
        </h1>

        <!-- Binding with a Boolean Value -->
        <button v-bind:disabled="isDisabled">
          Binding with a Boolean Value
        </button>

        <!-- Binding with a Class Attribute -->
        <h1 v-bind:class="status">
          Underlined Text - Binding a Class Attribute
        </h1>

        <!-- Binding with a Class Attribute - With more than one class -->
        <h1 v-bind:class="status" class="underline">
          Underlined Text - Binding a Class Attribute - With more than one class
        </h1>
      </div>
      <div id="binding-conditional-attributes">
        <!-- Conditionally binding a class attribute to an element depending if the dataProperty = true || false  -->
        <!-- This only checks for 1 condition -->
        <h1 v-bind:class="isPromoted && 'promoted'">Promoted Movies</h1>

        <!-- Operador ternario - Ternary Operator -->
        <!-- This checks for bot conditions -->
        <!-- Breakdown del ternario, el ternario esta compuesto por 2 condiciones. la primera condicion se asigna mediante apuntando a la propiedad booleanica, que quermeos apuntar, ej[isSoldOut] seguido por el signo de interrogacion que validad si esa propieda es verdadera, si esa condicion es correcta, se ejecuta la clase ene ste ejemplo en particular para asignarle la clase [sold-out]. Si la condicion es falsa, se ejecutala 2nda parte del ternario que se especifica despues de los 2 puntos [:] seguida por la clase que queremos asignalre mientras la condicion sea falsa.  -->
        <h1 v-bind:class="isSoldOut ? 'sold-out' : 'available'">
          Sold Out Movies
        </h1>
        <!-- Comparativo con una condicion de JS mediante un if/else statement
         if(isSoldOut === true){
          class: sold-out
        }
        else{
           class: available
        } -->

        <!-- Binding an array of classes  -->
        <h1 v-bind:class="['underline', 'available']">
          Binding an array of classes
        </h1>

        <!-- Conditionally attaching classes by combing expressions within the array -->
        <h1
          v-bind:class="[
            isPromoted && 'promoted',
            isSoldOut ? 'sold-out' : 'available',
          ]"
        >
          Array of Conditional classes
        </h1>

        <!-- Conditionally attaching classes by combining expressions within an Object -->
        <!-- REALLY RARE CASES  -->
        <h1
          v-bind:class="{
            promoted: isPromoted,
            new: !isSoldOut,
            'sold-out': isSoldOut,
          }"
        >
          Object of Conditional Classes
        </h1>
      </div>
      <div id="binding-styles">
        <!-- Dynamically binding inline attributes by using an object directly into the HTML -->
        <h1
          v-bind:style="{
            padding: '20px',
            color: textColor,
            fontSize: textSize + 'px',
          }"
        >
          Inline Styling done throguh an object approach
        </h1>

        <!-- Dynamically bind an object fetched from the data property -->
        <h1 v-bind:style="styleObject">Style Object feteched from data</h1>

        <!-- Dynamically bind arrays that are coming from the data object as an actual object passed as an array of objects inisde the HTML -->
        <h1 v-bind:style="[baseStyleOject, successStyleObject]">
          Injecting An array of objects inside the style tag via binding
        </h1>
        <h1 v-bind:style="[baseStyleOject, dangerStyleObject]">
          Injecting An array of objects inside the style tag via binding
        </h1>
      </div>
      <div id="short-hand-binding">
        <!-- Dynamically binding inline attributes by using an object directly into the HTML -->
        <!-- USING SHORT HAND -->
        <h1
          :style="{
            padding: '20px',
            color: textColor,
            fontSize: textSize + 'px',
          }"
        >
          Inline Styling done through an object approach with the sjort hand
          syntax
        </h1>

        <!-- Conditionally binding a class attribute to an element depending if the dataProperty = true || false  -->
        <!-- This only checks for 1 condition -->
        <!-- USING SHORT HAND -->
        <h1 :class="isPromoted && 'promoted'">
          Promoted Movies using shortHand
        </h1>
      </div>
    </div>
    <div id="conditional-rendering">
      <div id="conditional-rendering-part-1">
        <!-- Simple Approach using v-if first -->
        <h1 v-if="num === 0">The number is zero</h1>
        <!-- Expanding our condition by adding a v-else -->
        <h1 v-else>The number is not zero</h1>
      </div>
      <div id="conditional-rendering-part-2">
        <!-- More complex example using v-if, v-else-if and v-else -->
        <h1 v-if="num === 0">The number is zero</h1>
        <h1 v-else-if="num < 0">The number is negative</h1>
        <h1 v-else-if="num > 0">The number is Positive</h1>
        <h1 v-else>This is not a number</h1>
        <!-- RULES: v-else or v-else-if must be placed after initially putting a v-if directive, if not you will get an error. -->
      </div>
      <div id="conditional-rendering-part-3">
        <!-- What if we want to conditonally render more than one element in the same condition -->

        <!-- Possbile solutions ? lets think ? -->
        <!-- 1. add a v-if to each element, when we do this we have code dulication and as programmers, we should avoid this!  -->
        <!-- <h1 v-if="display">Wu Tang Clan</h1>
        <h1 v-if="display">Outkast</h1>
        <h1 v-if="display">A tribe called quest</h1> -->

        <!-- 2. Wrap all of the elements inside of a div in order to simplify -->
        <!-- <div v-if="display">
          <h1>Outkast</h1>
          <h1>Wu Tang Clan</h1>
          <h1>A tribe Called Quest</h1>
        </div> -->

        <!-- 3. Using a template tag to avoid inyecting extra elements into the DOM and also, the eelemtns are inyected without a parent tag that is invisible inside the HTML.  -->

        <template v-if="display">
          <h1>Outkast</h1>
          <h1>Wu Tang Clan</h1>
          <h1>A tribe Called Quest</h1>
        </template>
      </div>
      <div id="conditional-rendering-part-4">
        <!-- vamos a usar el v-show -->
        <h1 v-show="showElement">Using v-show directive</h1>
        <h1 v-if="showElement">Using v-if directive</h1>
      </div>
    </div>

    <div id="iterating-elements">
      <div id="iterating-arrays">
        <!-- special syntax that the v-for requires, here names is the array that we are referencing and name is just a keyword that we use for the specific piece of the array -->

        <!-- A. La manera sencilla, iterando en base a un elemento y usando un key para asegurarnos de no tener errores al fetchear nuestra data. -->
        <!-- Using name to iterate and point as a key -->
        <h1 v-for="ironTeachers in names" v-bind:key="ironTeachers">
          {{ ironTeachers }}
        </h1>

        <!-- B. La manera que usamos para sacar el index(numero) que le corrsponde a cada elemento del array -->
        <!-- Using the index of each arrayElement -->
        <h1 v-for="(name, index) in names" v-bind:key="index">
          {{ index }} - {{ name }}
        </h1>
      </div>
      <div id="iterating-with-objects">
        <h1 v-for="teacherFullName in teachersFullNames" :key="teacherFullName">
          {{ teacherFullName.first }} - {{ teacherFullName.last }}
        </h1>
      </div>
      <div id="iterating-an-array-of-an-array">
        <div v-for="(actor, index) in actors" :key="index">
          <h1>{{ index }} - {{ actor.name }}</h1>
          <h4 v-for="movie in actor.movies" :key="movie">
            {{ movie }}
          </h4>
        </div>
      </div>
      <div id="iterating-through-properties-of-an-object">
        <h1 v-for="value in myInfo" :key="value">
          {{ value }}
        </h1>

        <h1 v-for="(value, key, index) in myInfo" :key="index">
          {{ index }} - {{ key }} - {{ value }}
        </h1>
      </div>

      <div id="iterating-using-a-template-tag-directive">
        <template v-for="(name, index) in names" :key="index">
          {{ name }}
        </template>
      </div>

      <div id="conditionally-rendering-listItems-using-vFor-directive">
        <!-- <h1
          v-for="artist in hipHopArtists"
          :key="artist"
          v-if="artist === 'Ms. Lauryn Hill'"
        >
          {{ artist }}
        </h1> -->

        <!-- Until we see computedProperties, this above code will throw an error.  -->
        <template v-for="artist in hipHopArtists" :key="artist">
          <h2 v-if="artist === 'Wu Tang Clan'">
            {{ artist }}
          </h2>
        </template>
      </div>
    </div>
    <div id="methods">
      <div id="methods-part-1">
        <!-- Using bigoteSyntax -->
        <h1>{{ 100 + 200 - 40 }}</h1>

        <!-- Using a static function coming from the methods object inside the script Tag -->
        <h1>
          Using a static function called addStatic() - the result is going to be
          {{ addStatic() }}
        </h1>

        <h1>
          Using a dynamic function called addDynamic() - the result is going to
          be
          {{ addDynamic(100, 200, 40) }}
        </h1>

        <h1>
          <!-- Using a dynamic function called multiply() - which accepts a argument/param and also takes in a dataProp to multiply the arguemtn that we are going to pass -->
          The result of this muliply function is - {{ multiply(5) }}
        </h1>
      </div>
      <div id="methods-part-2">
        <div id="inline-events">
          <!-- Inline Handlers -->
          <h1>{{ nameEvent }}</h1>
          <!-- Usando un click event -->
          <button v-on:click="nameEvent = 'Lebron James'">
            Click me to change name
          </button>
          <!-- Usando un mouseoOver event -->
          <!-- <button v-on:mouseover="nameEvent = 'Lebron James'">
              Click me to change name
            </button> -->
        </div>
        <div id="inline-event-counter-example">
          <!-- Implementing a counter -->
          <h1>The curent count is: {{ count }}</h1>
          <button v-on:click="count -= 1">Resta x1</button>
          <button v-on:click="count++">Suma x1</button>
        </div>
        <div id="event-counter-example">
          <!-- Implementing a counter -->
          <h1>The curent counInsideMethod is: {{ countInsideMethod }}</h1>
          <button v-on:click="decrement()">Resta x1</button>
          <button v-on:click="increment()">Suma x1</button>
        </div>
        <div id="event-counter-example-with-params">
          <!-- Implementing a counter -->
          <h1>The curent countWithParams is: {{ countWithParams }}</h1>
          <div class="button-group">
            <button v-on:click="decrementWithParams(10)">
              Resta
              <strong
                >x el numero que le pasamos dentro del argumento/param</strong
              >
            </button>
            <button v-on:click="incrementWithParams(5)">
              Suma
              <strong
                >x el numero que le pasamos dentro del argumento/param</strong
              >
            </button>
          </div>
        </div>
        <div id="event-function-to-change-name">
          <h1>{{ nameEvent2 }}</h1>
          <button @click="changeName">Click me to change name</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      // Usamos la regla, de el syntax de bigotes para poder acceder a nuestra data dentro del templateTag que es nuestro HTML.
      // Este principio se llama text interpolation / interpolacion de texto ?
      // binding text
      name: "Diego",
      greet: "Hello",
      // binding text using the v-text directive
      band: "Fleetwod Mac",
      // binding html using the v-html directive, please always use templateLiterals for inyecting html into the template templateLiterals = ``
      balma: `<b>Wu Tang Clan</b>`,
      // Usando API's externas siempre tener cuidado que la data que componga esta API sea correcta, porque si usamos un API externo y usamos esta directirz abrimos las posibilades que nos ataquen mediante un approach de hackeo que se llama crossSideScripting!
      bindingHtmlCrossSide: `<a href="#" onClick="alert('Yo yo yo you have been hacked by the wu tang clan')">Win a prize by clicking here!</a>`,
      // Bind Attributes - ID Attribute
      headingIdExample: "balmas-heading",
      //Binding with a Boolean Value
      isDisabled: true,
      // Bind Attributes - Class Attribute
      status: "danger",
      // Conditionally render attributes/properties with classes
      isPromoted: false,
      // Conditionally Render attributes with more than 1 condition
      isSoldOut: true,
      // Dynamically inyect style properties within an object
      textColor: "#3590F3",
      textSize: 40,
      // Dynamically inyect style properties within a single Object
      styleObject: {
        color: "blue",
        fontSize: "50px",
        padding: "20px",
      },
      //Dinamically inject arrays within a style attribute
      baseStyleOject: {
        fontSize: "50px",
        padding: "10px",
      },
      successStyleObject: {
        color: "green",
        backgroundColor: "lightgreen",
        border: "1px solid darkgreen",
        padding: "20px",
      },
      dangerStyleObject: {
        color: "darkred",
        backgroundColor: "red",
        border: "1px solid darkred",
        padding: "30px",
      },
      // Conditional Rendering using v-if, v-else, v-else-if directives inside Vue. For this specific example we are going to use a number property.
      // num: "Wu Tang Clan", // Example using a string to showcase that this is not a number
      num: 2,
      // Conditionally render multiple elements inside the same condition
      display: true,

      //Conditionally rendering elements using v-show directive
      showElement: true,

      //Iterating through data with the v-for directive
      // array of strings
      names: ["Diego", "Jarko", "Aleix", "Diego", "Jarko", "Aleix"],

      // Iterating an array of objects
      teachersFullNames: [
        { first: "Diego", last: "Zito" },
        { first: "Aleix", last: "Abuli" },
        { first: "Carlos aka Jarko", last: "Garrido" },
      ],

      //Iterating an array of arrays (nestedArrays o en castellano arrays anidados)
      actors: [
        {
          name: "Robert De Niro",
          movies: ["The Godfather II", "Casino", "Goodfellas"],
        },
        {
          name: "Daniel Day Lewis",
          movies: [
            "There will Be Blood",
            "Gangs of New York",
            "Phantom Thread",
          ],
        },
        {
          name: "Merryl Streep",
          movies: [
            "The Devil Wears Prada",
            "Kramer vs Kramer",
            "Sophies Choice",
          ],
        },
      ],
      //Iterating through the properties of an object
      myInfo: {
        name: "Diego",
        school: "Ironhack",
        course: "FE Vue",
      },

      //Conditionally render a list that is iterated using the v-for directive
      hipHopArtists: [
        "Wu Tang Clan",
        "Ms. Lauryn Hill",
        "A tribe Called Quest",
      ],

      // Using methods

      //Data property that we are going to sue as a base multiplier
      baseMultiplier: 5,

      //Name property to pass along to inlineMethod to change name
      nameEvent: "Michael Jordan",

      // Count property to pass along to inlineMethod to create a counter
      count: 0,
      // Count property to pass along to  separated Method inside the methods object to create a counter
      countInsideMethod: 0,
      //count property to use inisde a function with params
      countWithParams: 0,

      //Fucntion to change name extracting the logic to be used inside the function.
      nameEvent2: "Stephan Curry",
    };
  },
  methods: {
    // Es aca done podemos definir nuestras funciones, podemos pasar la # de funciones que queramos.

    //static function without arguments/params
    addStatic() {
      return 100 + 200 - 40;
    },

    // dynamic function using arguments/params
    addDynamic(a, b, c) {
      return a + b - c;
    },

    //dinmayc function using arguments/params, except we are goin gto multiply.
    multiply(num) {
      return num * this.baseMultiplier;
    },

    //function to pass aling the button to manage the math of the count - INCREMENT FUNCTION
    increment() {
      this.countInsideMethod += 1;
    },
    //function to pass along the button to manage the math of the count - DECREMENT FUNCTION
    decrement() {
      this.countInsideMethod--;
    },

    // Function with arguments/params to increase the counter with any given number that we are going to pass
    incrementWithParams(num) {
      this.countWithParams += num;
    },
    // Function with arguments/params to decrease the counter with any given number that we are going to pass
    decrementWithParams(num) {
      this.countWithParams -= num;
    },
    // Function to change name
    changeName(event) {
      this.nameEvent2 = "Dwayne Wade";
      console.log(event);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.underline {
  text-decoration: underline;
}

.promoted {
  font-style: italic;
}

.sold-out {
  color: red;
}
.available {
  color: green;
}

.conditional {
  display: flex;
  flex-direction: column;
}

.wuImage {
  width: 250px;
  height: 250px;
}

.button-group {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  justify-content: center;
  margin: auto;
  gap: 1rem;
}
</style>
