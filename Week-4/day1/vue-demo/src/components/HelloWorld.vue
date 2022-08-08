<template>
  <div class="hello">
    <MySuperCoolComponent />
    <Diego />

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
    <div id="condition-rendering">
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
          <template v-if="display"><h5>Cesc</h5></template>
        </template>
      </div>
    </div>

    <!-- EJERCICIO DE CLASE
    <div claseDinamicaMedianteUnBind = background>
      <h1 inlineStylemedianteUnobejto>{{greet}}{{name}}{{lastName}}</h1>
      Escribir condicion usando v-if y v-else-if y v-else 
      Si eres mayor de 21 años - puedes tomar alcohol 
      si eres menor de 21  - No puede tomar 
      si eres mayor que 60 - Estas muy viejo para tomar 
    </div> -->

    <div v-bind:class="rosaliaMadreMia">
      <h1
        v-bind:style="{
          color: 'white',
          padding: '2rem',
          fontSize: '45px',
        }"
      >
        {{ welcomeMessageIntro }} {{ welcomeMessageName }}
        {{ welcomeMessageLastName }}
      </h1>
      <div class="conditional">
        <h1 v-if="drinkingAge >= 21 && drinkingAge < 60">
          You can drink alcohol
        </h1>
        <h1 v-else-if="drinkingAge < 21">You are to young to drink alcohol</h1>
        <h1 v-else>Old Man, take a chill pill</h1>
      </div>
    </div>
  </div>
</template>

<script>
import MySuperCoolComponent from "./MySuperCoolComponent.vue";
import Diego from "./Diego.vue";
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

      // Excercise Example
      rosaliaMadreMia: "rosalia-background",
      welcomeMessageIntro: "Hola mi nombre es",
      welcomeMessageName: "Diego",
      welcomeMessageLastName: "Zito",
      drinkingAge: 61,
    };
  },
  components: { MySuperCoolComponent, Diego },
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

.rosalia-background {
  background-color: blue;
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.conditional {
  display: flex;
  flex-direction: column;
}
</style>
