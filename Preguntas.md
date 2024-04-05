# JavaScript

## ¿Qué diferencia a JavaScript de cualquier otro lenguaje de programación?

JavaScript es un lenguaje de programación de alto nivel que se utiliza principalmente para crear aplicaciones web dinámicas e interactivas. 

Lo que lo distingue de otros lenguajes de programación es su capacidad para ejecutarse en el navegador web del usuario, lo que permite crear experiencias interactivas directamente en el navegador sin necesidad de instalar software adicional. 

Además, JavaScript es un lenguaje interpretado, lo que significa que el código se ejecuta línea por línea en tiempo real, lo que facilita la depuración y la iteración rápida en el desarrollo web.

1. **Ejecución en el navegador**: Una de las diferencias más significativas es que JavaScript puede ejecutarse directamente en el navegador web del usuario. Esto significa que el código JavaScript se puede integrar en páginas web y ejecutar en el navegador del cliente sin necesidad de plugins u otros programas externos. Esta capacidad permite crear aplicaciones web dinámicas e interactivas que pueden responder a la interacción del usuario en tiempo real.

2. **Interpretado y de alto nivel**: JavaScript es un lenguaje de alto nivel e interpretado. Esto significa que el código JavaScript se ejecuta línea por línea en tiempo real, lo que facilita la depuración y la iteración rápida durante el desarrollo. Además, al ser interpretado, no se necesita compilar el código antes de ejecutarlo, lo que simplifica el proceso de desarrollo y lo hace más accesible para los principiantes.

3. **Asincronía y Callbacks**: JavaScript es conocido por su naturaleza asincrónica y la utilización de callbacks. Esto permite que las operaciones, como las solicitudes de red o las animaciones, se realicen de forma asíncrona, lo que significa que el código no se bloquea mientras espera que se complete una operación. En lugar de eso, se proporcionan funciones de devolución de llamada (callbacks) que se ejecutan una vez que la operación asíncrona ha finalizado, lo que permite que el programa continúe ejecutándose sin interrupciones.

4. **Tipado dinámico**: A diferencia de algunos lenguajes de programación como Java o C++, JavaScript es de tipado dinámico, lo que significa que no es necesario declarar explícitamente el tipo de datos de una variable al crearla. Las variables pueden contener diferentes tipos de datos durante la ejecución del programa, lo que proporciona flexibilidad pero también requiere una gestión cuidadosa para evitar errores.

5. **Prototipado en lugar de herencia de clases**: En lugar de utilizar la herencia de clases tradicional como en otros lenguajes orientados a objetos, JavaScript utiliza un sistema de prototipos para la herencia. Esto significa que los objetos pueden heredar propiedades y métodos de otros objetos directamente, lo que ofrece una flexibilidad única en la programación orientada a objetos en JavaScript.

6. **Amplio ecosistema y comunidad**: JavaScript cuenta con un vasto ecosistema de bibliotecas y frameworks que simplifican el desarrollo web, como Angular, React y Vue.js, entre otros. Además, tiene una comunidad activa de desarrolladores que contribuyen con recursos, tutoriales y soporte en línea, lo que hace que sea más fácil para los programadores encontrar ayuda y recursos para aprender y mejorar sus habilidades en JavaScript.

### Resumen

JavaScript se destaca por su capacidad de ejecutarse en el navegador, su naturaleza interpretada y de alto nivel, su asincronía y callbacks, su tipado dinámico, su modelo de prototipado y su amplio ecosistema de herramientas y recursos. Estas características lo convierten en un lenguaje poderoso y versátil para el desarrollo web y lo distinguen de otros lenguajes de programación.

## Ejemplos de algunos tipos de datos en JavaScript

1. Números:
   ```js 
   let numero = 10;
   ```
2. Cadenas de texto:
   ```js 
   let texto = "Hola Mundo";
   ```
3. Booleanos:
   ```js
   let Verdadero = true;
   ```
4. Arrays:
   ```js
   let array = [1, 2, 3];
   ```
5. Objetos:
   ```js
   let objeto = {nombre: "Ander", edad: 23};
   ```
6. Null:
   ```js
   let nulo = null;
   ```
7. Undefined:
   ```js
   let indefinido;
   ```

## Tres funciones de String en JavaScript

En JavaScript, las cadenas de texto (strings) son un tipo de datos que representan secuencias de caracteres. Para manipular y trabajar con cadenas de texto de manera efectiva, JavaScript proporciona una variedad de funciones incorporadas. Aquí están tres funciones esenciales para manipular cadenas de texto:

1. `charAt(index)`: Esta función devuelve el carácter en la posición especificada dentro de una cadena de texto. La primera posición tiene un índice de 0, la segunda tiene un índice de 1 y así sucesivamente.
   ```js
   let cadena = "Hola";
   console.log(cadena.charAt(0)); // 'H'
   console.log(cadena.charAt(2)); // 'l'
   ```
2. `concat(string)`: La función `concat()` se utiliza para combinar dos o más cadenas de texto en una sola cadena. Esto es útil cuando necesitas unir múltiples cadenas en una sola.
   ```js
   let cadena1 = "Hola,";
   let cadena2 = "Ander";
   console.log(cadena1.concat(" ", cadena2)); // "Hola, Ander"
   ```
3. `toUpperCase()`: La función `toUpperCase()` se utiliza para convertir todos los caracteres de una cadena de texto en letras mayúsculas.
   ```js
   let cadena = "hola, Ander";
   console.log(cadena.toUpperCase()); // "HOLA, ANDER"
   ```
Hay muchas otras funciones útiles que permiten buscar, reemplazar, dividir y manipular cadenas de texto de diversas formas. Estas funciones son fundamentales para el desarrollo de aplicaciones web y la manipulación de datos de usuario en el entorno del navegador.

## ¿Qué es un condicional?

Un condicional en programación es una estructura de control que permite a un programa tomar decisiones basadas en el cumplimiento o no de ciertas condiciones. En otras palabras, los condicionales permiten que un programa ejecute cierto bloque de código si se cumple una condición específica, y otro bloque de código si esa condición no se cumple.

Los condicionales son fundamentales en la programación porque permiten que un programa tome decisiones dinámicas y adapte su comportamiento según la situación. Esto es esencial para escribir código que pueda manejar diferentes escenarios y responder de manera inteligente a las entradas del usuario, eventos del sistema o condiciones cambiantes.

En JavaScript, los condicionales más comunes son `if`, `else if` y `else`. Aquí hay una explicación más detallada de cómo funcionan estos condicionales:

1. **`if`**: El condicional `if` se utiliza para ejecutar un bloque de código si una condición especificada es verdadera. Si la condición es falsa, el bloque de código dentro del `if` no se ejecuta.
   ```js
   let edad = 23;

   if (edad >= 18) {
      console.log("Eres mayor de edad");
   }
   ```
2. **`else if`**: El condicional `else if` se utiliza para evaluar múltiples condiciones secuenciales. Si la condición del `if` anterior es falsa, se verifica la siguiente condición con `else if`. Esto permite manejar múltiples escenarios en función de diferentes condiciones.
   ```js
   let edad = 23;

   if (edad >= 18) {
      console.log("Eres mayor de edad");
   } else if (edad < 18) {
      console.log("Eres menor de edad");
   }
   ```
3. **`else`**: El bloque de código dentro de `else` se ejecuta si ninguna de las condiciones anteriores es verdadera. Funciona como un "cierre" final para cualquier otra posibilidad que no haya sido manejada por los condicionales anteriores.
   ```js
   let edad = 23;

   if (edad > 18) {
      console.log("Eres mayor de edad");
   } else if (edad = 18) {
      console.log("Has cumplido la mayoria de edad");
   } else {
      console.log("Eres menor de edad");
   }
   ```
En resumen, los condicionales son una herramienta fundamental en programación para controlar el flujo de ejecución del programa y permitir la toma de decisiones dinámicas.

## ¿Qué es un operador ternario?

Un operador ternario, también conocido como operador condicional, es un operador único que se utiliza para evaluar una expresión condicional de una manera concisa y abreviada. A diferencia de los condicionales `if-else`, que requieren varias líneas de código, el operador ternario permite realizar una evaluación condicional en una sola línea.

### Sintaxis

```js
condición ? expresiónSiVerdadero : expresiónSiFalso
```
- `condición` es la expresión que se evalúa.
  
- `expresiónSiVerdadero` es el valor que se devuelve si la condición es verdadera.
  
- `expresiónSiFalso` es el valor que se devuelve si la condición es falsa.

El operador ternario evalúa la condición. Si la condición es verdadera, devuelve el valor de `expresiónSiVerdadero`; de lo contrario, devuelve el valor de `expresiónSiFalso`.

### Ejemplo

```js
let edad = 23;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);
```
- La condición `edad >= 18` se evalúa primero. Si la edad es mayor o igual a 18, la condición es verdadera; de lo contrario, es falsa

- Si la condición es verdadera, el operador ternario devuelve el valor `"Eres mayor de edad"`.

- Si la condición es falsa, el operador ternario devuelve el valor `"Eres menor de edad"`.

- El valor resultante se asigna a la variable `mensaje`, que luego se imprime en la consola.

El operador ternario es especialmente útil cuando necesitas asignar un valor a una variable basada en una condición simple y deseas hacerlo de manera concisa. Se utiliza comúnmente en expresiones de asignación, interpolación de cadenas y en la configuración de estilos condicionales en aplicaciones web.

### Resumen

En resumen, el operador ternario es una herramienta eficaz para realizar evaluaciones condicionales de forma concisa y legible, lo que ayuda a mantener el código claro y simplificado.

## Diferencia entre una declaración de función y una expresión de función

En JavaScript, hay dos formas principales de definir funciones: a través de declaraciones de función y a través de expresiones de función. Ambas formas tienen diferencias sutiles pero importantes en cómo se comportan y en qué momento se vuelven accesibles en el código.

### Declaración de función:

Una declaración de función es una forma tradicional y ampliamente utilizada de definir una función en JavaScript. 

#### Sintaxis

```js
function nombreFuncion(parametros) {
    // Cuerpo de la función
    return resultado;
}
```

#### Características

1. **Hoisting**: Las declaraciones de funciones son "elevadas" (hoisted) al inicio del contexto de ejecución, lo que significa que se pueden llamar antes de que se definan en el código. Esto permite que una función declarada se use incluso antes de que se haya declarado explícitamente en el código.

```js
saludo(); // Esto es válido debido al hoisting

function saludo() {
    console.log("Hola");
}
```

2. **Nombre de la función obligatorio**: Las declaraciones de función deben tener un nombre asociado. Esto significa que la función se puede llamar utilizando su nombre

#### Ejemplo de declaración de función

```js
function suma(a, b) {
    return a + b;
}
```

### Expresión de función

Una expresión de función es una forma de definir una función que se asigna a una variable u otro tipo de estructura de datos. 

#### Sintaxis

```js
let nombreFuncion = function(parametros) {
    // Cuerpo de la función
    return resultado;
};
```

#### Características clave de una expresión de función

1. **Hoisting parcial**: A diferencia de las declaraciones de función, las expresiones de función no se elevan al inicio del contexto de ejecución. Esto significa que no se pueden llamar antes de que se definan en el código.

```js
saludo(); // Esto dara error, ya que la función no ha sido definida aún

let saludo = function() {
    console.log("Hola");
};
```

2. **Nombre opcional**: En las expresiones de función, el nombre de la función es opcional. Si se proporciona un nombre, se puede utilizar dentro del cuerpo de la función para realizar llamadas recursivas o para referenciar la función dentro de su alcance.

```js
let saludar = function(nombre) {
    return "¡Hola, " + nombre + "!";
};

console.log(saludar("Ander")); // ¡Hola, Ander!
```

#### Resumen de las diferencias

- Hoisting: Las declaraciones de función se elevan al inicio del contexto de ejecución, mientras que las expresiones de función no se elevan.

- Nombre obligatorio vs. opcional: Las declaraciones de función deben tener un nombre asociado, mientras que las expresiones de función pueden ser anónimas (sin nombre) o tener un nombre opcional.

- Momento de acceso: Las declaraciones de función pueden ser llamadas antes de su declaración debido al hoisting, mientras que las expresiones de función deben ser definidas antes de ser llamadas para evitar errores.

En la práctica, ambas formas se utilizan según las necesidades del código y las convenciones de estilo del desarrollador. Las expresiones de función son especialmente útiles cuando se necesitan funciones como argumentos de otras funciones o cuando se desea encapsular una función dentro de un contexto específico. Las declaraciones de función, por otro lado, proporcionan una estructura más tradicional y clara para definir funciones independientes y reutilizables.

#### Ejemplo de expresión de función

```js
const suma = function(a, b) {
    return a + b;
};
```
## ¿Qué es la palabra clave `"this"` en JavaScript?

La palabra clave `this` en JavaScript es un concepto fundamental que hace referencia al contexto de ejecución actual. Es una de las características más poderosas y a la vez, una de las más complejas de entender para los desarrolladores, especialmente para aquellos que vienen de otros lenguajes de programación.

Para entender `this`, primero necesitamos entender cómo funciona el contexto en JavaScript. En JavaScript, las funciones son objetos de primera clase, lo que significa que pueden ser tratadas como cualquier otro objeto. Además, JavaScript es un lenguaje de programación orientado a objetos, lo que significa que casi todo en JavaScript es un objeto o puede ser tratado como tal.

El valor de `this` es determinado por cómo se invoca una función. Puede tener diferentes valores dependiendo del contexto de ejecución en el que se encuentra la función en ese momento. 

### Reglas generales para determinar el valor de `this`

1. **En el contexto global**: Cuando `this` se utiliza fuera de cualquier función, se refiere al objeto global en el navegador (generalmente `window`) o al objeto global en Node.js (generalmente `global`).

2. **En una función normal**: En una función normal, el valor de `this` depende de cómo se llama la función. Si se llama desde el contexto global, `this` se refiere al objeto global. Si se llama desde un objeto, `this` se refiere a ese objeto.

3. **En un método de objeto**: Cuando una función se invoca como un método de un objeto, `this` se refiere al objeto que posee el método.

4. **En una función constructora**: En una función constructora, `this` se refiere a la nueva instancia del objeto que está siendo creado.

5. Con `call()`, `apply()` y `bind()`: Los métodos `call()` y `apply()` permiten establecer explícitamente el valor de `this` en una función cuando se llama. El método `bind()` devuelve una nueva función con el valor de `this` predefinido.

#### Resumen

La palabra clave `this` en JavaScript es un aspecto esencial del lenguaje que permite acceder al contexto de ejecución actual. Su valor es dinámico y depende de cómo se llama una función en el momento de la ejecución. Entender correctamente `this` es crucial para escribir código JavaScript efectivo y evitar errores comunes de contexto.

### Ejemplo

```js
const persona = {
    nombre: "Ander",
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
};

persona.saludar(); // "Hola, mi nombre es Ander"
```