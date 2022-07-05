// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result; 
// }

// function pow(x, n) {
//   if (n === 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// pow(2, 1) //4
// pow(2, 2) //4
// pow(2, 3) //8
// pow(2, 4) //16


let students = {
  js: [{
      name: 'Bakai',
      progress: 100
    },
    {
      name: 'Adi',
      progress: 60
    },
  ],
  html: {
    basic:[
      {
        name: 'Pete',
        progress: 39
      },
      {
        name: 'Ann',
        progress: 18
      },
    ],
    pro: [
      {
        name: 'Sam',
        progress: 10
      }
    ],
    semi: {
      students: [{
        name: 'Test',
        progress: 100
      }]
    }
  }
};

function getTotalProgressByIteration(data){
  let total = 0;
  let students = 0;

  for(let course of Object.values(data)){
    if(Array.isArray(course)){
      students += course.length;

      for(let i= 0; i < course.length; i++){
        total += course[i].progress;
      }
    }else{
      for(let SubCourse of Object.values(course)){
          students += SubCourse.length;

          for(let i= 0; i < SubCourse.length; i++){
            total += SubCourse [i].progress;
          } 
      }
    }
  }

  return total / students;
}
// console.log(getTotalProgressByIteration(students)); 
 

function getTotalProgressByRecursion(data){
  if(Array.isArray(data)){
    let total = 0; 

    for(let i= 0; i < data.length; i++){
      total += data[i].progress;
    }

    return [ total, data.length];
  }else{
    let total = [0, 0];

    for (let subData of Object.values(data)){
      const subDataArr = getTotalProgressByRecursion(subData);
      total[0] += subDataArr[0];
      total[1] += subDataArr[1];
    }
    return total;
  }
}
const result = getTotalProgressByRecursion(students);

console.log(result[0]/result[1]);
