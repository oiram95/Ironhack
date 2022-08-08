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

        <!-- Dynamically bind an object fethed from the data property -->
        <h1 v-bind:style="styleObject">Style Object feteched from data</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld", // nombre del componente, no tiene nda que ver con el metodo de data de abajo.
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
    };
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
</style>
