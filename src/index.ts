console.clear();
/*
EJERCICIO 1
Dados el siguiente snippet de código, crea la interfaz Student y úsala para sustituir los unknown:

*/
interface Student{
    name: string;
    age: number;
    occupation?: string;
}
/* QUITAR PARA VER SOLUCION EJERCICIO 1
const students: Student[] = [
    {
      name: "Patrick Berry",
      age: 25,
      occupation: "Medical scientist",
    },
    {
      name: "Alice Garner",
      age: 34,
      occupation: "Media planner",
    },
  ];
  
  const logStudent = ({ name, age }: Student) => {
    console.log(`  - ${name}, ${age}`);
  };
  
  console.log("Students:");
  students.forEach(logStudent);

 QUITAR PARA VER SOLUCION EJERCICIO 1 */ 
/*
EJERCICIO 2
Utilizando la interfaz Student del ejercicio anterior, crea la definición de User de tal manera que pueda ser o Student o Teacher. Aplica la definición de User donde sea requerido solventar los errores de tipos.

*/

interface Teacher {
  name: string;
  age: number;
  subject?: string;
}
interface User extends Student, Teacher  {}
/* QUITAR PARA VER SOLUCION EJERCICIO 2
const users: User[] = [
  {
    name: "Luke Patterson",
    age: 32,
    occupation: "Internal auditor",
  },
  {
    name: "Jane Doe",
    age: 41,
    subject: "English",
  },
  {
    name: "Alexandra Morton",
    age: 35,
    occupation: "Conservation worker",
  },
  {
    name: "Bruce Willis",
    age: 39,
    subject: "Biology",
  },
];

const logUser = ({ name, age }: User) => {
  console.log(`  - ${name}, ${age}`);
};

users.forEach(logUser);
 QUITAR PARA VER SOLUCION EJERCICIO 2 */
/*
EJERCICIO 3
Con el resultado del ejercicio 2, sustituye la función logUser por la siguiente y modifica el código aplicando las guardas que creas conveniente para corregir los errores de compilación:

*/
/* QUITAR PARA VER SOLUCION EJERCICIO 3
const logUser = (user: User) => {
  let extraInfo: string;
  if ('occupation' in user) {
    extraInfo = user.occupation || '';
  } else {
    extraInfo = user.subject || '';
  }
  console.log(` - ${user.name}, ${user.age}, ${extraInfo}`);
};

users.forEach(logUser);
  QUITAR PARA VER SOLUCION EJERCICIO 3*/

/*
EJERCICIO 4
Utilizando las misma interfaz de Student, de los ejercicios anteriores arregla los errores de TypeScript para podamos pasar aquellos criterios que necesitemos sin tener que pasar toda la información de un Student. Arregla los subsiguientes errores que aparezcan al asignar tipo a criteria.

*/
/*QUITAR PARA VER SOLUCION EJERCICIO 4
const students: Student[] = [
  {
    name: "Luke Patterson",
    age: 32,
    occupation: "Internal auditor",
  },
  {
    name: "Emily Coleman",
    age: 25,
    occupation: "English",
  },
  {
    name: "Alexandra Morton",
    age: 35,
    occupation: "Conservation worker",
  },
  {
    name: "Bruce Willis",
    age: 39,
    occupation: "Placement officer",
  },
];

const filterStudentsBy = (students: Student[], criteria: string | any): Student[] => {
  return students.filter((student) => {
    const criteriaKeys = Object.keys(criteria);
    return criteriaKeys.every((fieldName) => {
      return criteria[fieldName] === student[fieldName];
    });
  });
};

const logStudent = ({ name, occupation }: Student) => {
  console.log(`  - ${name}, ${occupation}`);
};

console.log("Students of age 35:");
filterStudentsBy(students, { age: 35 }).forEach(logStudent);

QUITAR PARA VER SOLUCION EJERCICIO 4 */

/*
EJERCICIO 5
Mediante genéricos y tuplas, tipa de forma completa la función para solventar los errores de compilación.

*/
/* QUITAR PARA VER SOLUCION EJERCICIO 5
const swap = <A,B>(arg1: A, arg2: B): [B,A] => {
  return [arg2, arg1];
};

let age: number, occupation: string;

[occupation, age] = swap(39, "Placement officer");
console.log("Occupation: ", occupation);
console.log("Age: ", age);
QUITAR PARA VER SOLUCION EJERCICIO 5*/